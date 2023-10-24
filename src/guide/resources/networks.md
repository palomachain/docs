# Active Paloma Networks

## Mainnet

 - Chain ID: `messenger`
 - Live since: February 8th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/addrbook.json)
 - current tag for Paloma: [**v1.9.2**](https://github.com/palomachain/paloma/releases/tag/v1.9.2)
 - current tag for Pigeon: [**v1.9.4**](https://github.com/palomachain/pigeon/releases/tag/v1.9.4)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0x79e9f573D908E012aC6E1F7978cb09e0065E6355](https://bscscan.com/address/0x79e9f573D908E012aC6E1F7978cb09e0065E6355) | Live |
| Ethereum Mainnet | eth-main | EVM | [0xa00CF3504FfaCff301E4973e21B44C052d087157](https://etherscan.io/address/0xa00CF3504FfaCff301E4973e21B44C052d087157) | Live |
| Polygon Mainnet | matic-main| EVM | [0x92c5D97a2069b9cbC117d5Df9eA119fc635a9319](https://polygonscan.com/address/0x92c5D97a2069b9cbC117d5Df9eA119fc635a9319) | Live |
| Optimism Mainnet | op-main  | EVM | [0xe3e2E3ebd228485FCbC812D1DBA0B2F90233E56c](https://optimistic.etherscan.io/address/0xe3e2E3ebd228485FCbC812D1DBA0B2F90233E56c) | Live |
| Base Mainnet | base-main |    EVM | [0xcBbADBD4aAdA4Db509F3ba80E69E37bFB793e333](https://basescan.org/address/0xcBbADBD4aAdA4Db509F3ba80E69E37bFB793e333) | Live |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-15`
 - Live since: January 20th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/addrbook.json)
 -  - current tag for Paloma: [**v1.9.2**](https://github.com/palomachain/paloma/releases/tag/v1.9.2)
 -   - current tag for Pigeon: [**v1.9.4**](https://github.com/palomachain/pigeon/releases/tag/v1.9.4)


### Available endpoints
- LCD: lcd.testnet.palomaswap.com
- rpc: https://testnet.palomaswap.com (use port `443` to connect local `palomad` instance to this node)


### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet | bnb-main | EVM | [0xb77B80f08E05beF080bfD2022d0Ef277EA815dC6](https://bscscan.com/address/0xb77B80f08E05beF080bfD2022d0Ef277EA815dC6) |Live|
| Polygon Mainnet | matic-main | EVM | [0x16F8fA1BfE2c7eEdEB8C644CdE73b172B8529E11](https://polygonscan.com/address/0x16F8fA1BfE2c7eEdEB8C644CdE73b172B8529E11)|Live|
| Ethereum Mainnet | eth-main | EVM | [0x4911920E9F354DbCA895CA4eE5F8f6E02d560996](https://etherscan.io/address/0x4911920E9F354DbCA895CA4eE5F8f6E02d560996) | Live |
| Optimism Mainnet | op-main  | EVM | [0x6FaF9429c05DA406F77292CcCc0F42D4eF7Cc6a8](https://optimistic.etherscan.io/address/0x6FaF9429c05DA406F77292CcCc0F42D4eF7Cc6a8) | Live |

::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 
|  3  | CW721 base contract. Use this contract to instantiate your own [CW721](../../guide/develop/quick-start/paloma-py/cw721.md) NFT token|
|  4  | CW20 base contract. Use this contract to instantiate your own [CW20](../../guide/develop/quick-start/paloma-py/cw20.md) fungible token|
