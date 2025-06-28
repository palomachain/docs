# How to run a Paloma Validator

This is a detailed step-by-step guide for setting up a Paloma validator. 
Please be aware that while it is easy to set up a rudimentary validating 
node, running a production-quality validator node with a robust architecture 
and security features requires an extensive setup and commitment.

## Prerequisites

- You have completed [how to run a full Paloma node](../node/build-paloma-core), 
  which outlines how to install, connect, and configure a full node.
- You are familiar with [palomad](../../develop/palomad/install-palomad).
- You have read through the [validator FAQ](faq.md)

### Technical requirements

The following requirements are recommended for running Paloma:

At least 300 mbps of network bandwidth
- 4 core or higher CPU
- 32GB RAM
- 2TB NVME storage
- At least 300mbps network bandwidth

In addition to running a Paloma node, validators should develop monitoring, 
alerting and management solutions.

Validators should expect to perform regular software updates to accommodate 
upgrades and bug fixes. There will inevitably be issues with the network, and 
this requires vigilance.

A successful validator operation will require the efforts of multiple highly 
skilled individuals and continuous operational attention. Running a validator 
is considerably more involved than mining bitcoin.

## Becoming a validator

Any participant in the network can signal their intent to become a validator by 
creating a validator and registering its validator profile. The candidate then 
broadcasts a `create-validator` transaction, which contains the following data:

- **PubKey:** Validator operators can have different accounts for validating and 
- holding liquid funds. The PubKey submitted must be associated with the private key 
- the validator will use to sign _prevotes_ and _precommits_.
- **Address:** A `Palomavaloper-` address. This is the address used to identify your 
- validator publicly. The private key associated with this address is used to bond, 
- unbond, and claim rewards.
- **Name** (also known as the **moniker**)
- **Website** _(optional but recommended)_
- **Description** _(optional but recommended)_
- **Initial commission rate:** The commission rate on block provisions, block rewards 
  and fees charged to delegators.
- **Maximum commission:** The maximum commission rate which the validator will be allowed 
  to charge. (This cannot be changed)
- **Commission change rate**: The maximum daily increase of the validator's commission 
  (This cannot be changed).
- **Minimum self-bond amount**: The minimum amount of bonded Paloma the validator needs at 
  all times. If the validator's self-bonded stake falls below this limit, its entire staking 
  pool will be unbonded.
- **Initial self-bond amount**: The initial amount of Paloma the validator self-bonds.

**Example:**

```bash
palomad tx staking create-validator
    --pubkey Palomavalconspub1zcjduepqs5s0vddx5m65h5ntjzwd0x8g3245rgrytpds4ds7vdtlwx06mcesmnkzly
    --amount "2ugrain"
    --from tmp
    --commission-rate="0.20"
    --commission-max-rate="1.00"
    --commission-max-change-rate="0.01"
    --min-self-delegation "1"
    --moniker "gazua"
    --chain-id "test-chain-uEe0bV"
    --gas auto
    --node tcp://127.0.0.1:26647
```

Once a validator is created and registered, GRAIN holders can delegate GRAIN to them, 
effectively adding stake to its pool. The total stake of a validator is the total of 
their self-bonded GRAIN plus the GRAIN bonded by external delegators.

**Only the top 175 validators are considered active or *bonded validators***. If a 
validator's total stake dips below the top 175, the validator loses its validator 
privileges and no longer serves as part of the active set, entering into **unbonding mode** 
and eventually becoming **unbonded**, or inactive.

### Validator keys

**Tendermint Consensus Keypair:**: This consensus keypair is on the 
[tendermint](https://docs.tendermint.com/master/nodes/validators.html#validator-keys) 
layer and consists of a unique Private Key used to sign block hashes associated 
with a Public Key `Palomavalconspub`.
  - This Keypair is generated when a node is created with `palomad init`.
  - The Private Key can be found in the `priv_validator_key.json` file in the `config` 
    directory after runing `palomad init`.
  - The Public Key is derived from the Private Key and can be found and seen by running 
    the command `palomad tendermint show-validator`.

    **Example:** `Palomavalconspub1zcjduc3qcyj09qc03elte23zwshdx92jm6ce88fgc90rtqhjx8v0608qh5ssp0w94c`

::: danger

A validator requires the above key in order to identify itself on the network, 
sign blocks, and sign staking/operational transactions such as voting on 
Governance proposals. It is the validator's sole responsibility to secure these 
keys and have a contingency backup plan in the event of contingencies.

:::

## 1. Retrieve your PubKey

The Consensus PubKey of your node is required to create a new validator. 
Run:

```bash
--pubkey=$(palomad tendermint show-validator)
```

## 2. Create a new validator

   ::: tip Get tokens

   In order for palomad to recognize a wallet address it must contain tokens. 
   For the testnet, use [the faucet](https://faucet.palomaswap.com/) to send GRAIN 
   to your wallet. If you are on mainnet, send funds from an existing wallet. 
   1-3 GRAIN are sufficient for most setup processes.

   :::

To create the validator and initialize it with a self-delegation, run the 
following command. `key-name` is the name of the Application Operator Key 
that is used to sign transactions.

```bash
palomad tx staking create-validator \
    --amount=5000000ugrain \
    --pubkey=$(<your-consensus-PubKey>) \
    --moniker="<your-moniker>" \
    --chain-id=<chain_id> \
    --from=<key-name> \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="1"
```

::: danger Caution

When you specify commission parameters, the `commission-max-change-rate` 
is measured as a percentage-point change of the `commission-rate`. For example, 
a change from 1% to 2% is a 100% rate increase, but the `commission-max-change-rate` 
is measured as 1%.

:::

## 3. Confirm your validator is active

If running the following command returns something, your validator is active:

```bash
palomad query tendermint-validator-set | grep "$(palomad tendermint show-validator)"
```

You are looking for the `bech32` encoded `address` in the `~/.paloma/config/priv_validator.json` file.

::: tip

Only the top 175 validators in voting power are included in the active 
validator set.

:::

## 4. Secure your keys and have a backup plan

Protecting and having a contingency backup plan for your 
[keys](faq.md#what-type-of-key-do-i-need-to-use) will help mitigate catastrophic 
hardware or software failures of the node. It is a good practice to test your backup 
plan on a testnet node in case of node failure.

## Restore a Paloma validator

A validator can be completely restored on a new Paloma 
node with the following set of keys:

- The Consensus key, stored in `~/.paloma/config/priv_validator.json`
- The mnemonic to the validator wallet

::: danger

Before proceeding, ensure that the existing 
validator is not active. Double voting has severe 
slashing consequences.

:::

To restore a validator:

1. Setup a full Paloma node synced up to the latest block.
2. Replace the `~/.paloma/config/priv_validator.json` file of the new node 
   with the associated file from the old node, then restart your node.

## Next steps

Validators **must run** the Pigeon software, which is a relayer system for 
Paloma validators to deliver messages cross-chain. After you have succesfully 
set up your validator and effectively configured your environment, navigate to the 
[Pigeon guide](../node/install-pigeon) to set up the relay system.
