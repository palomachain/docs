## Cross-Chain Real World Asset Tokenization
Any developer can create, register, and mint Real World Assets natively on any chain supported by the pigeons in the Paloma Validator set.

On all chains, Paloma Validators monitor an ERC-20 Factory contract called the **ETF Purchaser** Contract that handles creation of ERC-20 stock token that corresponds to a Real World Asset on the PalomaDex API. 


## Create a Real World Asset Token
* Write to the ETF Purchaser Contract using the `create_signle_etf` function. (the spelling in `single` is deliberate)
* Inputs to the function are:
  * `_token_name` 
  * `_token_symbol` 
  * `_token_description`
  *  `_etf_ticker`
  * `_expense_ratio` (the expense ratio is for ETFs only)

## Buying a Real World Asset Token
* Write to the ETF Purchaser Contract using the `buy` payable function. Inputs to the payable function are as such:
  * A user can buy with ETH or any token which listed on uniswap v3
  * `_etf_token` The etf_token address is the token the user will purchase.
  * `_etf_amount` The token amount
  * `_recipient`  The recipient EVM address
  * `_path`  The path for swapping the input token into USDT. We use Uniswap v3 for all purchases on all.
  * `_min_amount` The default is 0 (it's for the min amount for swapping into USDT)

## Selling a Real World Asset Token
* Write to the ETF Purchaser Contract using the `sell` external function. Inputs to the external function are as such:
  * `_etf_token` This address is the token the seller wants to sell
  * `_etf_amount`The token amount
  * `_estimated_amount` The estimated PalomaUSD (PUSD) amount after sell. Developers can get estimated amount from the etfapi/v1/customindexprice api on PalomaDex.
  * `_recipient`: The reciepient's EVM address

### Target chains Cross-Chain Real World Asset Tokenization 

All blockchains listed below are currently supported by Paloma's relay pigeons and allow for remote message execution. Token prices are identified by ticker symbol and covers stocks, ETFs, currencies, as well as crypto assets. New blockchains will be added by the validator set as Paloma community votes them into governance.

|Target Chain|chain-ref-id|Chain Type|Real World Asset Purchaser Contract|Real World Asset Token List|Real World Asset Token Prices|
|------------|------------|----------|-----------------------------------|---------------------------|-----------------------------|
| Arbitrum Mainnet | arbitrum-main | EVM | [0xA2b87...412F5](https://arbiscan.io/address/0xA2b87Ccd2039f04A613e58FAD132faD2Fae412F5#code) | [Arbitrum Chain Real World Asset Token List](https://api.palomadex.com/etfapi/v1/etf?chain_id=arbitrum-main) | Arbitrum Chain Real World Asset Token Prices [AAPL Ticker Example]  (https://api.palomadex.com/etfapi/v1/customindexprice?chain_id=base-main&token_evm_address=0xdD51fDfd8a6879A195F12EB8D084b8feEE9b2D9a) |
| Base Mainnet | base-main |    EVM | [0x2E528...832ed](https://basescan.org/address/0x2E5285FAD8Cee85c17468Bf7a388d90D506832ed#code) | [Base Chain Real World Asset Token List](https://api.palomadex.com/etfapi/v1/etf?chain_id=base-main) | Base Chain Real World Asset Token Prices [AAPL Ticker Example]  (https://api.palomadex.com/etfapi/v1/customindexprice?chain_id=base-main&token_evm_address=0xdD51fDfd8a6879A195F12EB8D084b8feEE9b2D9a) |
| BNB Chain mainnet| bnb-main | EVM | [0x3b637...49264](https://bscscan.com/address/0x3b637bA54090b40a3717fd764B11E186E1B49264#code) | [BNB Chain Real World Asset Token List](https://api.palomadex.com/etfapi/v1/etf?chain_id=bnb-main) | BNB Chain Real World Asset Token Prices [AAPL Ticker Example]  (https://api.palomadex.com/etfapi/v1/customindexprice?chain_id=bnbn-main&token_evm_address=0xdD51fDfd8a6879A195F12EB8D084b8feEE9b2D9a) |
| Ethereum Mainnet | eth-main | EVM | [0xD3Ab7...80198](https://etherscan.io/address/0xD3Ab7b1FeD92a478699220cCB151CeE992E80198#code) | [Ethereum Chain Real World Asset Token List](https://api.palomadex.com/etfapi/v1/etf?chain_id=eth-main) | Ethereum Chain Real World Asset Token Prices [AAPL Ticker Example]  (https://api.palomadex.com/etfapi/v1/customindexprice?chain_id=eth-main&token_evm_address=0xdD51fDfd8a6879A195F12EB8D084b8feEE9b2D9a) |
| Gnosis Mainnet | gnosis-main | EVM | [0x25BF3...38915](https://gnosisscan.io/address/0x25BF3E67ccF137BCacEAf529e5b68052Cca38915#code) | [Gnosis Chain Real World Asset Token List](https://api.palomadex.com/etfapi/v1/etf?chain_id=gnosis-main) | Gnosis Chain Real World Asset Token Prices [AAPL Ticker Example]  (https://api.palomadex.com/etfapi/v1/customindexprice?chain_id=gnosis-main&token_evm_address=0xdD51fDfd8a6879A195F12EB8D084b8feEE9b2D9a) |
| Polygon Mainnet | matic-main| EVM | [0xA2b87...81f8E](https://polygonscan.com/address/0xfdD21Cf1eF5e2EBe51281770be9e15eD04a81f8E#code) | [Polygon Chain Real World Asset Token List](https://api.palomadex.com/etfapi/v1/etf?chain_id=matic-main) | Polygon Chain Real World Asset Token Prices [AAPL Ticker Example]  (https://api.palomadex.com/etfapi/v1/customindexprice?chain_id=matic-main&token_evm_address=0xdD51fDfd8a6879A195F12EB8D084b8feEE9b2D9a) |
| Optimism Mainnet | op-main  | EVM | [0x397c5...01687](https://optimistic.etherscan.io/address/0x397c517748c133cD032eA9E3e8B0276504A01687#code) | [Optimism Chain Real World Asset Token List](https://api.palomadex.com/etfapi/v1/etf?chain_id=op-main) | Optimism Chain Real World Asset Token Prices [AAPL Ticker Example]  (https://api.palomadex.com/etfapi/v1/customindexprice?chain_id=op-main&token_evm_address=0xdD51fDfd8a6879A195F12EB8D084b8feEE9b2D9a) |

## Real World Asset Custody
All real world assets backing all created and registered are custodied by VolumeFi Software, Inc. and Vera Labs, Inc. All tokens are Registered under United States Reg S securities rules. All purchases are expected against Dancing Banana Ltd, Caymans. All token creators are expected to abide by requirements under Reg S that prohibit purchases from United States citizens.
