# default

### Available Operations

* [getRestBootstrap](#getrestbootstrap) - Bootstrap
* [getRestLightbootstrap](#getrestlightbootstrap) - Light Bootstrap

## getRestBootstrap

Bootstraps binshops applciation. This request is used to render the home page of the application.

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestBootstrapResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.default.getRestBootstrap({
  menuWithImages: "perferendis",
}).then((res: GetRestBootstrapResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetRestBootstrapRequest](../../models/operations/getrestbootstraprequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetRestBootstrapResponse](../../models/operations/getrestbootstrapresponse.md)>**


## getRestLightbootstrap

Light Bootstrap

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestLightbootstrapResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.default.getRestLightbootstrap({
  menuWithImages: "ipsam",
}).then((res: GetRestLightbootstrapResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetRestLightbootstrapRequest](../../models/operations/getrestlightbootstraprequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetRestLightbootstrapResponse](../../models/operations/getrestlightbootstrapresponse.md)>**

