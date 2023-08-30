# Set up `palomad`

`palomad` is the command-line interface and daemon that connects to Paloma and enables you to interact with the Paloma blockchain. Paloma is the official Golang reference implementation of the Paloma node software.

## Install from binary

The easiest way to install `palomad` and Paloma is by downloading a pre-built binary for your operating system. You can find the binaries on the [releases](https://github.com/palomachain/paloma/releases) page. 


### Mainnet
On mainnet `messenger` the latest tag is v1.7.1


```sh
wget -O - https://github.com/palomachain/paloma/releases/download/v1.7.1/paloma_Linux_x86_64.tar.gz  | \
sudo tar -C /usr/local/bin -xvzf - palomad
sudo chmod +x /usr/local/bin/palomad

sudo wget -P /usr/lib https://github.com/CosmWasm/wasmvm/raw/main/internal/api/libwasmvm.x86_64.so
```

### Testnet
On testnet `paloma-testnet-15` the latest tag is v1.7.1

```sh
wget -O - https://github.com/palomachain/paloma/releases/download/v1.7.1/paloma_Linux_x86_64.tar.gz  | \
sudo tar -C /usr/local/bin -xvzf - palomad
sudo chmod +x /usr/local/bin/palomad

sudo wget -P /usr/lib https://github.com/CosmWasm/wasmvm/raw/main/internal/api/libwasmvm.x86_64.so
```

## Install from source

### 1. Get the Paloma source code

Use `git` to retrieve [Paloma](https://github.com/palomachain/paloma), and check out the correct `tag` depending on your network [Github](https://github.com/palomachain/paloma/releases).

 ```bash
 git clone https://github.com/palomachain/paloma.git
 cd paloma
 git checkout [tag]
 ```
   
 > Example: git checkout v0.4.0-alpha

### 2. Build Paloma from source

Build Paloma, and install the `palomad` executable to your `GOPATH` environment variable.

```bash
go build ./cmd/palomad
```

### 3. Verify your Paloma installation

Verify that Paloma is installed correctly.

```bash
palomad version --long
```

The following example shows version information when Paloma is installed correctly:

```bash
 name: paloma
 server_name: palomad
 version: v.0.9.1
 commit: 0f7194bc7f75283630f5239976c6d7cf2b41a47c
 build_tags: ""
 go: go version go1.18.3 linux/amd64

 # followed by many build dependenecies (build_deps)
```

::: tip
If the `palomad: command not found` error message is returned, confirm that the Go binary path is correctly configured by running the following command:

```
export PATH=$PATH:$(go env GOPATH)/bin
```
:::

## Initialize and configure moniker

Initialize the node with a human-readable name. This will populate a ~/.paloma/ directory.

```bash
MONIKER=<your_custom_moniker> # e.g. validator-joes-node
palomad init $MONIKER
```

::: tip Moniker characters

Monikers can only contain ASCII characters; using Unicode characters 
will render your node unreachable by other peers in the network.

:::

You can update your node's moniker by editing the `moniker` field 
in `~/.paloma/config/config.toml`


## Add or import your Keys
```
VALIDATOR=<choose a name>
```

If you want to create a new key:
```
palomad keys add "$VALIDATOR"
```

If you have a mnemonic already, you can recover the keys with:
```
palomad keys add "$VALIDATOR" --recover
```

## Join or start a network
For more details on this step see [Join or start a network.](./join-a-network)


## Run the server as a daemon

`palomad` must be running at all times. It is recommended that you 
register `palomad` as a `systemd` service so that it will be started 
automatically when the system reboots.

## Register `palomad` as a service

Create a service definition file in `/etc/systemd/system/palomad.service`.

**Example**:

```sh
cat << EOT > /etc/systemd/system/palomad.service
[Unit]
Description=Paloma Blockchain
After=network.target
ConditionPathExists=/usr/local/bin/palomad

[Service]
Type=simple
User=<your palomad user>
LimitNOFILE=65535
Restart=always
RestartSec=5
WorkingDirectory=~
ExecStartPre=
ExecStart=/usr/local/bin/palomad start
Environment=PIGEON_HEALTHCHECK_PORT=5757
ExecReload=

[Install]
WantedBy=multi-user.target
EOT
```

Modify the `Service` section according to your environment:

- Enter the user (likely your username, unless you created a user 
     specifically for `palomad`)


Run `systemctl daemon-reload` followed by `systemctl enable palomad`. 
This will register `palomad` as a system service and turn it on upon startup.

Now start the serivce with `systemctl start palomad`.

### Controlling the service

Use `systemd` to start, stop, and restart the service:

```bash
# Check health
systemctl status palomad
# Start
systemctl start palomad
# Stop
systemctl stop palomad
# Restart
systemctl restart palomad
```

### Access logs

Use `journalctl -t` to access entire logs, entire logs in reverse, 
and the latest and continuous log.

```bash
# Entire log reversed
journalctl -t palomad -r
# Entire log
journalctl -t palomad
# Latest and continuous
journalctl -t palomad -f
```

