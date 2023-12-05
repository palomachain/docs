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
On mainnet `messenger` the latest tag is v1.10.1

```bash
wget -O - https://github.com/palomachain/pigeon/releases/download/v1.10.1/pigeon_Linux_x86_64.tar.gz | \
tar -C /usr/local/bin -xvzf - pigeon
chmod +x /usr/local/bin/pigeon
mkdir ~/.pigeon
```

### Testnet
On testnet `paloma-testnet-15` the latest tag is v1.10.1

```bash
wget -O - https://github.com/palomachain/pigeon/releases/download/v1.10.1/pigeon_Linux_x86_64.tar.gz | \
tar -C /usr/local/bin -xvzf - pigeon
chmod +x /usr/local/bin/pigeon
mkdir ~/.pigeon
```


## Set up your keys

Next, set up your EVM keys. You will need a different key for each supported [live target chain](../../resources/networks). 

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


Or, you may import existing EVM private keys:

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

paloma:
  chain-id: <chain-id>
  call-timeout: 20s
  keyring-dir: ~/.paloma
  keyring-pass-env-name: PALOMA_KEYRING_PASS
  keyring-type: test
  signing-key: ${VALIDATOR}
  base-rpc-url: http://localhost:26657
  gas-adjustment: 1.5
  gas-prices: 0.001ugrain
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
