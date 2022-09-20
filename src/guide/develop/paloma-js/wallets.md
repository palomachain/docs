# Wallets

Use `LCDClient.wallet()` to create a `Wallet` from a `Key`.

## Create a wallet

```ts
import { LCDClient, MnemonicKey } from "@paloma/Paloma.js";

const lcd = new LCDClient({
  URL: "http://testnet.palomaswap.com:1317",
  chainId: "paloma-testnet-10",
  classic: true,
});

const new_mk = new MnemonicKey();
const new_wallet = Paloma.wallet(new_mk);
```

In the above example, a `MnemonicKey` was specified for the wallet, but any type of `Key` implementation can be used instead.

## Recover a wallet from a mnemonic
```ts
import { LCDClient, MnemonicKey } from "@paloma/Paloma.js";

const lcd = new LCDClient({
  URL: "http://testnet.palomaswap.com:1317",
  chainId: "paloma-testnet-10",
  classic: true,
});

const mk = new MnemonicKey({
  mnemonic:
    'YOUR MNEMONIC HERE',
});

const wallet = lcd.wallet(mk);
```

## Usage

### Encrypt Key

```ts
import { LCDClient, Crypt } from "@paloma/Paloma.js";
  
const crypt = new Crypt();
const encrypted_key_to_store = crypt.encrypt('KEY_VALUE', 'PASSWORD');

const key_value = crypt.decrypt(encrypted_key_to_store, 'PASSWORD');

```

### Checking the wallet balance

```ts
let address = wallet.key.accAddress;
let [balance] = await lcd.bank.balance(address);
console.log(balance.toData());
```

### Getting account number and sequence

A wallet is connected to the Paloma blockchain and can poll the values of an account's account number and sequence directly:

```ts
console.log(await wallet.accountNumber());
console.log(await wallet.sequence());
```
