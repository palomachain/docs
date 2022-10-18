# Transactions

This document explains how to influence the blockchain's state by broadcasting transactions.

Transactions include:

- a list of messages
- an optional memo
- a fee
- a signature from a key

The messages included in a transaction contain the information that will be routed to a proper message handler in the node, which in turn parses the inputs and determines the next state of the blockchain.

A`StdTx` is a data object that represents a transaction. It contains:

- **msgs**: a list of state-altering messages
- **fee**: the transaction fee paid to network / validators
- **signatures**: a list of signatures from required signers (depends on messages)
- **memo**: a short string describing transaction (can be empty string)

Paloma SDK provides functions that help create StdTx objects.

## Using a Wallet (recommended)

A `Wallet` allows you to create and sign a transaction in a single step by automatically fetching the latest information from the blockchain (chain ID, account number, sequence).

Use `LCDClient.wallet()` to create a Wallet from any Key instance. The Key provided should
correspond to the account you intend to sign the transaction with.

::: Bad Key length error
NOTE: If you are using MacOS and got an exception 'bad key length' from MnemonicKey, please check your python implementation. if python3 -c "import ssl; print(ssl.OPENSSL_VERSION)" returns LibreSSL 2.8.3, you need to reinstall python via pyenv or homebrew.
:::

```py
from paloma_sdk.client.lcd import LCDClient
from paloma_sdk.key.mnemonic import MnemonicKey

mk = MnemonicKey(mnemonic=MNEMONIC) 
paloma = LCDClient("http://testnet.palomaswap.com", "<paloma chain id>")
wallet = paloma.wallet(mk)
```
Check the [available networks](../../../resources/networks.md) to chose the right `chainID`.

Once you have your Wallet, you can simply create a StdTx using `Wallet.create_and_sign_tx`.

```py
from paloma_sdk.client.lcd.api.tx import CreateTxOptions
from paloma_sdk.core.fee import Fee
from paloma_sdk.core.bank import MsgSend

tx = wallet.create_and_sign_tx(
    CreateTxOptions(
        msgs=[MsgSend(
            wallet.key.acc_address,
            RECIPIENT,
            "1000000ugrain" # send 1 Grain
            )]
            ,
            memo="test transaction!",
            fee=Fee(200000, "120000ugrain")
    )
)
```

And that's it! You should now be able to broadcast your transaction to the network.

```py

result = paloma.tx.broadcast(tx)
print(result)
```

### Automatic fee estimation

If no `fee` parameter is provided for `Wallet.create_and_sign_tx()`, the transaction fee will be simulated against the node and populated for you. By default, `Wallet` will use the fee estimation parameters of the `LCDClient` used to create it. You can override
this behavior **per transaction**:

::: warning
Fee estimation simulates the transaction in the node -- if the transaction would fail due to an error, such as an incorrect smart contract call, the estimation too would fail.
:::    

```py{8-10}
tx = wallet.create_and_sign_tx(CreateTxOptions(
    msgs=[MsgSend(
        wallet.key.acc_address,
        RECIPIENT,
        "1000000ugrain" # send 1 Grain
    )],
    memo="test transaction!",
    gas_prices="0.015ugrain", # optional
    gas_adjustment="1.2", # optional
))
```
