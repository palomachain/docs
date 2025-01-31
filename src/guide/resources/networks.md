# Active Paloma Networks

## Mainnet

 - Chain ID: `tumbler`
 - Live since: April 22nd, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/addrbook.json)
 - current tag for Paloma: [**v2.4.4**](https://github.com/palomachain/paloma/releases/tag/v2.4.4)
 - current tag for Pigeon: [**v2.3.3**](https://github.com/palomachain/pigeon/releases/tag/v2.3.3)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract|Fee Manager|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0x042Ab...4230F1](https://bscscan.com/address/0x042Ab4cd2897BA02a420146af8d95f161A4230F1) | [0x60192...8a04a](https://bscscan.com/address/0x60192927fa8c0e6aa5d1becde6b043817778a04a) |
| Ethereum Mainnet | eth-main | EVM | [0xDcBd0...ed391d](https://etherscan.io/address/0xDcBd07EEC1D48aE0A14E61dD09BB5AA9c7ed391d) | [0x10670...1dcc9](https://etherscan.io/address/0x1067082fd0b74bfddfd5794e5ac0f24ed941dcc9) |
| Polygon Mainnet | matic-main| EVM | [0x26f5D...590EAb](https://polygonscan.com/address/0x26f5Da70095d69103ba8b2Ee264A20cD4B590EAb) | [0x8a3b1...25eed](https://polygonscan.com/address/0x8a3b188e5b8f3ac0437cfb85db4ca1ee41225eed) |
| Optimism Mainnet | op-main  | EVM | [0x5a7A8...F3bd52](https://optimistic.etherscan.io/address/0x5a7A8fAf7f73063b4F175E4eF354B6426aF3bd52) | [0x0b15c...d5fd9](https://optimistic.etherscan.io/address/0x0b15cd4f536c0c198bccfa69fd6eb5e8192d5fd9) |
| Base Mainnet | base-main |    EVM | [0x7cd97...a64E19](https://basescan.org/address/0x7cd976c5029FDA0dF0124490d00D7fBa25a64E19) | [0xeE833...B78f9](https://basescan.org/address/0xeE8338Ee133B6705a7144a407eeB64Bf742B78f9) |
| Gnosis Mainnet | gnosis-main | EVM | [0xEf2e3...9d16Ab](https://gnosisscan.io/address/0xEf2e3E09bCb5d1647D40E811D0396629549d16Ab) | [0xcb48c...b5581](https://gnosisscan.io/address/0xcb48c27e69acfc2466941f71ff9e8530d53b5581) |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x82Ed6...C89e73](https://arbiscan.io/address/0x82Ed642F4067D55cE884e2823951baDfEdC89e73) | [0xd8651...3ed34](https://arbiscan.io/address/0xd865124b3d9c67acdfb830bea4f3070a4123ed34) |
| Blast Mainnet | blast-main | EVM | [0x99465...566686](https://blastscan.io/address/0x994653E3916c93008F25cA0eeec71252C7566686) | [0x621fa...86db8](https://blastscan.io/address/0x621fa57c7229d207d1d9b6deeb6c25b936d86db8) |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-17`
 - Live since: January 15th, 2025
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-17/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-17/addrbook.json)
 - current tag for Paloma: [**v2.4.5**](https://github.com/palomachain/paloma/releases/tag/v2.4.5)
 - current tag for Pigeon: [**v2.3.3**](https://github.com/palomachain/pigeon/releases/tag/v2.3.3)


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
