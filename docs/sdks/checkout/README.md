# checkout

### Available Operations

* [getRestCarriers](#getrestcarriers) - 2- All Carriers
* [getRestPaymentoptions](#getrestpaymentoptions) - 4- Payment Options
* [postRestSetaddresscheckout](#postrestsetaddresscheckout) - 1- Set Address
* [postRestSetcarriercheckout](#postrestsetcarriercheckout) - 3- Set Carrier

## getRestCarriers

2- All Carriers

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestCarriersResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkout.getRestCarriers().then((res: GetRestCarriersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetRestCarriersResponse](../../models/operations/getrestcarriersresponse.md)>**


## getRestPaymentoptions

4- Payment Options

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestPaymentoptionsResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkout.getRestPaymentoptions().then((res: GetRestPaymentoptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetRestPaymentoptionsResponse](../../models/operations/getrestpaymentoptionsresponse.md)>**


## postRestSetaddresscheckout

1- Set Address

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestSetaddresscheckoutResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkout.postRestSetaddresscheckout({}).then((res: PostRestSetaddresscheckoutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostRestSetaddresscheckoutRequestBody](../../models/operations/postrestsetaddresscheckoutrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostRestSetaddresscheckoutResponse](../../models/operations/postrestsetaddresscheckoutresponse.md)>**


## postRestSetcarriercheckout

3- Set Carrier

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestSetcarriercheckoutResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkout.postRestSetcarriercheckout({}).then((res: PostRestSetcarriercheckoutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostRestSetcarriercheckoutRequestBody](../../models/operations/postrestsetcarriercheckoutrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostRestSetcarriercheckoutResponse](../../models/operations/postrestsetcarriercheckoutresponse.md)>**

