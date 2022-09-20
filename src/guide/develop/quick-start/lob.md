# Run a limit order bot

Set up a limit order bot on Ethereum from Paloma by running the bash scripts below. Follow the steps here to guide you through the process.


## Prerequisites
This requires that you have a access to a node on which you can run [`palomad`](./palomad/install-palomad.md).
All scripts below, must be run on the machine that is running your Paloma node.


## Set your variables
First set the Paloma chain id you're on as well as your paloma wallet address as well as the Ethereum address that should receive the NFT

```sh
export ADDRESS=<Your Paloma Address>
export PALOMA_CHAIN_ID=<paloma chain id>
```

## Instantiate the CosmWasm contract

Run the following script using `bash`

```sh
#!/bin/bash
set -euo pipefail
set -x

CHAIN_ID="eth-main"
COMPASS_ID="1"
CONTRACT_ADDRESS="0x09e0d0509ef3d101e955fcff7a093b70bf48af5a"
METHOD="limit-order-bot" # deprecated
SMART_CONTRACT_ABI='[{"type": "event", "name": "Deposited", "inputs": [{"name": "token_id", "type": "uint256", "indexed": true}, {"name": "deposit_id", "type": "uint256", "indexed": true}, {"name": "depositor", "type": "address", "indexed": true}, {"name": "amount", "type": "uint256", "indexed": false}, {"name": "lower_tick", "type": "int24", "indexed": false}, {"name": "upper_tick", "type": "int24", "indexed": false}], "anonymous": false}, {"type": "function", "name": "deposit", "stateMutability": "payable", "inputs": [{"name": "lower_tick", "type": "int24"}, {"name": "upper_tick", "type": "int24"}, {"name": "deadline", "type": "uint256"}], "outputs": []}, {"type": "function", "name": "withdraw", "stateMutability": "nonpayable", "inputs": [{"name": "tokenId", "type": "uint256"}], "outputs": []}, {"type": "function", "name": "multiple_withdraw", "stateMutability": "nonpayable", "inputs": [{"name": "tokenIds", "type": "uint256[]"}], "outputs": []}, {"type": "function", "name": "cancel", "stateMutability": "nonpayable", "inputs": [{"name": "tokenId", "type": "uint256"}], "outputs": []}, {"type": "function", "name": "multiple_cancel", "stateMutability": "nonpayable", "inputs": [{"name": "tokenIds", "type": "uint256[]"}], "outputs": []}, {"type": "function", "name": "depositors", "stateMutability": "view", "inputs": [{"name": "arg0", "type": "uint256"}], "outputs": [{"name": "", "type": "tuple", "components": [{"name": "deposit_id", "type": "uint256"}, {"name": "lower_tick", "type": "int24"}, {"name": "liquidity", "type": "uint128"}, {"name": "depositor", "type": "address"}, {"name": "deadline", "type": "uint256"}]}]}, {"type": "function", "name": "deposit_list", "stateMutability": "view", "inputs": [{"name": "arg0", "type": "uint256"}], "outputs": [{"name": "", "type": "uint256"}]}, {"type": "function", "name": "deposit_list_size", "stateMutability": "view", "inputs": [], "outputs": [{"name": "", "type": "uint256"}]}]'
PRICE_CONTRACT="paloma1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3sac3fdu"

# Escape the ABI json.
SMART_CONTRACT_ABI="$(echo "$SMART_CONTRACT_ABI" | jq -R -s .)"

JSON="$(cat <<EOT
{
  "target_contract_info": {
    "chain_id": "$CHAIN_ID",
    "compass_id": "$COMPASS_ID",
    "contract_address": "$CONTRACT_ADDRESS",
    "method": "$METHOD",
    "smart_contract_abi": $SMART_CONTRACT_ABI
  },
  "price_contract: "$PRICE_CONTRACT"
}
EOT
)"


exec palomad tx wasm instantiate 5 \
"$JSON" \
--from "$ADDRESS" \
--fees 400ugrain \
--label "limit-order-bot" \
--chain-id ""$CHAIN_ID"
--gas auto \
-y --no-admin -b block
```