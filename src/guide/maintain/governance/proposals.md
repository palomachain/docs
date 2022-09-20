# Create a Proposal

Paloma has a thought-through on-chain governance system that is
able to determine the future state of the network. Stakeholders
are able to submit proposals. Paloma core offers a governance
command that node operators can interact with to submit proposals.

## Upgrading software

New releases of Paloma core are proposed through governance
and voted on by stakeholders. To submit an upgrade proposal,
start by downloading the 
[latest release tag](https://github.com/palomachain/paloma/releases/latest).

The proposal requires 10 GRAIN, or 10000000ugrain for deposit. In the
proposal, the proposer must specify the block height at which the upgrade
will take place. `upgrade height` is the block height where the chain halts 
and requires the upgrade. Allow enough time between voting end time and 
upgrade height for 2/3 of the network to have downloaded the new binary and 
prepped for the switch over to avoid/minimize downtime.

To submit an upgrade proposal:

```bash
palomad tx gov submit-proposal software-upgrade palomad \
--title "Paloma Upgrade to Release 0.3.0 and Testnest-7 (1)" \
--deposit 10000000ugrain \
--fees 400ugrain \
--upgrade-height 208400 \
--upgrade-info '{"binaries":{"linux/amd64":"https://github.com/palomachain/paloma/releases/download/v0.3.0-alpha/paloma_0.3.0-alpha_Linux_x86_64.tar.gz"}}' \
--description "Upgrade the Paloma blockchain protocol to palomad 0.3.0 with release to support EVM chains" \
--gas 400000 \
--from <Your Paloma Address> \
--chain-id paloma-testnet-10 \
--yes
```

To vote on a proposal:

```bash
palomad tx gov vote 3 yes \
--chain-id paloma-testnet-10 \
--from <Your Paloma Address> \
--fees 400ugrain \
-b block
-y
```

You are also able to check if 2/3 of the network
are online after the vote is complete.

```bash
curl -s localhost:26657/consensus_state | jq -r ".result.round_state.height_vote_set[0].prevotes_bit_array"
```

For the chain to activate on the new software,
~0.67 need to be online.

## Upgrade genesis

To submit a genesis upgrade proposal:

```bash
palomad tx gov submit-proposal param-change <path/to/proposal.json> \
--from=<Address> \
--deposit 10000000ugrain \
--chain-id paloma-testnet-10 \
--fees 400ugrain \
--gas 400000 \
```

## Add support for a new EVM chain

To add a new EVM chain to Paloma, you must provide the block height and 
block hash.

```bash
palomad tx gov submit-proposal evm propose-new-chain eth-main paloma-testnet-10 15135629 0xfe33e4e286c4a6c686144be4b481be869f2a670db48ad4396136dbc083395976 \
--title "Paloma Support for <Chain Name>" \
--description "Add support for <Chain Name> for pigeons to send messages via the Paloma blockchain." \
--deposit 10000000ugrain \
--fees 400ugrain \
--gas 400000 \
--from=<From Address>  \
--yes
```
palomad tx gov submit-proposal evm propose-new-chain [chain-reference-id] [chain-id] [min-on-chain-balance] [block-height] [block-hash-at-height]

::: tip Pigeon

Pigeon will have to update their ~/.pigeon/config.yaml file to add the 
new evm-chain

:::

## Add a smart contract to deploy to all EVM chains.

Pigeons query the EVM chain and query for the submitted block height 
and block hash sent by Paloma and compare them to confirm they are on the 
right chain for Pigeon. If someone misconfigured their files, it would throw 
an error that the block height and hash are not matched.

To add a smart contract for pigeons to deploy contracts to the EVM chains:

```bash
palomad tx gov submit-proposal evm propose-new-smart-contract '[JSON ABI BLOB]' [HEX BLOB] \
--title "Paloma Deploy the Paloma Compass EVM" \
--description "Paloma Deploy the Paloma Compass EVM to Ethereum Mainnet for Pigeons to send messages on Ethereum mainnet." \
--deposit 10000000ugrain \
--fees 400ugrain \
--gas auto \
--from=<From Paloma Address> \
--chain-id=paloma-testnet-10 \
--yes
```

This example uses Compass-EVM. To deploy Compass-EVM, you need bytecode and ABI.
