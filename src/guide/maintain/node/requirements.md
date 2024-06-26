# Requirements to run a node
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

[Golang v1.22+ linux/amd64](https://go.dev/doc/install)