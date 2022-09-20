# Query data

After you're connected to the blockchain via an `LCDClient` instance, you can query data from it. Data access is organized into various module APIs, which are accessible from within the `LCDClient` instance. Because they make HTTP requests in the background, they are Promises that can be awaited in order to not block during network IO.

Each module has its own set of querying functions. To get a comprehensive list, explore the module documentation:

- [`auth`](https://paloma.github.io/Paloma.js/classes/AuthAPI.html)
- [`bank`](https://paloma.github.io/Paloma.js/classes/BankAPI.html)
- [`distribution`](https://paloma.github.io/Paloma.js/classes/DistributionAPI.html)
- [`gov`](https://paloma.github.io/Paloma.js/classes/GovAPI.html)
- [`mint`](https://paloma.github.io/Paloma.js/classes/MintAPI.html)
- [`msgauth`](https://paloma.github.io/Paloma.js/classes/MsgAuthAPI.html)
- [`slashing`](https://paloma.github.io/Paloma.js/classes/SlashingAPI.html)
- [`staking`](https://paloma.github.io/Paloma.js/classes/StakingAPI.html)
- [`supply`](https://paloma.github.io/Paloma.js/classes/SupplyAPI.html)
- [`tendermint`](https://paloma.github.io/Paloma.js/classes/TendermintAPI.html)
- [`tx`](https://paloma.github.io/Paloma.js/classes/TxAPI.html)
- [`wasm`](https://paloma.github.io/Paloma.js/classes/WasmAPI.html)
