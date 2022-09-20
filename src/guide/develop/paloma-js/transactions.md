# Transactions

This document explains how to influence the blockchain's state by broadcasting transactions.

Transactions include:

- a list of messages
- an optional memo
- a fee
- a signature from a key

The messages included in a transaction contain the information that will be routed to a proper message handler in the node, which in turn parses the inputs and determines the next state of the blockchain.

## Create transactions

You will first want to create a wallet which you can use to sign transactions. If you don't have a wallet yet, head to the [wallet instructions](wallets) instructions to set one up.

### Create messages

```ts
import { MsgSend } from "@paloma/Paloma.js";

const send = new MsgSend(wallet.key.accAddress, "<random-Paloma-address>", {
  ugrain: 1000,
});
```

### Create and Sign Transaction

```ts
const tx = await wallet.createAndSignTx({
  msgs: [send],
  memo: "Hello",
});
```

### Broadcast transaction

```ts
const txResult = await Paloma.tx.broadcast(tx);
```

The default broadcast mode is `block`, which waits until the transaction has been included in a block. This will give you the most information about the transaction, including events and errors while processing.

You can also use `sync` or `async` broadcast modes.

```ts
// const syncTxResult = await Paloma.tx.broadcastSync(tx);
// const asyncTxResult = await Paloma.tx.broadcastAsync(tx);
```

A wallet makes it easy to create a transaction by automatically fetching the account number and sequence from the blockchain. The fee parameter is optional -- if you don't include it, Paloma.js will automatically use your LCD's fee estimation settings to simulate the transaction within the node and include the resultant fee in your transaction.

```ts
const msgs = [ ... ]; // list of messages
const fee = Fee(...); // optional fee

const unsignedTx = await wallet.createTx({
  msgs,
  // fee, (optional)
  memo: 'this is optional'
});
```

You can then sign the transaction with the wallet's key, which will create a `StdTx` which you can later broadcast:

```ts
const tx = wallet.key.signTx(unsignedTx);
```

You can also use the convenience function `Wallet.createAndSignTx()`, which automatically generates a signed transaction to be broadcast:

```ts
const tx = await wallet.createAndSignTx({
  msgs,
  fee,
  memo: "this is optional",
});
```


### Check events

If you broadcasted the transaction with `block`, you can get the events emitted by your transaction.

```ts
import { isTxError } from "@paloma/Paloma.js";

const txResult = Paloma.tx.broadcast(tx);

if (isTxError(txResult)) {
  throw new Error(
    `encountered an error while running the transaction: ${txResult.code} ${txResult.codespace}`
  );
}

// check for events from the first message
txResult.logs[0].eventsByType.store_code;
```
