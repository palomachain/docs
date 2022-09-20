# Build a Delegator Community

Once you have successfully set up a Paloma validator, your validator will 
need to attract delegators to be able to participate in consensus. This will 
require extra work. While delegation should not be seen as a set-and-forget 
staking scheme, most delegators will seek validators who allow them to delegate 
more passively based on a validator's reliability, trust, and comission rate.

The existing delegator community will need to know about your validator
and why it should be trusted. This guide aims to give a few general guidelines 
on different approaches to take in building a community and attracting delegators.

Most successful validators build a reputation for their validator services,
and if they are able to, build a brand around their validator services.
Successful validators should participate in the community and engage as
much as possible in governance, as this shows commitment to the chain and
the validator taking its reposibilities seriously. Becoming a known participant 
throughout the ecosystem is a great way to attract delegators and solidify 
longevity and sustainability as a validator.

## Attract Delegators

Generating confidence among delegators is key as delegators will delegate their
stake to those validators that positively impact their risk and are consistent 
with rewards. Although validators are not required to self-bond GRAIN, all 
validators should have "skin-in-the-game". This can help make a validator more 
trustworthy.

In order for delegators to have some guarantee about how much "skin-in-the-game" 
their validator has, validators can signal a minimum amount of self-bonded GRAIN. 
If a validator's self-bond goes below the limit that it has predefined, this 
validator and all of its delegators will unbond.

Consider the following options to help improve your visibility and make yourself 
known to potential delegators:

### Set up a website

Set up a website so that your delegators can find you. It is recommended that you make 
a custom section for Paloma delegators that instructs them how to delegate GRAIN tokens.

## Announce yourself on Discord

Join the [Paloma Validators Discord](https://discord.com/invite/NF2MNpDXZJ) channel, and introduce 
yourself.

### Submit a validator profile

Submit a Validator Profile to make it official.

### Add a thumbnail

Create a [Keybase Account](https://keybase.io/) follow the Keybase instructions to set 
up a PGP key, and upload a profile picture.
For best continuity use the same GitHub account to verify your Keybase, and your 
Validator Profile.

Now link your Keybase profile to your validator. Open your validator terminal and 
execute this command:

```bash
palomad tx staking edit-validator \
    --identity="keybase identity"
```
