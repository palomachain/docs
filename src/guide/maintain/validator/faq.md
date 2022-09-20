# Validator FAQ

::: tip

Read this document thoroughly before becoming a validator.

:::

## General concepts

### What is the difference between a validator node and a full node?

A full node is a program that maintains the historical information of 
transactions and blocks of a blockchain. A validator node is a special 
type of full node that can participate in consensus. Full nodes require 
more resources than light nodes, which only processes block headers and a 
small subset of transactions. Running a full node means you are running 
a non-compromised and up-to-date version of the Paloma software with low 
network latency and no downtime.

**On Paloma, validators must run full nodes**. Full nodes can take several
hours, or even days to sync depending on the size of the network.

### What is staking?

When GRAIN holders delegate their GRAIN to a validator, they enter into 
an on-chain bond agreement, where their tokens are reallocated to maintain 
the chain for a set period of time, commonly known as staking. 

The Paloma mainnet is a public Proof of Stake (PoS) blockchain. This means that 
a validator's weight (total stake) is determined by the amount of staked tokens 
(GRAIN) they delegate to themselves, plus the GRAIN bonded to them by external 
delegators. The weight of a validator determines whether or not they are an 
active validator and how frequently they can propose a block. Staking increases 
a validator's weight, which helps them, and in return delegators get rewarded.
Validators with a higher weight will propose more blocks, and in turn make more 
revenue.

The active validator set is currently made up of 175 validators, who hold the 
most GRAIN. The bottom validator’s stake always forms the barrier for entry into 
the network. Creating a validator with more stake than the bottom validator is 
the only way to enter the active set. If validators double-sign, or are frequently 
offline, they risk their staked GRAIN, including GRAIN delegated by users, being 
slashed by the protocol to penalize negligence and misbehavior.

### What is a delegator?

Delegators are GRAIN holders who want to receive staking rewards without the 
responsibility of running a validator. Through Paloma Station, a user can delegate 
GRAIN to a validator and in exchange receive a part of a validator's revenue.

Delegators share the benefits and rewards of staking with their Validator. 
If a validator is successful, its delegators will consistently share in the rewards 
structure. If a validator is slashed, the delegator’s stake will also be slashed. 
This is why delegators should perform due diligence on validators before delegating. 
Delegators can also diversify by spreading their stake over multiple validators.

Delegators play a critical role in the system, as they are responsible for choosing 
validators. Being a delegator is not a passive role. Delegators should remain vigilant, 
actively monitor the actions of their validators, and re-delegate whenever they feel 
their current validator does not meet their needs.

## Becoming a Validator

### What is expected of a validator?
Validators fulfill two very important functions. 
1. They secure the network.
2. They are relay pigeons who send bi-directional messages between Paloma and the supported target chains.


### What is "self-bonding"? How can I increase my "self-bond"?

A "self-bond" refers to the amount of GRAIN a validator delegates to 
themself. A validator can increase their self bond by delegating more 
GRAIN to their validator account.

### Are validators required to self-bond GRAIN?

No, but self-bonding has benefits. A validator's total stake is made up 
of their self-bonded stake plus their delegated stake. This means that 
a validator can compensate for low amounts of self-bonded GRAIN by 
attracting more delegators. This is why reputation is very important for 
validators. Although validators are not required to self-bond GRAIN, all 
validators should have "skin-in-the-game". This can help make a validator 
more trustworthy.

### Can I delegate to a validator outside of the active set?

The active validator set is a sub-validator pool that represents
the validators who are able to participate in consensus. The validator
pool is determined by the 175 highest staked validators. As a delegator
you can delegate to any validator in sync with the network, although
that validator may not [yet] be part of the active set, meaning, they
cannot participate in consensus and produce block rewards for their
services.

Be careful when delegating to validators outside of the active set. 
Some inactive validators may be jailed or are no longer supported. 

### Is there a faucet?

Use the [Paloma faucet](https://faucet.palomaswap.com/) to obtain coins for 
the testnet.

### Is there a minimum amount of GRAIN that must be staked to be an active (bonded) validator?

There is no set minimum. The top 175 validators with the highest total 
stake (where total stake = self-bonded stake + delegated stake) make up 
the active validator set. The bottom 175th validator sets the barrier 
to entry for the active set.

### How will delegators choose their validators?

Delegators are free to choose validators according to their own criteria. 
This may include:

- **Amount of self-bonded GRAIN:** The amount of GRAIN a validator self-bonds 
  to its staking pool. A validator with a higher amount of self-bonded GRAIN 
  has more skin in the game, making it more liable for its actions.

- **Amount of delegated GRAIN:** The total amount of GRAIN delegated to a 
  validator. A high stake shows that the community trusts this validator; 
  however, this also means that a validator is a bigger target for hackers. 
  Large stakes provide large voting power. This weakens the network. At any 
  given time, if 33% or more of staked GRAIN becomes inaccessible, the network 
  will halt. Through incentives and education, this weakness can be prevented 
  by delegating away from validators that have too much voting power. Validators 
  sometimes become less attractive as their amount of delegated GRAIN grows.
  
  Delegators should also be aware of validators who may be self-delegating through
  other accounts.

- **Commission rate:** The commission applied to rewards by a validator before 
  being distributed to its delegators. The consistency of the commission rate
  is also something to consider, as the rate of return from a given validator
  may be unreliable.

- **Track record:** Delegators can look at the track record of a validator 
  they plan to delegate to. This includes seniority, past votes on proposals, 
  historical average uptime, and if, or how often the node was compromised.

Validators can also provide a website address to complete their resume. 
Validators need to build a good reputation to attract delegators. 
It's good practice for validators to have their setup audited by third 
parties. 

::: tip Audits

Please note that the Volume Finance team will not approve or conduct any 
audits. The Volume Finance team also has no control over the validators
that are onboarded to the network and participate in consensus.

:::


### Do validators need to be publicly identified?

No, they do not. Each delegator will value validators based on their 
own criteria. Validators are typically advised to register a website 
address when they nominate themselves so they can advertise their operation 
as they see fit.

### What is the unbonding period?

When a validator or a delegator wants to retrieve part or all of their 
deposit, they send an unbonding transaction. The staked GRAIN then undergoes 
a *21 day unbonding period*, during which it is vulnerable to slashing 
risks for potential misbehavior committed by the validator before the start 
of the unbonding process. Delegators will be unable to receive rewards
when unbonding their stake.

Unbonding periods are used as a mechanism to build a sustainable economic
security model and prevent the supply from diluting. There is also an 
opportunity cost that is associated for each delegator, and it is up to each 
delegator to determine what makes the most sense. 

### Can a validator run away with a delegators' GRAIN?

**No.** By delegating to a validator, users delegate 
staking power. The more staking power a validator has, the more weight it 
has in the consensus and processes. This does not mean that the validator 
has custody of its delegators' GRAIN.

::: tip

It is impossible for a validator to run away with a delegator's funds.

:::

Although delegated funds cannot be stolen by validators, delegators are 
still liable if a validator misbehaves. When this happens, a delegator's 
stake will be partially slashed in proportion to their relative stake.

### How often will a validator be chosen to propose the next block? Does it go up with the quantity of GRAIN staked?

The validator that is selected to produce the next block is called the **proposer**, 
or the "leader" in the consensus for the round. Each proposer is selected 
deterministically, and the frequency of being chosen is equal to the relative 
total stake of the validator (total stake = self-bonded stake + delegators stake). 
For example, if the total bonded stake across all validators is 100 GRAIN, and a 
validator's total stake is 10 GRAIN, then this validator will be chosen 10% of the 
time as the proposer.

To understand more about the proposer selection process in Tendermint BFT consensus, read more [in their official docs](https://docs.tendermint.com/master/spec/consensus/proposer-selection.html).

### How can validators protect themselves from DDoS attacks?

DDoS (Denial-of-service) attacks occur when an attacker sends a flood of 
internet traffic to a validator's IP address. This can prevent a validator's 
server from connecting to the internet.

To do this, an attacker scans the network, tries to learn the IP address of 
various validator nodes, and disconnects them by flooding them with traffic.

One way to mitigate these risks is to carefully structure a validator network 
with a sentry node architecture.

Validator nodes should only connect to full-nodes they trust. They can be ran by 
the same validator or other validators they know. A validator node will typically 
run in a data center. Most data centers provide direct links to major cloud providers. 
A validator can use these links to connect to sentry nodes in the cloud. This shifts 
the burden of denial-of-service from the validator's node directly to its sentry nodes. 
This may require new sentry nodes to be spun up or activated to mitigate attacks on 
existing ones.

Sentry nodes can be quickly spun up or used to change IP addresses. Because 
links to the sentry nodes are in private IP space, an internet based attack can't 
disturb them directly. This will ensure a validator's block proposals and votes 
always make it to the rest of the network.

For more on sentry node architecture, see the following 
[Cosmos forum](https://forum.cosmos.network/t/sentry-node-architecture-overview/454).
