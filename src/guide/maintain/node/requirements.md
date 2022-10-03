# Prerequisites
::: danger Important 
Paloma requires anyone wishing to run a full node to run two pieces of software. 
- The **Paloma Core** blockchain code ([Github](https://github.com/palomachain/paloma))
- The **Pigeon Relayer** code ([Github](https://github.com/palomachain/pigeon))
:::

Anyone who wishes to become a validator with stake in the network will additionally be required to have wallets with funds for all Paloma target chains. For more information on Pigeon, see [Pigeon docs](./install-pigeon.md).


## Hardware Requirements

Paloma is currently only available for Linux operating systems.Running a full Paloma node is a resource-intensive process that requires a persistent server, so please ensure your hardware fulfills the requirements below.

These are the the minimum requirements for running a full Paloma node:

- 4 or more CPU cores
- At least 32 GB of memory
- At least 300 mbps of network bandwidth
- At least 2 TB NVME SSD

::: warning Storage requirements

As the network grows, the minimum storage requirements will also grow. 
It is recommended that you use more than the minimum storage requirements 
to run a robust full node.

:::

## Software requirements

- [Golang v1.18+ linux/amd64](https://go.dev/dl/)

  ::: details Installing Go

  Go releases can be found here: [ https://go.dev/dl/ ](https://go.dev/dl/)

  In your browser, you can right-click the correct release (V1.18) and `Copy link`.

  ```bash
  # 1. Download the archive

  wget https://go.dev/dl/go1.18.2.linux-amd64.tar.gz

  # Optional: remove previous /go files:

  sudo rm -rf /usr/local/go

  # 2. Unpack:

  sudo tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz

  # 3. Add the path to the go-binary to your system path:
  # (for this to persist, add this line to your ~/.profile or ~/.bashrc or  ~/.zshrc)

  export PATH=$PATH:/usr/local/go/bin

  # 4. Verify your installation:

  go version

  # go version go1.18.2 linux/amd64

  ```

  :::

- Linux users: `sudo apt-get install -y build-essential`