# Install `palomad`

`palomad` is the command-line interface and daemon that connects to Paloma and enables you to interact with the Paloma blockchain. Paloma is the official Golang reference implementation of the Paloma node software.

This guide is for developers who want to install `palomad` and interact with Paloma without running a full node. If you want to run a full node or join a network, visit the [full node guide.](../../maintain/node/requirements) Visit the [Ledger Nano guide](../../resources/paloma-ledger) if you're looking for using a Ledger Nano device together with Paloma CLI.

## Prerequisites

### Install libwasm
The current required version of libwasm is `1.5.2`. If you're upgrading from a prior version it is recommended to remove the cache to avoid errors. If you're already have palomad running, you will need to stop it before doing these steps.

```
wget https://github.com/CosmWasm/wasmvm/releases/download/v1.5.2/libwasmvm.x86_64.so
sudo mv libwasmvm.x86_64.so /usr/lib/

rm -r ~/.paloma/data/wasm/cache
```

## From binary (Linux only)

The easiest way to install `palomad` and Paloma is by downloading a pre-built binary for your operating system. You can find the binaries on the [releases](https://github.com/palomachain/paloma/releases) page. 


### Mainnet
On mainnet `tumbler` the latest tag is v2.0.1

```sh
wget -O - https://github.com/palomachain/paloma/releases/download/v2.0.1/paloma_Linux_x86_64.tar.gz  | \
sudo tar -C /usr/local/bin -xvzf - palomad
sudo chmod +x /usr/local/bin/palomad

sudo wget -P /usr/lib https://github.com/CosmWasm/wasmvm/releases/download/v1.5.2/libwasmvm.x86_64.so
```

### Testnet
On testnet `paloma-testnet-16` the latest tag is v2.0.1

```sh
wget -O - https://github.com/palomachain/paloma/releases/download/v2.0.1/paloma_Linux_x86_64.tar.gz  | \
sudo tar -C /usr/local/bin -xvzf - palomad
sudo chmod +x /usr/local/bin/palomad

sudo wget -P /usr/lib https://github.com/CosmWasm/wasmvm/releases/download/v1.5.2/libwasmvm.x86_64.so
```

## From source

- Install [Golang v1.22.4](https://golang.org/doc/install)
- Ensure your `GOPATH` and `GOBIN` environment variables are set up correctly.
1. Get the Paloma source code

Use `git` to retrieve [Paloma](https://github.com/palomachain/paloma), and check out the correct `tag` depending on your network [Github](https://github.com/palomachain/paloma/releases).

 ```bash
 git clone https://github.com/palomachain/paloma.git
 cd paloma
 git checkout [tag]
```
   
 > Example: git checkout v0.4.0-alpha

2. Build Paloma from source

Build Paloma, and install the `palomad` executable to your `GOPATH` environment variable.

```bash
make build
sudo mv ./build/palomad /usr/local/bin/palomad
```

3. Verify your Paloma installation

Verify that Paloma is installed correctly.

```bash
palomad version --long
```

The following example shows version information when Paloma is installed correctly:

```bash
 name: paloma
 server_name: palomad
 version: v0.4.0-alpha
 commit: 0f7194bc7f75283630f5239976c6d7cf2b41a47c
 build_tags: ""
 go: go version go1.18.3 linux/amd64
...
 # followed by many build dependencies (build_deps)
```

::: tip

If the `palomad: command not found` error message is returned, confirm that the Go binary path is correctly configured by running the following command:

```
export PATH=$PATH:$(go env GOPATH)/bin
```

:::
