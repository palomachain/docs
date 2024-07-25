# `query` subcommands

This section describes the subcommands for querying information available from `palomad`.

<!--- ## `auth`

NEEDS details
--->

## `bank balances`

Displays your account balance, account number, and sequence number (nonce).

**Syntax**

```bash
palomad query bank balances <account-address>
```

**Example**

```bash
palomad query bank balances paloma15h6vd5f0wqps26zjlwrc6chah08ryu4hzzdwhc
```

::: tip
When you query an account balance that has zero tokens or you fund an account before your node has fully synced with the chain, this error message is sent:

`No account with address <account-address> was found in the state`.
:::

## `bank denom-metadata`

Query the client metadata for coin denominations.

## `bank total`

Query the total supply of coins of the chain.

<!--- ## [`blocks`]
NEEDS DETAILS
---> 

## `comet-validator-set`

Get the full CometBFT validator set at given height.

**Syntax**
```bash
palomad query comet-validator-set <height>
```

<!--- ## [ `consensus` ]
NEEDS DETAILS 
--->


## `distribution commission`

Checks the current outstanding commission for a validator.

**Syntax**

```bash
palomad query distribution commission <validator_address>
```

**Example**

```bash
palomad query distribution commission paloma19t4gde4f8ndwx67qhbnur9yqdc31xznpksajbcy
```

## `distribution community-pool`

Checks all coins in the community pool.

**Syntax**

```bash
palomad query distribution community-pool
```

## `distribution params`

Checks the current distribution parameters.

**Syntax**

```bash
palomad query distribution params
```

The parameters are returned in YAML, as shown in the following example:

```yaml
community_tax: "0.020000000000000000"
base_proposer_reward: "0.010000000000000000"
bonus_proposer_reward: "0.040000000000000000"
withdraw_addr_enabled: true
```


## `distribution rewards`

Checks the all the current outstanding rewards by a delegator that have not been withdrawn.

**Syntax**
```bash
palomad query distribution rewards <delegator-address>
```

**Example**
```bash
palomad query distribution rewards paloma14h2od5f3vahd28uywwvt8sqbi52upnzagshtrm
```


## `distribution rewards-by-validator` 

Query all outstanding rewards by a delegator from a particular validator that have not been withdrawn.

**Syntax**
```bash
palomad query distribution rewards-by-delegator <delegator-address> <validator-address>
```

**Example**
```bash
palomad query distribution rewards-by-delegator paloma14h2od5f3vahd28uywwvt8sqbi52upnzagshtrm paloma19t4gde4f8ndwx67qhbnur9yqdc31xznpksajbcy
```

## `distribution slashes`

Checks historical slashes for a validator within a range of blocks.

**Syntax**
```bash
palomad query distribution slashes <validator-address> <start-block-height> <end-block-height>
```

**Example**
```bash
palomad query distribution slashes paloma19t4gde4f8ndwx67qhbnur9yqdc31xznpksajbcy 25 300
```

## `distribution validator-distribution-info`

Queries the validator distribution

**Syntax**
```bash
palomad query distribution validator-distribution-info <validator-address>
```

## `distribution validator-outstanding-rewards`

Queries outstanding (un-withdrawn) distribution rewards for a validator and all their delegations.

**Syntax**
```bash
palomad query distribution validator-outstanding-rewards <validator-address>
```

<!--- ## [`evidence` ]
NEEDS DETAILS
--->

## `evm chains-infos` 
Queries the chain information for all target chains.

**Syntax**
```bash
palomad q evm chains-infos
```

## `evm get-valset-by-id`
Queries the valset information, validator target chain address and powers, for a given valset id and chain id.

**Syntax**
```bash
palomad query evm get-valset-by-id <valset-id> <chain-reference-id>
```

Passing `0` as valset id, will retrieve the latest available valset for the chain.
**Examples**
```bash
palomad q evm get-valset-by-id 1458 eth-main
palomad q evm get-valset-by-id 0 eth-main
```

## `evm params`                     
Prints the parameters of the module.

**Syntax**
```bash
palomad q evm params
```

## `evm smart-contract`             
Prints the ABI and bytecode for a specific smart contract id.

**Syntax**
```bash
palomad q evm smart-contract <smart-contract-id>
```

## `evm smart-contract-deployments` 
Queries any active (not yet deployed to target chain) smart contract deployments

**Syntax**
```bash
palomad q evm smart-contract-deployments
```


## `feegrant grant`
Queries the details of a single grant by granter and grantee.

**Syntax**
```bash
palomad query feegrant grant <granter> <grantee>
```

## `feegrant grants-by-grantee` 
Queries all grants of a specific grantee

**Syntax**
```bash
palomad query feegrant grants-by-grantee <grantee>
```

## `feegrant grants-by-granter` 
Queries all grants by a granter

**Syntax**
```bash
palomad query feegrant grants-by-granter <granter>
```

## `gov deposit`

Retrieves information about a single proposal deposit on a proposal by its identifier.

**Syntax**

```bash
palomad query gov deposit <proposal-id> <depositor-address>
```

**Example**

```bash
palomad query gov deposit 4 paloma1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk
```

## `gov deposits`

Retrieves all deposits submitted to a proposal after it is created.

**Syntax**

```bash
palomad query gov deposits <proposal-id>
```

**Example**

```bash
palomad query gov deposits 5
```

## `gov proposal`

Retrieves information about one proposal.

**Syntax**

```bash
palomad query gov proposal <proposal-id>
```

**Example**

```bash
palomad query gov proposal 3
```

## `gov proposals`

Retrieves information about all available proposals.

**Syntax**

```bash
palomad query gov proposals
```

Additionally, you can query proposals filtered by details, such as `voter` or `depositor`, by appending the corresponding flag and address at the end of the command statement, as shown in the following example:

```bash
palomad query gov proposals --voter paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb
```

## `gov vote`

Retrieves information about a single vote by a specific voter.

**Syntax**

```bash
palomad query gov vote <proposal-id> <voter-address>
```

**Example**

```bash
palomad query gov vote 7 paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb
```

## `gov votes`

Retrieves all the votes submitted to the proposal.

**Syntax**

```bash
palomad query gov votes <proposal-id>
```

**Example**

```bash
palomad query gov votes 9
```

## `gov tally`

Retrieves the current tally for a specified proposal.

**Syntax**

```bash
palomad query gov tally <proposal-id>
```

**Example**

```bash
palomad query gov tally 4
```

## `gov param`

Retrieves all the parameters for the specified governance process.

**Syntax**

```bash
palomad query gov param <process-type>
```

**Example**

```bash
palomad query gov param voting
```

## `gov params`

Retrieves all the parameters for all governance processes.

**Syntax**

```bash
palomad query gov params
```

The parameters are returned in the following format:

```yaml
voting_params:
  voting_period: 5m0s
tally_params:
  quorum: "0.334000000000000000"
  threshold: "0.500000000000000000"
  veto: "0.334000000000000000"
deposit_parmas:
  min_deposit:
    - denom: ugrain
      amount: "10000000"
  max_deposit_period: 48h0m0s
```

## `skyway attestations`
Queries current and historical skyway attestations (only the most recent 1000 are stored). Optionally provide a limit to reduce the number of attestations returned.

**Syntax**
```bash
palomad q skyway attestations <chain-reference-id> <optional limit>
```

## `skyway erc20-to-denoms`         
Queries mapping of erc20 token addresses to denoms

**Syntax**
```bash
palomad query skyway erc20-to-denoms
```

## `skyway last-observed-block` 
Queries the last observed remote target chain block height. This value is expected to lag the actual block height significantly due to 1. target chain finality and 2. Consensus mirroring the state on the target chain when there is an observable transaction.

**Syntax**
```bash
palomad query skyway last-observed-block <chain-reference-id>
```

## `skyway last-observed-nonce` 
Query the last observed event nonce the remote chain.

**Syntax**
```bash
palomad query skyway last-observed-nonce <chain-reference-id>
```

## `skyway outgoing-tx-batches`     
Queries all current outgoing transaction batches.

**Syntax**
```bash
palomad query skyway outgoing-tx-batches <chain-reference-id> <orchestrator-address>
```

## `skyway params`                  
Queries parameters for the skyway module.

**Syntax**
```bash
palomad skyway params
```

## `skyway pending-batch-request`   
Prints the latest outgoing TX batch request which has not been signed by a particular orchestrator.

**Syntax**
```bash
palomad query skyway pending-batch-request <orchestrator address>
```

## `skyway pending-txs`     
Queries pending outgoing transactions waiting to go to remote target chain from an address.

**Syntax**
```bash
palomad q skyway pending-txs <address>
```

## `treasury fees`
Retrieves the current values for the community fee and the security fee.

**Syntax**
```bash
palomad q treasury fees
```

## `treasury params`
Shows the parameters of the module.

**Syntax**
```bash
palomad q treasury params
```

## `treasury relayer-fee`
Retrieve relayer fee values for all chains for a specific validator 

**Syntax**
```bash
palomad q treasury relayer-fee <validator-address>
```

## `treasury relayer-fees`
Retrieve all set relayer fees values for a given chain

**Syntax**
```bash
palomad q treasury relayer-fees <chain-reference-id>
```

## `mint annual-provisions`

Retrieves the value of annual provisions.

**Syntax**

```sh
palomad query mint annual-provisions
```

## `mint inflation`

Retrieves the current value of inflation.

**Syntax**

```sh
palomad query mint inflation
```

## `mint params`

Retrieves the mint module's parameters.

**Syntax**

```sh
palomad query mint params
```

Parameters are returned in the following format:

```yaml
mint_denom: ugrain
inflation_rate_change: "0.130000000000000000"
inflation_max: "0.200000000000000000"
inflation_min: "0.070000000000000000"
goal_bonded: "0.670000000000000000"
blocks_per_year: 6311520
```

## `palomaconsensus get-all-queue-names `
Prints all existing queue names.

**Syntax**
```bash
palomad q palomaconsensus get-all-queue-names
```

## `palomaconsensus message-by-id`
Queries a message by queue name and message id.

**Syntax**
```bash
palomad q palomaconsensus message-by-id <queue-name> <message-id>
```

## `palomaconsensus messages-in-queue`          
Queries all messages in a specific queue.

**Syntax**
```bash
palomad q palomaconsensus messages-in-queue <queue-name>
```

## `palomaconsensus params`                      
Prints the parameters of the module.

**Syntax**
```bash
palomad q palomaconsensus params
```


## `palomaconsensus queued-messages-for-signing` 
Queries all messages that need to be signed for a specific validator and queue.
**Syntax**
```bash
palomad q palomaconsensus queued-messages-for-signing <validator address> <queue name>
```

## `scheduler job`         
Finds a job by providing the job's ID. 

**Syntax**
```bash
palomad q scheduler job <job-id>
```

## `scheduler params`      
Prints the parameters of the module.

**Syntax**
```bash
palomad q scheduler params
```

## `slashing signing-info`

Retrieves a validator's signing info.

**Syntax**

```bash
palomad query slashing signing-info <validator-consensus-public-key>
```

**Example**

```bash
palomad query slashing signing-info Palomavalconspub1atjdueldlxwft8d4729pqhdhm3nlss0u4wx7wpeqb1zhjf8yr1tn7cgw2b4q4yv9na
```

## `slashing signing-infos`

Retrieves signing information of all validators.

**Syntax**

```bash
palomad query slashing signing-infos
```

## `slashing params`

Retrieves the genesis parameters for the slashing module.

**Syntax**

```bash
palomad query slashing params
```

The parameters are returned in the following format:

```yaml
signed_blocks_window: 100
min_signed_per_window: "0.500000000000000000"
downtime_jail_duration: 10m0s
slash_fraction_double_sign: "0.050000000000000000"
slash_fraction_downtime: "0.010000000000000000"
```

## `staking delegation`

Retrieves delegation information for a validator.

**Syntax**

```bash
palomad query staking delegation <delegator-address> <validator-address>
```

**Example**

```bash
palomad query staking delegation paloma1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p Palomavaloper15h6vd5f0wqps26zjlwrc6chah08ryu4hzzdwhc
```

## `staking delegations`

Retrieves delegations for a delegator on all validators.

**Syntax**

```bash
palomad query staking delegations <delegator-address>
```

**Example**

```bash
palomad query staking delegations paloma1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p
```

## `staking delegations-to`

Retrieves all of the delegations on a particular validator.

**Syntax**

```bash
palomad query staking delegations-to <validator-address>
```

**Example**

```bash
palomad query staking delegations-to Palomavaloper15h6vd5f0wqps26zjlwrc6chah08ryu4hzzdwhc
```

## `staking historical-info`

Retrieves all historical information at a specified height.

**Syntax**

```bash
palomad query staking historical-info <height>
```

**Example**

```bash
palomad query staking historical-info 23
```

## `staking params`

Retrieves all staking parameters.

**Syntax**

```bash
palomad query staking params
```

The parameters are returned in the following format:

```yaml
unbonding_time: 504h0m0s
max_validators: 100
max_entries: 100
historical_entries: 0
bond_denom: ugrain
```

## `staking pool`

Retrieves amounts stored in the staking pool.

**Syntax**

```bash
palomad query staking pool
```

The following information is returned:

- Not-bonded and bonded tokens
- Token supply
- Current annual inflation and the block in which the last inflation was processed
- Last recorded bonded shares

## `staking redelegation`

Retrieves redelegation information for an individual delegator between a source validator and a destination validator.

**Syntax**

```bash
palomad query staking redelegation <delegator-address> <src-val-addr> <dst-val-addr>
```

**Example**

```bash
palomad query staking redelegation paloma1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p Palomavaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm Palomavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj
```

## `staking redelegations`

Retrieves all redelegation information for a delegator.

**Syntax**

```bash
palomad query staking redelegations <delegator-address>
```

**Example**

```bash
palomad query staking redelegations paloma1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p
```

## `staking redelegations-from`

Retrieves all the delegations that are redelegating from a specified validator:

**Syntax**

```bash
palomad query staking redelegations-from <validator-address>
```

**Example**

```bash
palomad query staking redelegations-from Palomavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj
```

## `staking unbonding-delegation`

Retrieves information about unbonding delegations for a specified delegator and validator.

**Syntax**

```bash
palomad query staking unbonding-delegation <delegator-address> <validator-address>
```

**Example**

```bash
palomad query staking unbonding-delegation paloma1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p Palomavaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm
```

## `staking unbonding-delegations`

Retrieves all your current unbonding delegations for a specified delegator.

**Syntax**

```bash
palomad query staking unbonding-delegations <delegator-address>
```

**Example**

```bash
palomad query staking unbonding-delegations paloma1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p
```

## `staking unbonding-delegations-from`

Retrieves all the unbonding delegations from a specified validator.

**Syntax**

```bash
palomad query staking unbonding-delegations-from <validator-address>
```

**Example**

```bash
palomad query staking unbonding-delegations-from Palomavaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm
```

## `staking validators`

Retrieves the list of all registered validators.

**Syntax**

```bash
palomad query staking validators
```

To retrieve the information of a single validator, append the validator address to the end of the command statement, as shown in the following example:

```bash
palomad query staking validator Palomavaloper15h6vd5f0wqps26zjlwrc6chah08ryu4hzzdwhc
```

## `tx`

Retrieves a transaction by its hash, account sequence, or signature.

**Syntax to query by hash**

```bash
palomad query tx <hash>
```

**Syntax to query by account sequence**

```bash
palomad query tx --type=acc_seq <address>:<sequence>
```

**Syntax to query by signature**

```bash
palomad query tx --type=signature <sig1_base64,sig2_base64...>
```

## `txs`

Retrieves transactions that match the specified events where results are paginated.

**Syntax**

```bash
palomad query txs --events '<event>' --page <page-number> --limit <number-of-results>
```

**Example**

```bash
palomad query txs --events 'message.sender=cosmos1...&message.action=withdraw_delegator_reward' --page 1 --limit 30
```

## `valset get-alive-pigeons`
Prints the list of all currently alive pigeons (valoper addresses).
**Syntax**
```bash   
palomad q valset get-alive-pigeons
```

## `valset get-latest-published-snapshot`
Queries the last published snapshot for a specific target chain.
**Syntax**
```bash   
palomad q valset get-latest-published-snapshot <chain reference id>
```

## `valset get-pigeon-requirements`
Returns the minimum required pigeon version. 

**Syntax**
```bash   
palomad q valset get-pigeon-requirements
```

## `valset get-snapshot-by-id`
Queries a published snapshot by snapshot id.
**Syntax**
```bash   
palomad q valset get-snapshot-by-id <snapshot-id>
```

Passing `0` as snapshot id, will retrieve the latest available published snapshot.
**Examples**
```bash
palomad q valset get-snapshot-by-id 1458
palomad q valset get-snapshot-by-id 0
```

## `valset get-validator-jail-reason` 
Queries the jail reason for a currently jailed validator.
**Syntax**
```bash   
palomad q valset get-validator-jail-reason <validator valoper address>
```

## `valset params`
Prints the parameters of the valset module.
**Syntax**
```bash   
palomad q valset params
```

## `valset validator-info`
Queries the information for a specific validator.
**Syntax**
```bash
palomad q valset validator-info <validator valoper address>
```

## `wasm bytecode`

Retrieves the contract's WASM bytecode by referencing its ID.

**Syntax**

```sh
palomad query wasm bytecode <code-id>
```

## `wasm code`

Retrieves information about a piece of uploaded code by referencing its ID.

**Syntax**

```sh
palomad query wasm code <code-id>
```

## `wasm contract`

Retrieves the metadata information about an instantiated contract.

**Syntax**

```sh
palomad query wasm contract <contract-address>
```

## `wasm contract-store`

Retrieves data about the contract store of the address and prints the results.

**Syntax**

```sh
palomad query wasm contract-store <contract-address> <query-msg>
```

where `<query-msg>` is a JSON string that encodes the QueryMsg.

**Example**

```sh
palomad query wasm contract-store paloma1plju286nnfj3z54wgcggd4enwaa9fgf5kgrgzl '{"config":{}}'
```

## `wasm params`

Retrieves the current WASM module's parameters.

**Syntax**

```sh
palomad query wasm params
```

The parameters are returned in the following format:

```yaml
max_contract_size: 512000
max_contract_gas: 100000000
max_contract_msg_size: 1024
```

## `wasm raw-store`

Retrieves the raw store of a contract and prints the results.

**Syntax**

```sh
palomad query wasm raw-store <contract-address> <key> <subkey>
```

If the data uses a `Singleton`, it has only a key. If the data uses a prefixed data store, such as `PrefixedStorage` or `Bucket`, it can accept a subkey too.
