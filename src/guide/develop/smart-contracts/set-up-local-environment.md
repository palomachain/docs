# Environment Setup

As a smart contract developer, you will need to write, compile, upload, 
and test your contracts before deploying them on the Phoenix mainnet. 
The first step is to set up a specialized environment to streamline development.

## Install Paloma locally

Visit [build Paloma](../../maintain/node/build-paloma-core.md) to install 
the latest version of Paloma to obtain a working version of `palomad`. 
You will need this to connect to your local Paloma test network to work with smart 
contracts.

## Connect to the testnet

In order to work with and deplpy Paloma smart contracts, you should connect 
to the Paloma network that includes the CosmWasm integration. 
In this tutorial, you will be using [Paloma](https://github.com/palomachain/paloma).

Follow the [node setup guide](../../maintain/node/build-paloma-core.md) 
to run the Paloma testnet locally. 

Eventually, RPC nodes will be available for developers to connect too.

The account with the following mnemonic is the sole validator on the 
network and has enough funds to get started with smart contracts.

```
satisfy adjust timber high purchase tuition stool faith fine install that 
you unaware feed domain license impose boss human eager hat rent enjoy dawn
```

## Install Rust

While WASM smart contracts can theoretically be written in any programming language, 
it is currently only recommended to use Rust as it is the only language for which 
mature libraries and tooling exist for CosmWasm. For this tutorial, you'll need to 
also install the latest version of Rust by following the instructions 
[here](https://www.rust-lang.org/tools/install).

Once you'll installed Rust and its toolchain (cargo et al.), you'll need to add 
the `wasm32-unknown-unknown` compilation target.

```sh
rustup default stable
rustup target add wasm32-unknown-unknown
```

Then, install `cargo-generate`, which you will need for bootstrapping new CosmWasm 
smart contracts via a template.

```sh
cargo install cargo-generate --features vendored-openssl
```

Next, install `cargo-run-script`, which is required to optimize smart contracts.

```sh
cargo install cargo-run-script
```
