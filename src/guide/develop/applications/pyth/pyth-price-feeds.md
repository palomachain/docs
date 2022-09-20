# Pyth price feeds

Developers can use Paloma to access on-chain price feeds made available through [Pyth](https://pyth.network/).

Pyth is a network that delivers real-time on-chain market data. Price feeds present the data in a fixed-point format. The same exponent is used for both the price and confidence interval.
Learn more about how Pyth works and how price feeds are provided on their 
[official documentation](https://docs.pyth.network/). 

## Querying price data
Pyth price data can be queried easily by querying the state of the smart contract that consumes the price feed and providing the ID of the price pair. The feed is currently refreshed every 6 seconds. 

:::details Price feed IDs
There are currently five price feeds available on the Paloma testnet.

```sh
- ALGO_USD="0x08f781a893bc9340140c5f89c8a96f438bcfae4d1474cc0f688e3a52892c7318"
- BTC_USD="0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b"
- ETH_USD="0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6"
- LUNA_USD="0x677dbbf4f68b5cb996a40dfae338b87d5efb2e12a9b2686d1ca16d69b3d7f204"
- USDC_USD="0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722"
```

:::

Below is an example of querying the Cosmwasm contract state for the ETH_USD price feed on paloma-testnet-10:

```sh
palomad q wasm contract-state smart paloma1f6jlx7d9y408tlzue7r2qcf79plp549n30yzqjajjud8vm7m4vdsg65l3g 
'{
  "price_feed": {
    "id": "ca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6"
  }
}' --chain-id paloma-testnet-10
```
With output:
```sh
data:
  price_feed:
    ema_conf: "15584666"
    ema_price: "156276949000"
    prev_conf: "2950718"
    prev_price: "157141049282"
    prev_publish_time: 1.658341622e+09
    price: "157133404682"
    product_id: 1801eb03803af0244523ee2a86c3f27b126abe8904db4b45a82adb5fe21708b4
    publish_time: 1.658341622e+09
    status: Trading
```    

The price feed is send as [VAA](https://docs.wormhole.com/wormhole/vaas), a blob of binary data that has been signed by the wormhole guardians. The Cosmwams contract deployed on Paloma reads and unpacks the VAA to return the price. 

## Contract Configurations 
The Pyth price feed is powered by two Cosmwasm contracts deployed on Paloma. 

Here are the configuration for instantiating the two contracts on 
the Paloma testnet. The values are provided by Pyth for instantiation.

```JSON
{
  "gov_chain": 1,
  "gov_address": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ=",
  "guardian_set_expirity": 86400,
  "initial_guardian_set": {
    "addresses": [ { "bytes": "E5R71IsY5T/a7ud/NHM5Gscnxjg=" } ],
    "expiration_time": 0
  }
}
```
```JSON
{
  "pyth_emitter": "80YZWsAvN9YNTbj/pu90yxvjVQBHVDpKnums9NeGl7A=",
  "pyth_emitter_chain": 1,
  "wormhole_contract": "paloma12fykm2xhg5ces2vmf4q2aem8c958exv3v0wmvrspa8zucrdwjedsqk2609"
}
```

## Video walkthrough
Watch Taariq and Chase from the Paloma team as they walk through the Pyth price feed with some examples. 
                  
<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/URRW3aLe0eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
