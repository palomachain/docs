# IBC Transfers

Paloma has full IBC transfer capabilities through both Paloma.js and Paloma Station. Although IBC functionality is not readily exposed through Paloma Station’s front-end, it can be fully incorporated into any dApp. It is up to a dApp’s front end to initiate IBC transfers.

## MsgTransfer

Paloma.js exports a `MsgTransfer` class that can be used to construct IBC transfers.

```js
new MsgTransfer(
  "transfer", // IBC port
  "channel-1", // Outbound channel
  new Coin("ugrain", "1000000"), // 1 GRAIN
  "paloma1cvw8sundusurqajhurpcfk7yvuzlh92cvkpy28", // Source Address on Paloma
  "osmo1cl4qw7u35uf77l4scjtv0qej8ycevu4mrdpvmg", // Destination address on Osmosis
  undefined, // Timeout block height (optional)
  (Date.now() + 60 * 1000) * 1e6 // Timeout timestamp (in nanoseconds) relative to the current block timestamp.
);
```

## Supported Channels

Channels are defined when a relayer is set up between Paloma and an external chain. For each new connected chain the channel ID is incremented.

You can use [Map of Zones](https://mapofzones.com/zone?period=24&source=phoenix-1&tableOrderBy=success&tableOrderSort=desc&testnet=false) to find the available channels and their IDs.

## Derive Cosmos chain addresses from a Paloma address

Cosmos SDK based blockchains use bech32 to encode the public key for display. Assuming the same private key is used on multiple Cosmos SDK chains it is possible to decode a Paloma address and generate the corresponding public key on another chain.

Here's a quick example using the [bech32](https://github.com/bitcoinjs/bech32) JavaScript library:

```js
import { bech32 } from 'bech32';

const PalomaAddress = 'paloma1cvw8sundusurqajhurpcfk7yvuzlh92cvkpy28';
const decodedAddress = bech32.decode(PalomaAddress);
const chainAddress = bech32.encode('osmo', decodedAddress.words);
```

## Complete example

The following example demonstrates how to send 1 GRAIN from Paloma to the Osmosis blockchain.

```JS
import {
  LCDClient,
  MnemonicKey,
  MsgTransfer,
  Coin,
} from "@paloma/Paloma.js";

// const lcd = new LCDClient(...);

const mk = new MnemonicKey({
  mnemonic: 'satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn',
});

const wallet = lcd.wallet(mk);

// Send 1 GRAIN to the Osmosis blockchain.
const transfer = new MsgTransfer(
 'transfer',
 'channel-1',
  new Coin('ugrain', '1000000'),
  'paloma1cvw8sundusurqajhurpcfk7yvuzlh92cvkpy28',
  'osmo1cl4qw7u35uf77l4scjtv0qej8ycevu4mrdpvmg',
  undefined,
  (Date.now() + 60 * 1000) * 1e6,
);

const tx = await wallet.createAndSignTx({ msgs: [transfer] });
const result = await lcd.tx.broadcast(tx);

console.log(result);
```

Instructions for initializing LCDClient can be found [here](https://docs.Paloma.money/docs/develop/sdks/Paloma-js/common-examples.html#configuring-lcdclient).
