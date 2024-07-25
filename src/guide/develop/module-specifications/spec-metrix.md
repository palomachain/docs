# Metrix

The `metrix` module is responsible for capturing all kinds of domain events around relayer performance, aggregating them in a meaningful way and making them accessible to consumers. The metrics are used for [Pigeon Feed](./spec-treasury.md)

## The collected metrics

The following metrics are currently actively being gathered:

### Relayer Fee


### Uptime

The uptime is a percentile value of representing the network uptime of the validator node attributed with the relayer. It is updated once per block, and calculated by evaluating the nodes `missed blocks` during the `signed blocks window` using the following formula:

`((params.signed_blocks_window - signingInfo.missed_blocks_counter) / params.signed_blocks_window) * 100`
  
*Note: This still needs to be adapted for jailed Validators, who will still be reported with an uptime of 100% (although not eligible for relaying).*

### SuccessRate

This metric represents the pigeon's relaying success rate. The metric is collected every time a Pigeon reports a message as processed, either successfully or not. 

The success rate goes up by 1% for every successfully relayed message, and down by 2% for every failed attempt. The rate is capped between 0% and 100%, and will slowly shift back towards a base rate of 50% from either end over the period of 1000 messages. 

### ExecutionTime

This metric represents the speed of successful delivery once the message is assigned to a relayer. The metrics work much the same way as on success rate, with a moving average built on the last 100 messages delivered, self purging after 1000 messages.

### FeatureSet

This metric represents the pigeon relay feature set (MEV, TXtype,etc…) that a relayer has enabled. 