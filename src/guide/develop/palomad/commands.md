# Commands

This section describes the commands available from `palomad`, the command line interface that connects a running `palomad` process.

## `add-genesis-account`

Adds a genesis account to `genesis.json`.

**Syntax**
```bash
palomad add-genesis-account <address-or-key-name> '<amount><coin-denominator>,<amount><coin-denominator>'
```

**Example**
```bash
palomad add-genesis-account acc1 '200000000uGRAIN'
```

## `collect-gentxs`

Collects genesis transactions and outputs them to `genesis.json`.

**Syntax**
```bash
palomad collect-gentxs
```

## `debug`

Helps debug the application. For a list of syntax and subcommands, see the [debug subcommands](subcommands.md#debug-addr).

## `export`

Exports the state to JSON.

**Syntax**
```bash
palomad export
```

## `gentx`

Adds a genesis transaction to `genesis.json`.

**Syntax**
```bash
palomad gentx <key-name> <amount><coin-denominator>
```

**Example**
```bash
palomad gentx myKey 1000000uGRAIN --home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 \
    --moniker="myValidator" \
    --commission-max-change-rate=0.01 \
    --commission-max-rate=1.0 \
    --commission-rate=0.07 \
    --details="..." \
    --security-contact="..." \
    --website="..."
```

## `help`

Shows help information.

**Syntax**
```bash
palomad help
```

## `init`

Initializes the configuration files for a validator and a node.

**Syntax**
```bash
palomad init <moniker>
```

**Example**
```bash
palomad init myNode
```

## `keys`

Manages Keyring commands. For a list of syntax and subcommands, see the [keys subcommands](subcommands.md#keys-add).


## `migrate`
Migrates the source genesis into the target version and prints to STDOUT.

**Syntax**
```bash
palomad migrate <path-to-genesis-file>
```

**Example**
```bash
palomad migrate /genesis.json --chain-id=paloma-testnet-10 --genesis-time=2020-04-19T17:00:00Z --initial-height=4000
```

## `query`

Manages queries. For a list of syntax and subcommands, see the [query subcommands](subcommands.md#query-authz-grants).


## `start`

Runs the full node application with Tendermint in or out of process. By default, the application runs with Tendermint in process.

**Syntax**
```bash
palomad start
```

## `status`

Displays the status of a remote node.

**Syntax**
```bash
palomad status
```

## `tendermint`

Manages the Tendermint protocol.


## `tx`

Retrieves a transaction by its hash, account sequence, or signature. For a list of full syntax and subcommands, see the [tx subcommands](subcommands.md#tx-authz-exec).

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

## `unsafe-reset-all`

Resets the blockchain database, removes address book files, and resets `data/priv_validator_state.json` to the genesis state.

**Syntax**
```bash
palomad unsafe-reset-all
```

## `validate-genesis`

Validates the genesis file at the default location or at the location specified.

**Syntax**
```bash
palomad validate-genesis </path-to-file>
```

**Example**
```bash
palomad validate-genesis </genesis.json>
```

## `version`

Returns the version of Paloma you're running.

**Syntax**
```bash
palomad version
```
