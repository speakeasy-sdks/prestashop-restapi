# checkoutGreaterThanPayments

### Available Operations

* [getRestPsCashondelivery](#getrestpscashondelivery) - Cash on Delivery
* [getRestPsCheckpayment](#getrestpscheckpayment) - Check Payment
* [getRestPsWirepayment](#getrestpswirepayment) - Wire Payment

## getRestPsCashondelivery

Cash on Delivery

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestPsCashondeliveryResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkoutGreaterThanPayments.getRestPsCashondelivery().then((res: GetRestPsCashondeliveryResponse) => {
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

**Promise<[operations.GetRestPsCashondeliveryResponse](../../models/operations/getrestpscashondeliveryresponse.md)>**


## getRestPsCheckpayment

Check Payment

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestPsCheckpaymentResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkoutGreaterThanPayments.getRestPsCheckpayment().then((res: GetRestPsCheckpaymentResponse) => {
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

**Promise<[operations.GetRestPsCheckpaymentResponse](../../models/operations/getrestpscheckpaymentresponse.md)>**


## getRestPsWirepayment

Wire Payment

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestPsWirepaymentResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkoutGreaterThanPayments.getRestPsWirepayment().then((res: GetRestPsWirepaymentResponse) => {
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

**Promise<[operations.GetRestPsWirepaymentResponse](../../models/operations/getrestpswirepaymentresponse.md)>**

