# Active Paloma Networks

## Mainnet

 - Chain ID: `messenger`
 - Live since: February 8th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/addrbook.json)
 - current tag for Paloma: [**v1.7.1**](https://github.com/palomachain/paloma/releases/tag/v1.7.1)
 - current tag for Pigeon: [**v1.5.5**](https://github.com/palomachain/pigeon/releases/tag/v1.5.5)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0x83fAA28424d2819C4c4c2F701998C47d572fB2f4](https://bscscan.com/address/0x83fAA28424d2819C4c4c2F701998C47d572fB2f4) | Live |
| Ethereum Mainnet | eth-main | EVM | [0x7Eec3e2f4d567794B927B6d904Fbf973bC8D15e6](https://etherscan.io/address/0x7Eec3e2f4d567794B927B6d904Fbf973bC8D15e6) | Live |
| Polygon Mainnet | matic-main| EVM | [0x05d7b3A021DAFA1A52Aef09B8057493847cb6800](https://polygonscan.com/address/0x05d7b3a021dafa1a52aef09b8057493847cb6800) | Live |
| Optimism Mainnet | op-main  | EVM | [0x05d7b3A021DAFA1A52Aef09B8057493847cb6800](https://optimistic.etherscan.io/address/0x05d7b3A021DAFA1A52Aef09B8057493847cb6800) | Live |
| Base Mainnet | base-main |    EVM | [0x2F9AF8dBBA61898c86Fe56452a2CEddc8aEb139E](https://basescan.org/address/0x2F9AF8dBBA61898c86Fe56452a2CEddc8aEb139E) | Live |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-15`
 - Live since: January 20th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/addrbook.json)
 -  - current tag for Paloma: [**v1.7.2**](https://github.com/palomachain/paloma/releases/tag/v1.7.2)
 -   - current tag for Pigeon: [**v1.6.0**](https://github.com/palomachain/pigeon/releases/tag/v1.6.0)


### Available endpoints
- LCD: lcd.testnet.palomaswap.com
- rpc: https://testnet.palomaswap.com (use port `443` to connect local `palomad` instance to this node)


### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet | bnb-main | EVM | [0xBE3AeB2953B6757AA7Eaf4c69a66D6316c98363e](https://bscscan.com/address/0xBE3AeB2953B6757AA7Eaf4c69a66D6316c98363e) |Live|
| Polygon Mainnet | matic-main | EVM | [0x18298C5424a6a63b679eC190E8421855D7184Dd4](https://polygonscan.com/address/0x18298C5424a6a63b679eC190E8421855D7184Dd4)|Live|
| Ethereum Mainnet | eth-main | EVM | [0x35416C737FE972ec0BB9fB18A0DdD4A24A9990DE](https://etherscan.io/address/0x35416C737FE972ec0BB9fB18A0DdD4A24A9990DE) | Live |
| Optimism Mainnet | op-main  | EVM | [0x66eDE8aB441D16D49C7b34a1503AD0a66B14ea81](https://optimistic.etherscan.io/address/0x66eDE8aB441D16D49C7b34a1503AD0a66B14ea81) | Live |

::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 
|  3  | CW721 base contract. Use this contract to instantiate your own [CW721](../../guide/develop/quick-start/paloma-py/cw721.md) NFT token|
|  4  | CW20 base contract. Use this contract to instantiate your own [CW20](../../guide/develop/quick-start/paloma-py/cw20.md) fungible token|
