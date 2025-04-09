# Active Paloma Networks

## Mainnet

 - Chain ID: `tumbler`
 - Live since: April 22nd, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/addrbook.json)
 - current tag for Paloma: [**v2.4.11**](https://github.com/palomachain/paloma/releases/tag/v2.4.11)
 - current tag for Pigeon: [**v2.3.4**](https://github.com/palomachain/pigeon/releases/tag/v2.3.4)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract|Fee Manager|
|------------|------------|----------|------------------------|------|
| Arbitrum Mainnet | arbitrum-main | EVM | [0x3c186...1d19C](https://arbiscan.io/address/0x3c1864a873879139C1BD87c7D95c4e475A91d19C) | [0xd8651...3ed34](https://arbiscan.io/address/0xd865124b3d9c67acdfb830bea4f3070a4123ed34) |
| Base Mainnet | base-main |    EVM | [0x10523...91814](https://basescan.org/address/0x105230D0ee3ADB4E07654Eb35ad88E32Be791814) | [0xeE833...B78f9](https://basescan.org/address/0xeE8338Ee133B6705a7144a407eeB64Bf742B78f9) |
| BNB Chain mainnet| bnb-main | EVM | [0xEb198...020413](https://bscscan.com/address/0xEb1981B0bC9C8ED8eE5F95D5ad0494B848020413) | [0x60192...8a04a](https://bscscan.com/address/0x60192927fa8c0e6aa5d1becde6b043817778a04a) |
| Ethereum Mainnet | eth-main | EVM | [0x71956...79AC8](https://etherscan.io/address/0x71956340a586db3afD10C2645Dbe8d065dD79AC8) | [0x10670...1dcc9](https://etherscan.io/address/0x1067082fd0b74bfddfd5794e5ac0f24ed941dcc9) |
| Gnosis Mainnet | gnosis-main | EVM | [0xEf2e3...1C63A](https://gnosisscan.io/address/0xc2A1a1bD4018cFAA744dD5Fb9D0c06f460e1C63A) | [0xcb48c...b5581](https://gnosisscan.io/address/0xcb48c27e69acfc2466941f71ff9e8530d53b5581) |
| Polygon Mainnet | matic-main| EVM | [0x6aC56...D8b4B](https://polygonscan.com/address/0x6aC565F13FEE0f5D44D76036Aa6461Fb1A9D8b4B) | [0x8a3b1...25eed](https://polygonscan.com/address/0x8a3b188e5b8f3ac0437cfb85db4ca1ee41225eed) |
| Optimism Mainnet | op-main  | EVM | [0xa4188...22856](https://optimistic.etherscan.io/address/0xa41886cFA7f2d8cE8Dc15670DDD25eD890822856) | [0x0b15c...d5fd9](https://optimistic.etherscan.io/address/0x0b15cd4f536c0c198bccfa69fd6eb5e8192d5fd9) |



::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-17`
 - Live since: January 15th, 2025
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-17/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-17/addrbook.json)
 - current tag for Paloma: [**v2.4.11**](https://github.com/palomachain/paloma/releases/tag/v2.4.11)
 - current tag for Pigeon: [**v2.3.4**](https://github.com/palomachain/pigeon/releases/tag/v2.3.4)


### Available endpoints
- LCD: lcd.testnet.palomaswap.com
- rpc: https://testnet.palomaswap.com (use port `443` to connect local `palomad` instance to this node)


### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract|Fee Manager|
|------------|------------|----------|------------------------|------|
| Ethereum Mainnet | eth-main | EVM | currently not live| currently not live |
| Arbitrum Mainnet | arbitrum-main | EVM | currently not live | currently not live |

::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

<!---
### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 
|  3  | CW721 base contract. Use this contract to instantiate your own [CW721](../../guide/develop/quick-start/paloma-py/cw721.md) NFT token|
|  4  | CW20 base contract. Use this contract to instantiate your own [CW20](../../guide/develop/quick-start/paloma-py/cw20.md) fungible token|
--->
