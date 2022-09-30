# Governing Paloma

Paloma is a decentralized public blockchain governed by community members. Governance is the democratic process that allows grain holders and validators to make changes to the Paloma protocol. 

### Proposals

Proposals start as ideas within the community. A community member drafts and submits a proposal alongside an initial deposit. See details on the process [here](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64)

The most common proposal types include:

- `ProposeNewChain`: To propose a new target chain that messages can be sent to and received from. 
- `ProposeNewSmartContract`: To deploy a new [Compass contract](../applications/compass-evm/overview) on a target chain. 
- `ParameterChangeProposal`: To change the parameters defined in each module.

### Voting process

Community members vote with their staked Grain. One staked Grain equals one vote. If a user fails to specify a vote, their vote defaults to the validator they are staked to. Validators vote with their entire stake unless specified by delegators. For this reason, it is very important that each delegator votes according to their personal preferences.

The following is a basic outline of the governance process.

1. A user submits a proposal and a 2-day deposit period begins.
2. Users deposit Grain as collateral to back the proposal. This period ends once a minimum threshold of 10 Grain is deposited. Deposits are to protect against spam.
3. The two-day vote period begins.
    The voting options are:
    - `Yes`: In favor.
    - `No`: Not in favor.
    - `NoWithVeto`: Not in favor, the deposit should be burned.
    - `Abstain`: Voter abstains.
4. The votes are tallied.
    Proposals pass if they meet three conditions:
    - `Quorum` is met: at least 33% of all staked Grain must vote.
    - The total number of `NoWithVeto` votes is less than 33% of the total vote.
    - The number of `Yes` votes reaches a 50% majority.
    If the previous conditions are not met, the proposal is rejected.
5. Accepted proposals get put into effect.
6. Deposits get refunded or burned.

Once accepted, the changes described in a governance proposal are automatically put into effect by the proposal handler. 

### Deposits

Deposits protect against unnecessary proposals and spam. Users can veto any proposal they deem to be spam by voting `NoWithVeto`.

Deposits get refunded if **all** of the following conditions are met:
- The minimum deposit of 10 Grain is reached within the two-day deposit period.
- `Quorum` is met: the number of total votes is greater than 33% of all staked Grain
- The total number of `NoWithVeto` votes is less than 33% of the total vote.
- A vote returns a majority of `Yes` or `No` votes.

Deposits are burned under any of the following conditions:
- The minimum deposit of 10 Grain is not reached within the two-day deposit period.
- `Quorum` is not met: the number of total votes after the two-day voting period is less than 33% of all staked Grain.
- the number of `NoWithVeto` votes is above 33% of the total vote.