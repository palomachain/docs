# Join or set up a network

Pre-requistes for joining or starting a network is installing and configuring [Paloma](./install-palomad) as well as [Pigeon.](./install-pigeon)

## Join the public testnet

You can join a the Paloma testnet by completing the following steps:

### 1. Select a network

::: tip Selecting a network

Note that the versions of the network listed below are the latest versions. 
To find earlier versions, please consult the [paloma repo](https://github.com/palomachain/paloma/releases).

:::

Specify the network you want to join by choosing the corresponding **genesis file** and **seeds**:

|Network| Type|Genesis|Addressbook|
|-------|------|------|------|
| `paloma-testnet-16`| Testnet|[Genesis Link](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/genesis.json)| [Addressbook Link](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/addrbook.json)|
| `tumbler` | Mainnet|[Genesis Link](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json)| [Addressbook Link](https://raw.githubusercontent.com/palomachain/mainnet/master/tubmler/addrbook.json)|

### 2. Download genesis file and address book

**Genesis-transaction** specifies the account balances and parameters at the 
start of the network to use when replaying transactions and syncing.

**Addressbook** lists a selection of peers for your node to dial to in order 
to discover other nodes in the network. Public address books of peers are made 
available by the Paloma community.

- For default `palomad` configurations, the `genesis` and `addressbook` files should 
  be placed under `~/.paloma/config/genesis.json` and `~/.paloma/config/addrbook.json` 
  respectively.

**Example**:

```bash
# Obtain the genesis for the testnet:
wget -O ~/.paloma/config/genesis.json <Link to genesis file>

# Obtain the addressbook for the testnet:
wget -O ~/.paloma/config/addrbook.json <Link to address book file>
```

### 3. `palomad start`

Start the network and check that everything is running smoothly:

```bash
palomad start
palomad status
# It will take a few seconds for palomad to start.
```

::: details Healthy node status example

```json
{
  "NodeInfo": {
    "protocol_version": {
      "p2p": "8",
      "block": "11",
      "app": "0"
    },
    "id": "palomadocs-id",
    "listen_addr": "tcp://0.0.0.0:26656",
    "network": "paloma-testnet-10",
    "version": "0.34.14",
    "channels": "40202122233038606100",
    "moniker": "palomadocs",
    "other": {
      "tx_index": "on",
      "rpc_address": "tcp://127.0.0.1:26657"
    }
  },
  "SyncInfo": {
    "latest_block_hash": "19ABCBA90BF3E76A0635E6C961AB2CECC7DB2B1F1338057DB334568128E0776E",
    "latest_app_hash": "8DFE69CF66FBE7ADCDB5B430A0C679C45B6AEBDDAE23835ABDC4ACBC704F7525",
    "latest_block_height": "7333450",
    "latest_block_time": "2022-01-08T05:24:57.383258076Z",
    "earliest_block_hash": "E88E3641A488EBA3D402FC072879C6399AA2CDC7B6CC5A3061E5A64D9FFD3BDE",
    "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
    "earliest_block_height": "5900001",
    "earliest_block_time": "2021-09-28T09:00:00Z",
    "catching_up": false
  },
  "ValidatorInfo": {
    "Address": "29E58C21B6612227C9C9BD9E6D4D99897E032572",
    "PubKey": {
      "type": "tendermint/PubKeyEd25519",
      "value": "7cZq+Fp9xU8mZ9xR7q4NpDOX0UicmPC68P/4krCn8Hs="
    },
    "VotingPower": "0"
  }
}
```

:::

Your node is now syncing. This process will take a long time. Make sure 
you've set it up on a stable connection so you can leave while it syncs.

::: danger Sync start times

Nodes take at least an hour to start syncing. This wait is normal. 
Before troubleshooting a sync, please wait an hour for the sync to start.

:::

Continue to the [Sync](sync.md) page to find out more about syncing your node.



## Set up a local private network

Validators can set up a private Paloma network to become familiar with 
running a full Paloma node before joining a public network.

### Create a single node

The simplest Paloma network you can set up is a local testnet with just 
a single node. In a single-node environment, you have one account and are 
the only validator signing blocks for your private network.

Initialize your genesis file that will bootstrap the network. Replace 
the following variables with your own information:

   ```bash
   palomad init --chain-id=<testnet-name> <node-moniker>
   ```

Generate a Paloma account. Replace the variable with your account name:

   ```bash
   palomad keys add <account-name>
   ```

### Add your account to the genesis

Run the following commands to add your account and set the initial balance:

   ```bash
   palomad add-genesis-account $(palomad keys show <account-name> -a) 100000000ugrain
   palomad gentx <my-account> 10000000ugrain --chain-id=<testnet-name>
   palomad collect-gentxs
   ```

### Start your private Paloma network

Run the following command to start your private network:

   ```bash
   palomad start
   ```

If the private Paloma network is set up correctly, your `palomad` node will 
be running on `tcp://localhost:26656`, listening for incoming transactions, 
and signing blocks.
