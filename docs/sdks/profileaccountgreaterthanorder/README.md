# profileAccountGreaterThanOrder

### Available Operations

* [getRestOrderhistory](#getrestorderhistory) - Order Details

## getRestOrderhistory

Order Details

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestOrderhistoryResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccountGreaterThanOrder.getRestOrderhistory({
  idOrder: 479977,
}).then((res: GetRestOrderhistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetRestOrderhistoryRequest](../../models/operations/getrestorderhistoryrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetRestOrderhistoryResponse](../../models/operations/getrestorderhistoryresponse.md)>**

