# Validating on Paloma

Paloma is powered by the Tendermint consensus, an asynchronous, BFT
consensus mechanism that uses DPoS (delegated proof of stake). Validators 
participating in consensus will propose blocks of transactions from the 
mempool and aim reach consensus by broadcasting votes on their state. 
Validators on Paloma are required to run full nodes, commit new blocks to 
the Paloma blockchain, and participate in governance.

Paloma validators are elected into the validator pool by delegated stake
from Paloma delegators, and will cast votes on behalf of their delegators. 
A validator's voting power is weighted according to their total stake. 

The top 175 validators make up the **active validator set** and are the 
only validators that sign blocks and receive revenue from block production.

## Validator responsibilities

On Paloma, a validator must:

- **Run the correct software versions:** Validators need to make sure that 
  their servers are always online, and that their private keys are not compromised.

- **Provide oversight and feedback on the correct deployment of community pool funds:** 
  The Paloma protocol includes a governance system for proposals to facilitate the 
  adoption of its currencies. Validators are expected to hold budget executors to 
  provide transparency and to use funds efficiently.

- **Be active members of the community:** Validators should always be up-to-date with 
  the current state of the ecosystem so that they can easily adapt to any change.

- **Relay and verify cross-chain messages**: Validators **must run** the Pigeon software,
  which is a relayer system for Paloma validators to deliver messages cross-chain. View 
  the [Pigeon guide](../node/install-pigeon) for more details.

::: danger System administration

Validating requires a significant amount of system administration 
knowledge and experience. and should be only pursued if a user has 
significant system administration experience.

Validators are required to stake real value through a bond deposit 
on the chain in order to participate in consensus. Mis-operation of a 
validator can led to serious consequences that result in the loss of 
funds.

When in doubt, never hesitate to reach out to the Paloma or Cosmos 
community for questions or concerns about validating.

:::

A successful validator operation will require the efforts of multiple 
highly-skilled individuals and continuous operational attention. 
Running a validator is considerably more involved than mining bitcoin. 
Running an effective operation is critical to avoiding unexpected 
unbonding or being slashed. This includes being able to respond to 
attacks, outages, as well as to maintain security and isolation in your 
data center.

::: details New validators

Take advantage of the testnet environment if you would like to get
started with validating on Paloma. Start by setting up a full node and 
understand the different components. 

Take the time to dipher what is happening on-chain when blocks are 
produced, how consensus operates as a state machine, and how consensus 
is reached. Break down transactions, how validators verify and sign 
transactions, the block structure, the commitment scheme, and more.

Paloma is an omnichain interoperability protocol built on the
CosmosSDK, meaning, validators should understand message passing
and cross-chain consensus.

Don't rush into validating if you feel like there are gaps that may
jepordize your funds. Of course, there is always a risk when staking
on the blockchain, but there is a big difference when staking with 
confidence and staking without.

:::

## Validator states

After a validator is created with the `create-validator` 
transaction, it can be in three states:

- `bonded`: A validator that is in the active set and participates in consensus. 
  This validator is earning rewards and can be slashed for misbehavior.

- `unbonding`: A validator that is not in the active set and can't not participate 
  in consensus. This validator is not earning rewards but can still be slashed for 
  misbehaviour. This is a transition state from `bonded` to `unbonded`. If a validator 
  does not send a `rebond` transaction while in `unbonding` mode, it will take three 
  weeks for the state transition to complete.

- `unbonded`: A validator that is not in the active set and not signing blocks. 
  Unbonded validators can't be slashed and can't earn any rewards from their operation. 
  It is still possible to delegate GRAIN to unbonded validators. Un-delegating from 
  an `unbonded` validator is immediate.

All Delegators have the same state as their validator.

Delegations are not necessarily bonded. GRAIN can be delegated and bonded, delegated 
and unbonding, delegated and unbonded, or liquid.

## Incentive scheme

Each member of a validator's staking pool (validators and their associated delegators)
earns revenue:

- **Gas**: 
  Transactions are gas metered on Paloma and fees are added onto each 
  transaction to pay for the consumption of computational resources during 
  execution. This also helps to prevent transaction spamming.

- **Inflation rewards**: 
  Every block, new GRAIN is minted and released to validators and delegators 
  as staking rewards. The rate for the minting of this new GRAIN is fixed at 7% 
  per year.


This total revenue is divided among a validator's staking pool according to each 
validator's weight. The revenue is then divided among delegators in proportion to 
each delegator's stake. Note that a commission on delegators' revenue is applied 
by the validator before it is distributed.

### Validator commission

Validators can set commissions on the fees they receive as an additional incentive.

The revenue received by a validator's pool is split between a validator and 
their delegators. A validator can apply a commission on the part of the revenue 
that goes to its delegators. This commission is set as a percentage. Each validator 
is free to set its initial commission, maximum daily commission change rate, and 
maximum commission. The mainnet enforces the parameters that each validator sets. 
These parameters can only be defined when initially declaring candidacy, and may 
only be constrained further after being declared. 

Validators who set their commission rate to 100% are not seeking delegations as the
entire commission goes to them. This is the case when the validator has enough 
self-stake.

### Block provisions distribution

Block provisions are distributed proportionally to each validator relative to their 
total stake. This means that even though each validator gains rewards with each provision, 
all validators will still maintain equal weight.

### Fees distribution

Fees are distributed to validators in the same way as commission: proportionally to 
each validator relative to their total stake. A Block proposer can also get a bonus if 
the proposer includes more than the minimum of required precommits.

### Block rewards

When a validator is selected to propose the next block, they must include at least 
two-thirds of the precommits for the previous block in the form of validator signatures. 
Proposers who include more than two thirds receive a bonus proportional to the amount of 
additional precomits. This reward ranges from 1% if the proposer includes two thirds of the 
precommits to 5% if the proposer includes 100% of the precommits. If a proposer waits too 
long however, other validators may timeout and move on to the next proposer. This is why 
validators have to find a balance between wait time to get the most signatures and the risk 
of losing out on proposing the next block. This feature aims to incentivize non-empty block 
proposals, better networking between validators, and to mitigate censorship.

::: details Block reward example

There are 10 validators with equal stake. Each has a 1% commission and 20% self-bonded 
GRAIN. If a successful block collects 1005 SDT in fees, and the proposer includes 100% of 
the signatures in their block, they will receive the full 5% bonus.

Use this simple equation to find the reward $R$ for each validator:

$$9R ~ + ~ R ~ + ~ 5\%(R) ~ = ~ 1005 ~ \Leftrightarrow ~ R ~ = ~ 1005 ~/ ~10.05 ~ = ~ 100$$

- For the validator that proposes a block:
  - The pool obtains $R ~ + ~ 5\%(R)$: 105 SDT
  - Commission: 105 SDT ~ * ~ 80\% ~ * ~ 1\%$ = 0.84 SDT
  - Validator's reward: 105 SDT ~ * ~ 20\% ~ + ~ Commission$ = 21.84 SDT
  - Delegators' rewards: 105 SDT ~ * ~ 80\% ~ - ~ Commission$ = 83.16 SDT \(each delegator will be able to claim its portion of these rewards in proportion to their stake\)

- For all other validators:
  - The pool obtains $R$: 100 SDT
  - Commission: 100 SDT ~ * ~ 80\% ~ * ~ 1\%$ = 0.8 SDT
  - Validator's reward: 100 SDT ~ * ~ 20\% ~ + ~ Commission$ = 20.8 SDT
  - Delegators' rewards: 100 SDT ~ * ~ 80\% ~ - ~ Commission$ = 79.2 SDT \(each delegator will be able to claim its portion of these rewards in proportion to their stake\)

:::

## Slashing 

::: danger Warning

Even if a validator does not intentionally misbehave, it 
can still be slashed if its node crashes, loses connectivity, gets 
DDoSed, or if its private key is compromised.

:::

If a validator misbehaves, their bonded stake along with their delegators' 
stake will be slashed. The severity of the punishment depends on the type of fault. 
There are main faults that can result in slashing of funds:

- **Double-signing:** If someone reports on chain A that a validator signed two blocks 
  at the same height on chain A and chain B, and if chain A and chain B share a common 
  ancestor, then this validator will get slashed on chain A.

- **Unavailability:** If a validator's signature has not been included in the last 
  X blocks, the validator will get slashed by a marginal amount proportional to X. 
  If X is above a certain limit, then the validator will get unbonded.

## Additional resources

- [Paloma validator Discord](https://discord.com/invite/NF2MNpDXZJ).
- [Paloma Telegram](https://t.me/palomachain)
- [The validator FAQ](faq.md)
