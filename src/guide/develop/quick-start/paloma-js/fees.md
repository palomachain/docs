# Fees

```ts
import { Fee } from '@paloma/Paloma.js';

const msgs = [ new MsgSend( ... ), new MsgExecuteContract( ... ), ]; // messages
const fee = new Fee(50000, { ugrain: 4500000 });

const tx = await wallet.createAndSignTx({ msgs, fee });
```

## Automatic fee estimation

If you don't specify a fee when you create your transaction, it will automatically be estimated by simulating it within the node.

```ts
const tx = await wallet.createAndSignTx({ msgs });
```

You can define the fee estimation parameters when you create your `LCDClient` instance. Check the [available networks](../../../resources/networks.md) to chose the right `chainID` The defaults are:

```ts
const Paloma = new LCDClient({
  URL: "https://lcd.testnet.palomaswap.com",
  chainID: "<paloma chain id>",
  gasPrices: { ugrain: 0.015 },
  gasAdjustment: 1.4,
});
```

You can override these settings by passing the fee estimation parameters in `wallet.createTx` or `wallet.createAndSignTx`:

```ts
const tx = await wallet.createAndSignTx({
  msgs,
  gasPrices: { ugrain: 0.01 },
  gasAdjustment: 1.9,
});
```
