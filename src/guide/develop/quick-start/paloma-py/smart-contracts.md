# Smart contracts

This is an example of uploading, instantiating and executing a smart contract.

```py
import base64
from paloma_sdk.client.lcd.api.tx import CreateTxOptions
from paloma_sdk.client.localpaloma import LocalPaloma
from paloma_sdk.core.wasm import MsgStoreCode, MsgInstantiateContract, MsgExecuteContract
from paloma_sdk.core.fee import Fee

paloma = LocalPaloma()
test1 = paloma.wallets["test1"]

# upload contract code
contract_file = open("./contract.wasm", "rb")
file_bytes = base64.b64encode(contract_file.read()).decode()
store_code = MsgStoreCode(test1.key.acc_address, file_bytes)
store_code_tx = test1.create_and_sign_tx(CreateTxOptions(msgs=[store_code], fee=Fee(2100000, "60000ugrain")))
store_code_tx_result = paloma.tx.broadcast(store_code_tx)
print(store_code_tx_result)

code_id = store_code_tx_result.logs[0].events_by_type["store_code"]["code_id"][0]

#instantiate contract
instantiate = MsgInstantiateContract(
    test1.key.acc_address,
    test1.key.acc_address,
    code_id,
    {"count": 0},
    {"ugrain": 10000000},
    False,
)
instantiate_tx = test1.create_and_sign_tx(CreateTxOptions(msgs=[instantiate]))
instantiate_tx_result = paloma.tx.broadcast(instantiate_tx)
print(instantiate_tx_result)

contract_address = instantiate_tx_result.logs[0].events_by_type[
    "instantiate_contract"
]["contract_address"][0]

#execute smart contract function
execute = MsgExecuteContract(
    test1.key.acc_address,
    contract_address,
    {"increment": {}},
    {"ugrain": 100000},
)

execute_tx = test1.create_and_sign_tx(
    CreateTxOptions(msgs=[execute], fee=Fee(1000000, Coins(ugrain=1000000)))
)

execute_tx_result = paloma.tx.broadcast(execute_tx)
print(execute_tx_result)

result = paloma.wasm.contract_query(contract_address, {"get_count": {}})
print(result)
```