# Set up a Paloma LightNode

A Paloma LightNode is a ligthweight server that provides GRAIN stakers with a convenient
automation that automatically restakes their staking rewards so that compounding interest
is generated for their investment.

The software is fully Open Source and is available under a license that grants anyone
the right to use, modify, and distribute it, modified or not, to everyone free of charge.
However, in order to run a LightNode on the Paloma chain a token holder is required
to purchase a license and assign it to the node.

## Hardware Reuirements

The software is delivered as a Docker container. The recommended requirements follow:

* At least 4GB of memory.
* Ay least 500MB of storage,

## Software Requirements

[Docker](https://www.docker.com) or [Podman](https://podman.io) are required for the execution of the LightNode software.

## How to run a LightNode

::: danger

It's required to [activate your license](https://www.palomachain.com/purchase/activate/) before
running the LightNode on Paloma mainnet. The following instructions won't work otherwise. 

:::

Open a terminal and type the following command:

```bash
docker run --pull=always -ti \
   -v ./password-store/.gnupg:/root/.gnupg \
   -v ./password-store/.password-store:/root/.password-store \
   palomachain/lightnode-client:v1
```
