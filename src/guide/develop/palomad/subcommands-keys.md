# `key` subcommands

This section describes the subcommands for for the `key` command available from `palomad`.


## `add`

Generates a public and private key pair for an account so that you can receive funds, send funds, create bonding transactions, and so on.

::: tip
For security purposes, run this command on an offline computer.
:::

**Syntax**

```bash
palomad keys add <your-key-name>
```

where `<your-key-name>` is the name of the account. It references the account number used to derive the key pair from the mnemonic. When you want to send a transaction, you will use this name to identify your account.

To specify the path \(`0`, `1`, `2`, ...\) you want to use to generate your account, you can append the optional `--account` flag. By default, account `0` is generated.

The command generates a 24-word mnemonic and saves the private and public keys for account `0` simultaneously. You are prompted to specify a passphrase that is used to encrypt the private key of account `0` on disk. Each time you want to send a transaction, this password is required. If you lose the password, you can always recover the private key by using the mnemonic phrase.

::: danger
To prevent theft or loss of funds, ensure that you keep multiple copies of your mnemonic and store it in a secure place and that only you know how to access it. If someone is able to gain access to your mnemonic, they are able to gain access to your private keys and control the accounts associated with them.
:::

::: tip
After you have triple-checked your mnemonic and safely stored it, you can delete bash history to ensure no one can retrieve it.

```bash
history -c
rm ~/.bash_history
```

:::

To generate more accounts from the same mnemonic, run:

```bash
palomad keys add <your-key-name> --recover --account 1
```

You are prompted to specify a passphrase and your mnemonic. To generate a different account, change the account number.

::: danger

- Do not use the same passphrase for multiple keys. Do not lose or share your mnemonic with anyone.
  :::

**Example**

```bash
palomad keys add myAccount
```

In some cases, you might need to recover your key. If you have the mnemonic that was used to generate your private key, you can recover it and re-register your key. Issuing the following command will prompt you to enter your 24-word mnemonic.

**Syntax**

```bash
palomad keys add <yourKeyName> --recover
```

For information about generating multisignature accounts and signing transactions, see [Sign with a multisig account](../sign-with-multisig.md).

## `delete`         
Delete the given keys from the keybase backend.

Note that removing offline or ledger keys will remove only the public key references stored locally, i.e. private keys stored in a ledger device cannot be deleted with the CLI.

**Syntax**
```bash
palomad keys delete <key name>
```

## `export`         

Export private key.

**Syntax**
```bash
palomad keys export <name>
```

## `import` and `import-hex`

Import ASCII armored or hex encoded private keys into the local keybase. 

**Syntax**
```bash
palomad keys import <name> <keyfile>
```

```bash
palomad keys import-hex <name> <keyfile>
```

## `list`           

Prints list of all keys stored by this key manager.

**Syntax**
```bash
palomad keys list
```

## `list-key-types`           

Prints list of all supported key types.

**Syntax**
```bash
palomad keys list-key-types
```

## `migrate`        

Migrate keys from amino to proto serialization format.
:::tip
It is recommended to run in 'dry-run' mode first to verify all key migration material.
:::

**Syntax**
```bash
palomad migrate
```

## `mnemonic`       

Compute the bip39 mnemonic for some input entropy. The default is the system entropy, to pass your own entropy, append flag `--unsafe-entropy`

**Syntax**
```bash
palomad mnemonic 
```


## `parse`          

Parse address from hex to bech32 and vice versa.

**Syntax**
```bash
palomad keys parse <hex-or-bech32-address>
```


## `rename`         

Rename an existing key from the keybase backend.

Note that renaming offline or ledger keys will rename only the public key references stored locally, i.e. private keys stored in a ledger device cannot be renamed with the CLI.

**Syntax**
```bash
palomad keys rename <old name> <new name>
```

## `show`

Retrieves an address for a specified account. The address is prefixed by `Paloma-`, for example `paloma15h6vd5f0wqps26zjlwrc6chah08ryu4hzzdwhc`. To receive funds, you must give an account address to the sender.

**Syntax**

```bash
palomad keys show <account-name>
```

**Example**

```bash
palomad keys show myAccount
```

To show a validator's address, append the `--bech=val` flag to the end of the command statement, as shown in the following example:

```bash
palomad keys show accountExample --bech=val
```

To show the validator consensus address that is generated when the node is created by `palomad init` and the Tendermint signing key for the node, use the `tendermint` command, as shown in the following example:

```bash
palomad tendermint show-address
```