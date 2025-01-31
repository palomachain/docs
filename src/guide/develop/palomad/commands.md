# Commands

This section gives an overview of the commands available from `palomad`, the command line interface that connects a running `palomad` process. To view all optional flags associated with each command use the `palomad help` command. 


## `comet`    

[CometBFT](https://cometbft.com/) subcommands. 

### `unsafe-reset-all`

Removes the blockchain data, removes address book files, and resets `data/priv_validator_state.json` to the genesis state.

**Syntax**
```bash
palomad comet unsafe-reset-all
```


Use the help function to get more details on the following CometBFT sub-commands. 

- `bootstrap-state`  Bootstraps CometBFT state at an arbitrary block height using a light client
- `reset-state`      Remove all the data and WAL
- `show-address`     Shows this node's CometBFT validator consensus address
- `show-node-id`     Show this node's ID
- `show-validator`   Show this node's CometBFT validator info
- `version`          Print CometBFT libraries' version
 

## `completion`  

Generates the autocompletion script for palomad for the specified shell. See each sub-command's help for details on how to use the generated script.

- `bash`        Generate the autocompletion script for bash
- `fish`        Generate the autocompletion script for fish
- `powershell`  Generate the autocompletion script for powershell
- `zsh`         Generate the autocompletion script for zsh

## `config`      

Commands for managing application configuration.

### `set` 
Sets an application config value. Available config values to set are `node`, `chain-id`, `output` and `broadcast-mode`.

**Syntax**
```bash
palomad config set client node <rpc endpoint>
palomad config set client chain-id <chain-id>
palomad config set client output <text|json>
palomad config set client broadcast-mode <sync|async>
```

### `get`
Prints the config value for a specific config. 

**Syntax**
```bash
palomad config get client node
palomad config get client chain-id
palomad config get client output
palomad config get client broadcast-mode
```

## `debug`       

Tool for helping with debugging your application.

### `debug addr`

Changes an address from hex encoding to bech32.

**Syntax**

```bash
palomad debug addr <address>
```

**Example**

```bash
palomad debug addr paloma14h2od5f3vahd28uywwvt8sqbi52upnzagshtrm
```

### `debug pubkey`

Decodes a pubkey from proto JSON and displays the address.

**Syntax**

```bash
palomad debug pubkey <pubkey>
```

**Example**

```bash
palomad debug pubkey '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AurroA7jvfPd1AadmmOvWM2rJSwipXfRf8yD6pLbA2DJ"}'
```

### `debug raw-bytes`

Changes raw bytes to hex.

**Syntax**

```bash
palomad debug raw-bytes <raw-bytes>
```

**Example**

```bash
palomad debug raw-bytes [72 101 108 108 111 44 32 112 108 97 121 103 114 111 117 110 100]
```

## export      
Exports the state to JSON.

**Syntax**
```bash
palomad export
```


## `genesis`  

Application's genesis-related subcommands.

### `add-genesis-account`

Adds a genesis account to `genesis.json`.

**Syntax**
```bash
palomad genesis add-genesis-account <address-or-key-name> <amount><coin-denominator>
```

**Example**
```bash
palomad genesis add-genesis-account acc1 200000000ugrain
```

### `collect-gentxs`

Collects genesis transactions and outputs them to `genesis.json`.

**Syntax**
```bash
palomad genesis collect-gentxs
```

### `gentx`

Adds a genesis transaction to `genesis.json`.

**Syntax**
```bash
palomad genesis gentx <key-name> <amount><coin-denominator>
```

**Example**
```bash
palomad genesis gentx myKey 1000000ugrain --home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 \
    --moniker="myValidator" \
    --commission-max-change-rate=0.01 \
    --commission-max-rate=1.0 \
    --commission-rate=0.07 \
    --details="..." \
    --security-contact="..." \
    --website="..."
```

### `migrate`
Migrates the source genesis into the target version and prints to STDOUT.

**Syntax**
```bash
palomad genesis migrate <path-to-genesis-file>
```

**Example**
```bash
palomad migrate /genesis.json --chain-id=paloma-testnet-17 --genesis-time=2024-06-26T17:00:00Z --initial-height=4000
```

### `validate`

Validates the genesis file at the default location or at the location specified.

**Syntax**
```bash
palomad genesis validate </path-to-file>
```


## `help`       

Shows help information about any `palomad` command. 

**Syntax**
```bash
palomad help
```

To get more details on a specific command append `help` to the command you're looking for. E.g. 
```bash
palomad tx help
```

## `init`

Initializes the configuration files for a validator and a node.

**Syntax**
```bash
palomad init <moniker>
```

## `keys`

Manages Keyring commands. For a list of syntax and subcommands, see the [keys subcommands](subcommands-keys.md).

## `prune`  

Prune app history states by keeping the recent heights and deleting old heights

**Syntax**
```bash
palomad prune [pruning-method] [flags]
```

**Example**
```bash
prune custom --pruning-keep-recent 100 --app-db-backend 'goleveldb'
```

## `query`     

Querying subcommands. For a list of syntax and subcommands, see the [query subcommands](subcommands-q.md).

## `rollback`    

Rolls back Cosmos SDK and CometBFT state by one height.

**Syntax**
```bash
palomad rollback
```

## `snapshots`  

Manages local snapshots. Available subcommands are

- `delete`      Delete a local snapshot
- `dump`        Dump the snapshot as portable archive format
- `export`      Export app state to snapshot store
- `list`        List local snapshots
- `load`        Load a snapshot archive file (.tar.gz) into snapshot store
- `restore`     Restore app state from local snapshot

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


## `testnet`     

Subcommands for starting or configuring local testnets.

### `init-files` 

Initialize config directories & files for a multi-validator testnet running locally. 

**Syntax**
```bash
palomad testnet init-files
```

### `start`

Launch an in-process multi-validator testnet

**Syntax**
```bash
palomad testnet init-files
```

## `tx`

Transaction subcommands. For a list of syntax and subcommands, see the [tx subcommands](subcommands-tx.md).

  
## `version`   

Returns the version of Paloma you're running. Append the option `--long` flag to confirm that your version is using the correct commit hash.

**Syntax**
```bash
palomad version --long
``` 