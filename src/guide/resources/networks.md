# Active Paloma Networks

## Mainnet

 - Chain ID: `messenger`
 - Live since: February 8th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/addrbook.json)
 - current tag for Paloma: [**v1.7.2**](https://github.com/palomachain/paloma/releases/tag/v1.7.2)
 - current tag for Pigeon: [**v1.6.0**](https://github.com/palomachain/pigeon/releases/tag/v1.6.0)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0xFca1FBA89e880666f0851B211CBDa98027E3AbB4](https://bscscan.com/address/0xFca1FBA89e880666f0851B211CBDa98027E3AbB4) | Live |
| Ethereum Mainnet | eth-main | EVM | [0x4473eA62D337140879719FACD6dbF2D1931C09C1](https://etherscan.io/address/0x4473eA62D337140879719FACD6dbF2D1931C09C1) | Live |
| Polygon Mainnet | matic-main| EVM | [0x950AA3028F1A3A09D4969C3504BEc30D7ac7d6b2](https://polygonscan.com/address/0x950AA3028F1A3A09D4969C3504BEc30D7ac7d6b2) | Live |
| Optimism Mainnet | op-main  | EVM | [0xEdB353a241d6efD19494635FF966acc12aEEAeec](https://optimistic.etherscan.io/address/0xEdB353a241d6efD19494635FF966acc12aEEAeec) | Live |
| Base Mainnet | base-main |    EVM | [0x3C89a1FD995d35a0E87952B0c3F3aC2a46cF83Ab](https://basescan.org/address/0x3C89a1FD995d35a0E87952B0c3F3aC2a46cF83Ab) | Live |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-15`
 - Live since: January 20th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/addrbook.json)
 -  - current tag for Paloma: [**v1.8.0**](https://github.com/palomachain/paloma/releases/tag/v1.8.0)
 -   - current tag for Pigeon: [**v1.8.0**](https://github.com/palomachain/pigeon/releases/tag/v1.8.0)


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
