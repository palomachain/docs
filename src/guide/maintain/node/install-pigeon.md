# Set up the Pigeon Relayer

Pigeon is a Golang cross-chain message relayer system for Paloma 
validators to deliver messages to any blockchain. Pigeon is actively 
maintained by the Volume Finance team.

::: warning Validators must run Pigeon

`palomad` requires pigeon to be running. If you're a validator with stake you additionally need to keep the minimum amount of the native token of each supported target chain to avoid getting jailed. This ensures that all validators maintain the core functionality of cross-chain messaging.

:::

Validators running pigeon are expected to support all chains that 
Paloma is targeting. Target chains are added when they pass governance. 
Pigeons must have a wallet for each supported chain and have a balance in 
the native denomination for each chain high enough to pay gas for remote 
message execution on the target chains. Validators who don’t have a sufficient 
balance will be jailed. However, Pigeons are reimbursed for their gas expenses.

## Installation

Start by installing the binary on your validator environment:

### Mainnet
On mainnet `tumbler` the latest tag is v1.11.2

```bash
wget -O - https://github.com/palomachain/pigeon/releases/download/v1.11.2/pigeon_Linux_x86_64.tar.gz | \
tar -C /usr/local/bin -xvzf - pigeon
chmod +x /usr/local/bin/pigeon
mkdir ~/.pigeon
```

### Testnet

On testnet `paloma-testnet-15` the latest tag is v1.11.0

```bash
wget -O - https://github.com/palomachain/pigeon/releases/download/v1.11.0/pigeon_Linux_x86_64.tar.gz | \
tar -C /usr/local/bin -xvzf - pigeon
chmod +x /usr/local/bin/pigeon
mkdir ~/.pigeon
```


## Set up your keys

Next, set up your EVM keys. You will need a different key for each supported [live target chain](../../resources/networks). 

### Create a new key
**Ethereum  mainnet**
```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/eth-main
```
**Binance Smart Chain  mainnet**
```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/bnb-main
```

**Polygon mainnet**
```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/matic-main
```

**Optimism Mainnet**
```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/op-main
```

**Base Mainnet**
``` bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/base-main
```

**Gnosis Mainnet**
```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/gnosis-main
```

**Arbitrum Mainnet**
```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/arbitrum-main
```

**Blast Mainnet**
```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/blast-main
```

### Import existing EVM private keys:

**Ethereum  mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/eth-main
```
**Binance Smart Chain  mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/bnb-main
```
**Polygon mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/matic-main
```

**Optimism Mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/op-main
```

**Kava Mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/kava-main
```

**Base Mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/base-main
```


**Gnosis Mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/gnosis-main
```

**Arbitrum Mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/arbitrum-main
```
**Blast Mainnet**
```bash
pigeon evm keys import ~/.pigeon/keys/evm/blast-main
```

Ensure that your keys are stored safe and securly. 

## Configuration

Ensure your Paloma Cosmos-SDK keys are stored and available on 
your environment.

```bash
palomad keys add "$VALIDATOR" --recover
```

Set the VALIDATOR env variable:

```bash
export VALIDATOR="$(palomad keys list --list-names | head -n1)"
```

In the pigeon directory, create your validator's configuration file 
`~/.pigeon/config.yaml`.

```yaml
loop-timeout: 5s
health-check-port: 5757

paloma:
  chain-id: <paloma chain id>
  call-timeout: 20s
  keyring-dir: ~/.paloma
  keyring-pass-env-name: PALOMA_KEYRING_PASS
  keyring-type: os
  signing-key: ${VALIDATOR}
  base-rpc-url: http://localhost:26657
  gas-adjustment: 3.0
  gas-prices: 0.01ugrain
  account-prefix: paloma

evm:
  eth-main:
    chain-id: 1
    base-rpc-url: ${ETH_RPC_URL}
    keyring-pass-env-name: ETH_PASSWORD
    signing-key: ${ETH_SIGNING_KEY}
    keyring-dir: ~/.pigeon/keys/evm/eth-main
    gas-adjustment: 2
    tx-type: 2

  bnb-main:
    chain-id: 56
    base-rpc-url: ${BNB_RPC_URL}
    keyring-pass-env-name: BNB_PASSWORD
    signing-key: ${BNB_SIGNING_KEY}
    keyring-dir: ~/.pigeon/keys/evm/bnb-main
    gas-adjustment: 1
    tx-type: 0

  matic-main:
    chain-id: 137
    base-rpc-url: ${MATIC_RPC_URL}
    keyring-pass-env-name: MATIC_PASSWORD
    signing-key: ${MATIC_SIGNING_KEY}
    keyring-dir: ~/.pigeon/keys/evm/matic-main
    gas-adjustment: 2
    tx-type: 2
  
  op-main:
    chain-id: 10
    base-rpc-url: ${OP_RPC_URL}
    keyring-pass-env-name: OP_PASSWORD
    signing-key: ${OP_SIGNING_KEY}
    keyring-dir: /root/.pigeon/keys/evm/op-main
    gas-adjustment: 2
    tx-type: 2

  kava-main:
    chain-id: 2222
    base-rpc-url: ${KAVA_RPC_URL}
    keyring-pass-env-name: KAVA_PASSWORD
    signing-key: ${KAVA_SIGNING_KEY}
    keyring-dir: /root/.pigeon/keys/evm/kava-main
    gas-adjustment: 2
    tx-type: 2

  base-main:
    chain-id: 8453
    base-rpc-url: ${BASE_RPC_URL}
    keyring-pass-env-name: BASE_PASSWORD
    signing-key: ${BASE_SIGNING_KEY}
    keyring-dir: /root/.pigeon/keys/evm/base-main
    gas-adjustment: 2
    tx-type: 2

  arbitrum-main:
    chain-id: 42161
    base-rpc-url: ${ARB_RPC_URL}
    keyring-pass-env-name: ARB_PASSWORD
    signing-key: ${ARB_SIGNING_KEY}
    keyring-dir: /root/.pigeon/keys/evm/arbitrum-main
    gas-adjustment: 2
    tx-type: 2

 gnosis-main:
    chain-id: 100
    base-rpc-url: ${GNOSIS_RPC_URL}
    keyring-pass-env-name: GNOSIS_PASSWORD
    signing-key: ${GNOSIS_SIGNING_KEY}
    keyring-dir: /root/.pigeon/keys/evm/gnosis-main
    gas-adjustment: 2
    tx-type: 2
    
 blast-main:
  chain-id: 81457
  base-rpc-url: ${BLAST_RPC_URL}
  keyring-pass-env-name: BLAST_PASSWORD
  signing-key: ${BLAST_SIGNING_KEY}
  keyring-dir: ~/.pigeon/keys/evm/blast-main
  gas-adjustment: 2
  tx-type: 2   
```


Once the setup of Pigeon is successful, you can
start sending messages. Before that, Pigeon must know
the actor relaying message across the network by defining
its keys:

```bash
cat <<EOT >~/.pigeon/env.sh
PALOMA_KEYRING_PASS=<your Paloma key password>
ETH_RPC_URL=<Your Ethereum mainnet RPC URL>
ETH_PASSWORD=<Your ETH Key Password>
ETH_SIGNING_KEY=<Your ETH SIGNING KEY>
BNB_RPC_URL=<Your Ethereum mainnet RPC URL>
BNB_PASSWORD=<Your ETH Key Password>
BNB_SIGNING_KEY=<Your ETH SIGNING KEY>
MATIC_RPC_URL=<Your Binance mainnet RPC URL>
MATIC_PASSWORD=<Your BNB Key Password>
MATIC_SIGNING_KEY=<Your BNB SIGNING KEY>
BASE_RPC_URL=<Your Base mainnet RPC URL>
BASE_PASSWORD=<Your Base Key Password>
BASE_SIGNING_KEY=<Your Base SIGNING KEY>
GNOSIS_RPC_URL=<Your Gnosis mainnet RPC URL>
GNOSIS_PASSWORD=<Your Gnosis Key Password>
GNOSIS_SIGNING_KEY=<Your Gnosis SIGNING KEY>
VALIDATOR=<VALIDATOR NAME>
EOT
```

Ensure that the new variables are avaible for use:
```bash
source ~/.pigeon/env.sh
```

You can then, start pigeon with:

```bash
pigeon start
```

## Register pigeon as a service

You can run Pigeon as a systemd process on your node
so that it will automatically restart on server reboots or crashes.
Validators are responsible for actively maintaining relayed messages
and verifying the state of the chain.

Make sure you have configured `~/.pigeon/env.sh` as above. Then create a systemctl configuration:

```sh
cat <<EOT >/etc/systemd/system/pigeond.service
[Unit]
Description=Pigeon daemon
After=network-online.target
ConditionPathExists=/usr/local/bin/pigeon

[Service]
Type=simple
Restart=always
RestartSec=5
User=${USER}
WorkingDirectory=~
EnvironmentFile=${HOME}/.pigeon/env.sh
ExecStart=/usr/local/bin/pigeon start
ExecReload=

[Install]
WantedBy=multi-user.target
EOT
```

Start Pigeon:

```bash
service pigeond start

# Check that it's running successfully:
service pigeond status
# Or watch the logs:
journalctl -u pigeond.service -f -n 100
```
