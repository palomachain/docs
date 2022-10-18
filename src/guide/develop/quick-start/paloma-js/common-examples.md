# Common examples guide

Use the following common examples to learn how to use Paloma.js. If this is your first time using Paloma.js, use the [Paloma.js installation guide](./getting-started.md).

## Configuring LCDClient

The following code example shows how to initialize the LCDClient. The rest of the examples assume you initialized it by using this example or similar code. Check the [available networks](../../../resources/networks.md) to chose the right `chainID`

```ts
import fetch from "isomorphic-fetch";
import { MsgSend, MnemonicKey, Coins, LCDClient } from "@paloma/Paloma.js";

// Fetch gas prices and convert to `Coin` format.
const gasPrices = await (
  await fetch("", { redirect: 'follow' }) //todo: gas price api
).json();
const gasPricesCoins = new Coins(gasPrices);

const lcd = new LCDClient({
  URL: "http://testnet.palomaswap.com",
  chainID: "<paloma chain id>", 
  gasPrices: gasPricesCoins,
  gasAdjustment: "1.5",
  gas: 10000000,
  isClassic: false, // optional parameter, false by default
});
```

## Get wallet balance (native tokens)

```js
// Replace with address to check.
const address = "paloma1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const [balance] = await lcd.bank.balance(address);
console.log(balance.toData());
```

Example response:

```js
[{ denom: "ugrain", amount: "5030884" }];
```

## Get transaction status

```js
// Replace with TX hash to lookup.
const hash = "CAB264B3D92FF3DFE209DADE791A866876DE5DD2A320C1200F9C5EC5F0E7B14B";
const txInfo = await lcd.tx.txInfo(hash);
console.log(txInfo);
```

Example response (modified for readability):

```js
TxInfo {
  height: 8276372,
  txhash: 'CAB264B3D92FF3DFE209DADE791A866876DE5DD2A320C1200F9C5EC5F0E7B14B',
  raw_log: '[]',
  logs: [
    TxLog {
      msg_index: 0,
      log: '',
      events: [Array],
      eventsByType: [Object]
    }
  ],
  gas_wanted: 177808,
  gas_used: 128827,
  tx: Tx {},
  timestamp: '2022-03-17T18:34:06Z',
  code: 0,
  codespace: ''
}
```

## Get link to transaction

```js
const getTransactionLink = (hash) =>
  `https://paloma.explorers.guru/transaction/tx/${hash}`;
const hash = "CAB264B3D92FF3DFE209DADE791A866876DE5DD2A320C1200F9C5EC5F0E7B14B";

console.log(getTransactionLink(hash));
```

Example response:

```
https://paloma.explorers.guru/transaction/tx/CAB264B3D92FF3DFE209DADE791A866876DE5DD2A320C1200F9C5EC5F0E7B14B
```

## Get link to wallet address

```js
const getWalletLink = (address) =>
  `https://paloma.explorers.guru/account/${address}`;
const address = "paloma1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
console.log(getWalletLink(address));
```

Example response:

```
https://paloma.explorers.guru/account/paloma1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Sending native tokens

The following code example shows how to send native tokens:

```ts
import { LCDClient, MnemonicKey, MsgSend } from "@paloma/Paloma.js";

// const lcd = new LCDClient(...);

const mk = new MnemonicKey({
  mnemonic:
    "satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn",
});

const wallet = lcd.wallet(mk);

// Transfer 1 GRAIN.
const send = new MsgSend(
  wallet.key.accAddress,
  "paloma1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8",
  { ugrain: "1000000" }
);

const tx = await wallet.createAndSignTx({ msgs: [send] });
const result = await lcd.tx.broadcast(tx);

console.log(result);
```

## Decoding Protobuf-encoded messages

The following code example shows how to decode messages that have been encoded using Protobuf:

```ts
import { LCDClient, Tx } from "@paloma/Paloma.js";

// const lcd = new LCDClient(...);

const blockData = await lcd.tendermint.blockInfo(5923213);

const txInfos = blockData.block.data.txs.map((tx) =>
  Tx.unpackAny({ value: Buffer.from(tx, "base64") })
);

// Find messages where a contract was initialized.
const initMessages = txInfos
  .map((tx) => tx.body.messages)
  .flat()
  .find((i) => i.constructor.name === "MsgInstantiateContract");

console.log(initMessages);
```

## Validate a Paloma address

The following code example shows how to do a basic verification on a Paloma address.

This is a basic version of the verification, it does not require external libraries as it performs a simple comparison with a regex string. It could give false positives since it doesn't verify the checksum of the address.

```ts
// basic address validation (no library required)
function isValid(address) {
  // check the string format:
  // - starts with "paloma1"
  // - length == 44 ("paloma1" + 38)
  // - contains only numbers and lower case letters
  return /(paloma1[a-z0-9]{38})/g.test(address);
}

console.log(isValid("paloma1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8")); // true
console.log(isValid("paloma1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")); // true (even if this doesn't have a valid checksum)
console.log(isValid("cosmos1zz22dfpvw3zqpeyhvhmx944a588fgcalw744ts")); // false
console.log(isValid("random string")); // false
```

This is a more advanced verification that requires the bech32 library which is used to verify the checksum.

```ts
import { bech32 } from "bech32";

// advanced address validation, it verify also the bech32 checksum
function isValid(address) {
  try {
    const { prefix: decodedPrefix } = bech32.decode(address); // throw error if checksum is invalid
    // verify address prefix
    return decodedPrefix === "Paloma";
  } catch {
    // invalid checksum
    return false;
  }
}

console.log(isValid("paloma1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8")); // true
console.log(isValid("paloma1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")); // false
console.log(isValid("cosmos1zz22dfpvw3zqpeyhvhmx944a588fgcalw744ts")); // false
console.log(isValid("random string")); // false
```

## Avoid Status 500: timed out waiting for tx to be included in a block

Occasionally the broadcast function of Paloma.js and paloma.py throws the error `Status 500: timed out waiting for tx to be included in a block`, even if transaction will confirmed onchain after a few seconds.

This happens because the libraries use by default the `broadcast-mode = block`, with this mode the LCD to which you are broadcasting the transaction sends an http response to your request only when the transaction has been included in a block, but if the chain is overloaded the confirmation may take too long and trigger a timeout in the LCD.

To solve this problem it is recommended to use the `broadcast-mode = sync` and then iterate a request to the LCD with the txhash to understand when it has been included in a block.

This is an example to do it in JavaScript:

```ts
// sign the tx
wallet
  .createAndSignTx(YOUR_TX_HERE)
  // use broadcastSync() instead of broadcast()
  .then((tx) => Paloma.tx.broadcastSync(tx))
  .then(async (result) => {
    // TODO: use a for or add a timeout to prevent infinite loops
    while (true) {
      // query txhash
      const data = await Paloma.tx.txInfo(result.txhash).catch(() => {});
      // if hash is onchain return data
      if (data) return data;
      // else wait 250ms and then repeat
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  })
  .then((result) => {
    // this will be executed when the tx has been included into a block
    console.log(result);
  });
```
