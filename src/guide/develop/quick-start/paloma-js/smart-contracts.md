# Smart contracts

This document explains how to perform work with smart contracts with Paloma.js.

## Upload contract code

You will first need a compiled WASM smart contract's binary to upload. Check the [available networks](../../../resources/networks.md) to chose the right `chainID`

```ts
import { LCDClient, MsgStoreCode, MnemonicKey, isTxError } from '@paloma/Paloma.js';
import * as fs from 'fs';

// create a new mnemonic key
const mk = new MnemonicKey()

// connect to a network
const Paloma = new LCDClient({
  URL: 'http://testnet.palomaswap.com',
  chainID: '<paloma chain id>'
});

const wallet = Paloma.wallet(mk);

const storeCode = new MsgStoreCode(
  wallet.key.accAddress,
  fs.readFileSync('contract.wasm').toString('base64')
);
const storeCodeTx = await wallet.createAndSignTx({
  msgs: [storeCode],
});
const storeCodeTxResult = await Paloma.tx.broadcast(storeCodeTx);

console.log(storeCodeTxResult);

if (isTxError(storeCodeTxResult)) {
  throw new Error(
    `store code failed. code: ${storeCodeTxResult.code}, codespace: ${storeCodeTxResult.codespace}, raw_log: ${storeCodeTxResult.raw_log}`
  );
}

const {
  store_code: { code_id },
} = storeCodeTxResult.logs[0].eventsByType;
```

## Create a contract

For Paloma smart contracts, there is a distinction between uploading contract code and creating (instantiating) a contract. This allows multiple contracts to share the same code if there are only minor variations in their logic which can be configured at contract creation. This configuration is passed in an **InitMsg**, and provides the initial state for the contract.

To create (instantiate) a smart contract, you must first know the code ID of an uploaded code. You will reference it in a `MsgInstantiateContract` alongside the InitMsg to create the contract. Upon successful creation, your contract will be located at an address that you specify.

```ts
import { MsgInstantiateContract } from '@paloma/Paloma.js';


const instantiate = new MsgInstantiateContract(
  wallet.key.accAddress,
  +code_id[0], // code ID
  {
    count: 0,
  }, // InitMsg
  { ugrain: 10000000}, // init coins
  false // migratable
);

const instantiateTx = await wallet.createAndSignTx({
  msgs: [instantiate],
});
const instantiateTxResult = await Paloma.tx.broadcast(instantiateTx);

console.log(instantiateTxResult);

if (isTxError(instantiateTxResult)) {
  throw new Error(
    `instantiate failed. code: ${instantiateTxResult.code}, codespace: ${instantiateTxResult.codespace}, raw_log: ${instantiateTxResult.raw_log}`
  );
}

const {
  instantiate_contract: { contract_address },
} = instantiateTxResult.logs[0].eventsByType;
```

## Execute a contract

Smart contracts respond to JSON messages called **HandleMsg** which can exist as different types. The smart contract writer should provide any end-users of the smart contract with the expected format of all the varieties of HandleMsg the contract is supposed to understand, in the form of a JSON schema. The schema thus provides an analog to Ethereum contracts' ABI.

```ts
import { MsgExecuteContract } from '@paloma/Paloma.js';

const execute = new MsgExecuteContract(
  wallet.key.accAddress, // sender
  contract_address[0], // contract account address
  { ...executeMsg }, // handle msg
  { ugrain: 100000 } // coins
);

const executeTx = await wallet.createAndSignTx({
  msgs: [execute]
});

const executeTxResult = await Paloma.tx.broadcast(executeTx);
```

## Query data from a contract

A contract can define a query handler, which understands requests for data specified in a JSON message called a QueryMsg. Unlike the message handler, the query handler cannot modify the contract's or blockchain's state -- it is a readonly operation. Therefore, a querying data from a contract does not use a message and transaction, but works directly through the `LCDClient` API.

```ts
const result = await Paloma.wasm.contractQuery(
  contract_address[0],
  { query: { queryMsgArguments } } // query msg
);
```
