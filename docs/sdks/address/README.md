# address

### Available Operations

* [deleteRestAddress](#deleterestaddress) - Delete Address
* [getRestAddress](#getrestaddress) - Get Address
* [getRestAddressform](#getrestaddressform) - List avaibale countries and states
* [getRestAlladdresses](#getrestalladdresses) - All Addresses
* [postRestAddress](#postrestaddress) - Update Address

## deleteRestAddress

Delete Address

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { DeleteRestAddressResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.address.deleteRestAddress().then((res: DeleteRestAddressResponse) => {
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

**Promise<[operations.DeleteRestAddressResponse](../../models/operations/deleterestaddressresponse.md)>**


## getRestAddress

Get Address

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestAddressResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.address.getRestAddress({
  idAddress: 548814,
}).then((res: GetRestAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetRestAddressRequest](../../models/operations/getrestaddressrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetRestAddressResponse](../../models/operations/getrestaddressresponse.md)>**


## getRestAddressform

Contains countries and states

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestAddressformResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.address.getRestAddressform().then((res: GetRestAddressformResponse) => {
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

**Promise<[operations.GetRestAddressformResponse](../../models/operations/getrestaddressformresponse.md)>**


## getRestAlladdresses

All Addresses

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestAlladdressesResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.address.getRestAlladdresses().then((res: GetRestAlladdressesResponse) => {
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

**Promise<[operations.GetRestAlladdressesResponse](../../models/operations/getrestalladdressesresponse.md)>**


## postRestAddress

If the address ID is not passed, it creates new address

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestAddressResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.address.postRestAddress({}).then((res: PostRestAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PostRestAddressRequestBody](../../models/operations/postrestaddressrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostRestAddressResponse](../../models/operations/postrestaddressresponse.md)>**

