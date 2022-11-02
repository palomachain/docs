# Compass EVM

Compass-EVM is a smart contract written in Vyper that allows you to run 
any other smart contract with arbitrary transaction data. It is as simple 
as providing the ABI and HEX of the contract you want to control.

The Compass-EVM contract resembles a validator-set multisig with a few 
tweaks. Even though it is designed to be used with a consensus process on Paloma, 
the Compass-EVM contract itself encodes nothing about this consensus process. Find the available contract addresses [here](../../../resources/networks.md)

## Model

- `update_valset`: updates the signers on the multisig, and their relative powers. 
  This mirrors the validator set on the Paloma blockchain, so that all the Paloma 
  validators are signers, in proportion to their staking power on the Paloma chain. 
  > An update_valset transaction must be signed by 2/3's of the current valset to 
  > be accepted.

  * A valset consists of a list of EVM-based validator addresses, their voting 
   power, and an id for the entire valset. `update_valset` takes a new valset, 
   the current valset, and the signatures of the current valset over the new valset.
  * It then checks the supplied valset against the saved checkpoint. 
    
    :::details make_checkpoint

    Because valsets contain over 100 validators, storing these all on the Ethereum blockchain each time would be quite expensive. Because of this, we only store a hash of the current valset, then let the caller supply the actual addresses, powers, and valset_id. We call this hash the checkpoint. This is done with the function `make_checkpoint`.

    :::
  
  * After determining that the valset supplied by the caller is correct, a check is run to determine if the new valset id is higher than the current valset id. This ensures that old valsets cannot be submitted because of their id. 
  * A checkpoint is made from the submitted new valset, using `make_checkpoint` again. In addition to being used later as a checkpoint, this is initially used as a digest to check the current valset's signature over the new valset using `check_validator_signatures`.
   
    :::details The only check in the new valset is the id
    
    The rest of the new valset is passed in the arguments to this method, but it is only used to recreate the checkpoint of the new valset. If we didn't check the id, it would be possible to pass in the checkpoint directly.

    :::

    :::details check_validator_signatures

    `check_validator_signatures` takes a valset, an array of signatures, a hash, and a power threshold. It checks that the powers of all the validators that have signed the hash add 
    up to the threshold. This is how we know that the new valset has been approved by at least 
    2/3s of the current valset. We iterate over the current valset and the array of signatures, 
    which should be the same length. For each validator, we first check if the signature is all 
    zeros. This signifies that it was impossible to obtain a given validator's signature.  
    If this is the case, we skip to the next validator in the list. Since we only need 2/3s 
    of the signatures, it is not required that every validator sign every time, and skipping them stops any validator from being able to stop working.

    If we have a signature for a validator, we verify it, throwing an error if something is wrong. We also increment a cumulative_power counter with the validator's power. Once this is over the threshold, we break out of the loop, verifying the signatures! We throw an error if the loop ends without the threshold being met. Because of the way we break out of the loop once the threshold has been completed, if the valset is sorted by descending power, we can usually skip evaluating the majority of signatures. To take advantage of the gas savings, valsets must be produced by the validators in descending order of power.

    :::
  
  * After all checks are complete, it is time to update the valset. The new checkpoint is saved over the old one and an event is emitted.

- `submit_logic_call`: used to submit an arbitrary transactions to another smart 
  contract. The logic call must be signed by 2/3's of the current valset.
  
  * Start with the same checks that are done in `update_valset`; checking the 
    supplied current valset against the checkpoint.
  * Also checks if the `message_id` is used. This stores an id for each ERC20 handled by the Compass-EVM. The id ensures that old logic call cannot be submitted again. It is also filters old batches on the Paloma chain that were never submitted and whose id is now too low to ever submit.
  * The the current validator's signatures are checked over the hash of the logic call, using the same method used above to check their signatures over a new valset.
  * Are succesfull checks, the arbitrary transaction is ran to the logic contract. The payload data should be less than 1024 bytes.

## Events

We emit two different events, each of which has a distinct purpose. One contains a field called message_id, which is used by the Paloma chain to ensure that the events are not out of order. This should updated each time one of the events is emitted. The other one emits valset_id and checkpoint when valset_id is updated.

- `LogicCallEvent`: contains information about a logic_call transaction that has been successfully processed. It contains the message_id and the `logic_contract` address, and payload data. The Paloma chain can identify the transaction from this information.

- `ValsetUpdated`: emits whenever the valset is updated. It does not contain the `_eventNonce`, since it is never brought into the Paloma state. It is used by relayers when they call `submit_logic_call` or `update_valset`, so that they can include the correct validator signatures with the transaction.
