# Active Networks on Paloma

## Testnet
### Paloma networks 

|Chain ID| Type|Live Since | Genesis|Addressbook|
|-------|------|------|------|------|
| `paloma-testnet-15`| Testnet|Jan 20, 2023 |[Genesis Link](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/genesis.json)| [Addressbook Link](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/addrbook.json)|

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
|Binance Mainnet|`bnb-main`|EVM| [0x370A1a665328170eFA6a0bb51f948108C23528BA](https://bscscan.com/address/0x370A1a665328170eFA6a0bb51f948108C23528BA) |Live|
|Polygon Mainnet|`matic-main`|EVM| - |In proposal|

::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 
|  3  | CW721 base contract. Use this contract to instantiate your own [CW721](../../guide/develop/quick-start/paloma-py/cw721.md) NFT token|
|  4  | CW20 base contract. Use this contract to instantiate your own [CW20](../../guide/develop/quick-start/paloma-py/cw20.md) fungible token|
