# `tx` subcommands

## `bank send`

Sends coins from one account to another account.

**Syntax**

```bash
palomad tx bank send \
    <from-key-or-address> \
    <to-address> \
    <coins> \
    --<chain-id> \
```

where

- `<from-key-or-address>` is either the key name or the address. If the `--generate-only` flag is used, only addresses are accepted.
- `to-address` is an account address.
- `<coins>` is a comma-separated list of coins specified as `<amount><coin-denominator>`. For example, `1000usdr` or `1000uGRAIN,1000usdr`.

**Example**

```bash
palomad tx bank send \
    paloma15h6vd5f0wqps26zjlwrc6chah08ryu4hzzdwhc \
    paloma14h2od5f3vahd28uywwvt8sqbi52upnzagshtrm \
    8600000ugrain \
    --paloma-testnet-16 \
```

## `distribution fund-community-pool`

Funds the community pool with the specified amount.

**Syntax**

```bash
palomad tx distribution fund-community-pool <amount>
```

**Example**
palomad tx distribution fund-community-pool 100uGRAIN

## `distribution set-withdraw-addr`

Changes the default withdrawal address for rewards associated with an address.

**Syntax**

```bash
palomad tx distribution set-withdraw-addr <withdrawal-address>
```

**Example**

```bash
palomad tx distribution set-withdraw-addr paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb
```

## `distribution withdraw-all-rewards`

Withdraws all rewards.

**Syntax**

```bash
palomad tx distribution withdraw-all-rewards
```

## `distribution withdraw-rewards`

Withdraws your rewards against a validator.

**Syntax**

```bash
palomad tx distribution withdraw-rewards <validator-address>
```

**Example**

```bash
palomad tx distribution withdraw-rewards paloma19t4gde4f8ndwx67qhbnur9yqdc31xznpksajbcy
```

## `evm remove-smart-contract-deployment`
Removes a smart contract deployment that is stuck. When a pending smart contract deployment is removed, a new deployment attempt will be triggered. 

**Syntax**
```bash
palomad tx evm remove-smart-contract-deployment <smart contract id> <chain reference id>
```

**Example**
```bash
palomad tx evm remove-smart-contract-deployment 4 eth-main
```

## `feegrant grant`
Grants a fee allowance to an address. Note that the `--from` flag is ignored as it is implied by the `granter`

**Syntax**
```bash
palomad tx feegrant grant <granter_key_or_address> <grantee>
```

## `feegrant prune`
Prunes up to 75 expired allowances in order to reduce the size of the store when the number of expired allowances is large.

**Syntax**
```bash
palomad tx feegrant prune
```

## `feegrant revoke`      
Revoke a fee grant from a granter to a grantee. Note, the '--from' flag is ignored as it is implied from the `granter`.

**Syntax**
```bash
palomad tx feegrant revoke <granter_key_or_address> <grantee>
```

## `gov cancel-proposal`
Cancels governance proposal before the voting period ends. Must be signed by the proposal creator.

**Syntax**
```bash
palomad tx gov cancel-proposal <proposal-id>
```


## `gov deposit`

For a proposal to be sent to the network, the amount deposited must be above a minimum amount specified by `minDeposit` (initial value is `50000000uGRAIN`). If the proposal you previously created didn't meet this requirement, you can still increase the total amount deposited to activate it. After the minimum deposit is reached, the voting period for the proposal begins.

**Syntax**

```bash
palomad tx gov deposit <proposal-id> "<deposit-amount>" \
    --from=<name> \
    --chain-id=<chain-id>
```

**Example**

```bash
palomad tx gov deposit 15 "10000000ugrain" \
    --from=paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb \
    --chain-id=paloma-testnet-16
```

::: danger
Proposals that don't meet this requirement are deleted after `MaxDepositPeriod` is reached.
:::


## `gov submit-legacy-proposal`

Submits proposals and deposits. To create a governance proposal, you must submit an initial deposit along with a title and description of your proposal. Alternatively, you can provide the proposal directly through the `--proposal` flag, which points to a JSON file containing the proposal.

### Text proposals

**Syntax**

```bash
palomad tx gov submit-legacy-proposal \
    --title=<title> \
    --description=<description> \
    --type="Text" \
    --deposit="<amount>" \
    --from=<name-or-address> \
    --chain-id=<chain-id>
```

**Example**

```bash
palomad tx gov submit-legacy-proposal \
    --title=Funding for NFT platform \
    --description=Information about the NFT platform \
    --type="Text" \
    --deposit="100000ugrain" \
    --from=paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb \
    --chain-id=paloma-testnet-16
```

### Parameter-change proposals

When you submit a proposal to change a parameter, it is recommended that you send the proposal as a JSON file.

**Syntax**

```bash
palomad tx gov submit-legacy-proposal \
    param-change <path/to/proposal.json> \
    --from=<name> \
    --chain-id=<chain_id>
```

**Example**

```bash
palomad tx gov submit-legacy-proposal \
    param-change /proposals/proposal.json \
    --from=paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb \
    --chain-id=paloma-testnet-16
```

where `proposal.json` contains the following information:

```json
{
  "title": "Param Change",
  "description": "Update max validators",
  "changes": [
    {
      "subspace": "staking",
      "key": "MaxValidators",
      "value": 105
    }
  ],
  "deposit": [
    {
      "denom": "ugrain",
      "amount": "10000000"
    }
  ]
}
```

::: danger
Because parameter changes are evaluated but not validated, ensure that new value you propose is valid for its parameter. For example, the proposed value for `MaxValidators` must be an integer, not a decimal.
:::

### Community pool spend proposal

When you submit a community pool spend proposal, it is recommended that you send the proposal as a JSON file.

**Syntax**

```bash
palomad tx gov submit-legacy-proposal \
    community-pool-spend <path/to/proposal.json> \
    --from=<name> \
    --chain-id=<chain_id>
```

**Example**

```bash
palomad tx gov submit-legacy-proposal \
    community-pool-spend /proposals/proposal.json \
    --from=paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb \
    --chain-id=paloma-testnet-16
```

where `proposal.json` contains the following information:

```json
{
  "title": "Community Pool Spend",
  "description": "Pay me some GRAINs!",
  "recipient": "paloma1s5afhd6gxevu37mkqcvvsj8qeylhn0rzn7cdaq",
  "amount": [
    {
      "denom": "ugrain",
      "amount": "10000"
    }
  ],
  "deposit": [
    {
      "denom": "ugrain",
      "amount": "10000"
    }
  ]
}
```

### `gov evm change-min-on-chain-balance`
**Syntax**
```bash
palomad tx gov submit-legacy-proposal evm change-min-on-chain-balance <chain-reference-id> <balance>
```

**Example**
```bash
palomad tx gov submit-legacy-proposal evm change-min-on-chain-balance eth-main 50000000
```

### `gov submit-legacy-proposal gravity set-bridge-transfer-limit`
Proposal to set the gravity Brige transfer limit for the specified token.
`limit-period` must be one of: NONE, DAILY, WEEKLY, MONTHLY, YEARLY. Setting it to NONE effectively disables the limit.    
`limit-period` will be converted to a block window. At most, `limit` tokens can be transferred within each block window. After that transfers will fail.


**Syntax**
```bash
palomad tx gov submit-legacy-proposal gravity set-bridge-transfer-limit <token> <limit> <limit-period>
```

**Examples**
```bash
set-bridge-transfer-limit ugrain 1000000 DAILY
```

### `gov submit-legacy-proposal gravity set-bridge-tax`
Proposal to set the gravity brige tax

**Syntax**
```bash
palomad tx gov submit-legacy-proposal gravity set-bridge-tax <tax-rate> 
```
Each outgoing transfer from Paloma will pay a tax. Tax amount is calculated using `tax-rate`, which must be non-negative.


### `gov evm propose-chain-removal`
Proposal to remove an existing EVM chain from Paloma. 

**Syntax**
```bash
palomad tx gov submit-legacy-proposal evm propose-chain-removal <chain-reference-id>
```

### `gov evm propose-new-chain`
Proposal to add a new EVM chain. 

**Syntax**
```bash
palomad tx gov submit-legacy-proposal evm propose-new-chain <chain-reference-id> <chain-id> <min-on-chain-balance> <block-height> <block-hash-at-height>
```

**Example**
```bash
palomad tx gov submit-legacy-proposal evm propose-new-chain blast-main 81457 5000000 251462 0xf5ce8b11e5ff01cbb989748c77cbf71378ab23df5fa6e2fe7657b8f024de76f1
```

### `gov evm propose-new-smart-contract`
Proposal to deploy a new compass contract to all deployed target chains. 

**Syntax**
```bash
palomad tx gov submit-legacy-proposal evm propose-new-smart-contract '[JSON ABI BLOB]' [HEX BLOB]
```

### `gov evm propose-relay-weights`
Changes the relay weights for a given EVM chain referenced by the chain-reference-id.

**Syntax**
```bash
palomad tx gov submit-legacy-proposal evm propose-relay-weights <chain-reference-id> <weights>
```

**Example**
```bash
palomad tx gov submit-legacy-proposal evm propose-relay-weights eth-main {"fee": "0.50", "uptime": "0.75", "successRate": "0.90", "executionTime": "0.20", "featureSet": "0.95"}
```

## `gov vote`

After a proposal's deposit reaches the `MinDeposit` value, the voting period begins, and bonded GRAIN holders can vote.

**Syntax**

```bash
palomad tx gov vote \
    <proposal-id> <vote-type> \
    --from=<name> \
    --chain-id=<chain_id>
```

**Example**

```bash
palomad tx gov vote \
    7 yes \
    --from=paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb \
    --chain-id=paloma-testnet-16
```

## `gravity2 cancel-send-to-eth`
Removes an entry from the transaction pool, preventing your tokens from going to the target chain and refunding the send.

**Syntax**
```bash
palomad tx gravity2 cancel-send-to-eth <transaction id>
```

## `gravity2 send-to-eth`
Adds a new entry to the transaction pool to withdraw an amount from the EVM bridge contract. This will not execute until a batch is requested and then actually relayed. Your funds can be reclaimed using cancel-send-to-eth so long as they remain in the pool

**Syntax**
```bash
palomad tx gravity2 send-to-eth \
  <destination address> <amount> <chain-reference-id>
```

**Example**
```bash
palomad tx gravity2 send-to-eth \
  0xd80fc91e72505e61bf07f189190b087651713000 \
  10000000ugrain \
  "gnosis-main"
  ```

## `scheduler create-job`  
Creates a new job

**Syntax**
```bash
palomad tx scheduler create-job --job-id <job-id> --chain-type <chain-type> --chain-ref-id <chain-reference-id> --definition <path to definition json> --payload <path to payload json> --payload-modifiable <boolean>
```

**Example**
```bash
palomad tx scheduler create-job \
  --job-id example-job \
  --chain-type evm \
  --chain-ref-id gnosis-main \
  --definition home/definition.json \
  --payload home/payload.json \
  --payload-modifiable=true
```

## `scheduler execute-job` 
Executes an existing job given a job id and and an optional payload file. Payload format must match the job's payload format. E.g. you can't put payload in the CosmWasm type while the job is for the EVM chain. If the job doesn't support payload modification, the transaction will fail. If the message creator is not allowed to execute the job, the transaction will fail.

**Syntax**
```bash
palomad tx scheduler execute-job <job-id> --payload <payload.json>
```


## `slashing unjail`

Releases a jailed validator.

**Syntax**

```bash
palomad tx slashing unjail
```

**Example**

```bash
palomad tx slashing unjail
```

## `staking create-validator`

Creates a new validator that is initialized with a self-delegation.

**Syntax**

```bash
palomad tx staking create-validator \
    --amount=<ugrain-amount> \
    --pubkey=$(palomad tendermint show-validator) \
    --moniker="<moniker>" \
    --website="<validator-website>" \
    --identity="<keybase-identity>" \
    --details="<validator-optional-details" \
    --commission-rate="<commission-rate>" \
    --commission-max-rate="<commission-max-rate>" \
    --commission-max-change-rate="<commission-max-change-rate>" \
    --min-self-delegation="<self-delegation-amount>"
    --chain-id=<chain-ID> \
    --from=<key-name> \
```

## `staking delegate`

Delegates an amount of liquid coins from your wallet to a validator.

**Syntax**

```bash
palomad tx staking delegate <validator-address> <amount>
```

**Example**

```bash
palomad tx staking delegate Palomavaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm 2500stake
```

## `staking edit-validator`

Edits an existing validator account.

**Syntax**

```bash
palomad tx staking edit-validator \
    --moniker="<moniker>" \
    --details="<validator-optional-details>" \
    --commission-rate="commission-rate>" \
    --min-self-delegation="<minimum-self-delegation-amount" \
```

## `staking redelegate`

Redelegates an amount of illiquid staking tokens from one validator to a different validator.

**Syntax**

```bash
palomad tx staking redelegate <from-validator-address> <to-validator-address> <amount>
```

**Example**

```bash
palomad tx staking redelegate Palomavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj Palomavaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm 350stake
```

## `staking unbond`

Unbonds an amount of bonded shares from a validator.

**Syntax**

```bash
palomad tx staking unbond <validator-address> <stake-amount>
```

**Example**

```bash
palomad tx staking unbond Palomavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 600stake
```

## `upgrade software-upgrade`
Proposal for a software upgrade. The upgrade height should be chosen to be be hit after the proposal has passed. If the upgrade height is reached before the voting end time of the proposal, the proposal will fail. 

**Syntax**

```bash
palomad tx upgrade software-upgrade <name> \
    --title=<title> \
    --description=<description> \
    --upgrade-height=<block-height> \
    --upgrade-info=<binary-details> \
    --type="Text" \
    --deposit="<amount>" \
    --from=<name-or-address> \
    --chain-id=<chain_id>
```

**Example**

```bash
palomad tx upgrade software-upgrade v1.12.1 \
    --title="Upgrade to v1.12.1" \
    --description="let's upgrade to v1.12.1" \
    --upgrade-height=200043 \
    --upgrade-info='{"binaries":{"linux/amd64":"https://github.com/palomachain/paloma/releases/download/v1.12.1/paloma_Linux_x86_64.tar.gz"}}' \
    --type="Text" \
    --deposit="10000000ugrain" \
    --from=paloma13a8ddv3h7kbcn73akcbpe7ueks22vaolewpaxmb \
    --chain-id=paloma-testnet-16
```

<!-- ## `upgrade cancel-software-upgrade`
Cancels a pending software upgrade proposal. 

**Syntax**

```bash
palomad tx upgrade cancel-software-upgrade --title "<title>" --description "<description>"
```

**Example**

```bash
palomad tx upgrade cancel-software-upgrade --title "Upgrade to v0.5.0-beta3" --description "let's upgrade to v0.6.0-beta3"
```
--> 

## `wasm clear-admin`

Removes the contract admin so that the contract cannot be migrated.

**Syntax**

```bash
palomad tx wasm clear-admin <contract-address>
```

## `wasm execute`

Invokes processing functions on the smart contract.

**Syntax**

```sh
palomad tx wasm execute <contract-address> <handle-msg> <coins>
```

Where `<handle-msg>` is a raw JSON string containing the `HandleMsg` that is parsed and routed to the correct message handling logic in the contract, and `<coins>` is the optional amount of coins specified in a comma-separated list that you want to send with your message, in case the logic requires some fees.

## `wasm instantiate`

Creates a new contract by referencing the code ID of a contract that has been uploaded.

**Syntax**

```sh
palomad tx wasm instantiate <code-id> <init-msg> <coins>
```

where `<init-msg>` is a JSON string containing the `InitMsg` to initialize your contract's state, and `<coins>` is the optional amount of coins specified in a comma-separated list that you want to send to the new contract account.

**Example**

```sh
palomad tx wasm instantiate 1 '{"arbiter": "Paloma~~"}' "1000000uGRAIN"
```

## `wasm migrate`

Updates the code ID of the contract to migrate to a new code ID. This command can be issued only from the key corresponding to the contract's owner.

**Syntax**

```sh
palomad tx wasm migrate <contract-address> <new-code-id> <migrate-msg>
```

**Example**

```sh
palomad tx wasm migrate Paloma... 10 '{"verifier": "Paloma..."}'
```

## `wasm store`

Uploads a new WASM binary or migrates to existing binary to the paloma-testnet-16 release.

**Syntax for a new WASM binary**

```sh
palomad tx wasm store <path-to-wasm-file>
```

where `<path-to-wasm-file>` is the path of a file that is the compiled binary of the smart contract code that you want to upload.

## `wasm update-admin`

Updates a contract owner to a new address. This command can be issued only from the key corresponding to the contract's owner.

**Syntax**

```sh
palomad tx wasm update-admin <contract-address> <new-owner>
```
