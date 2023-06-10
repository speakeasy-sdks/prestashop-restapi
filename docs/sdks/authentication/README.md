# authentication

## Overview

This Section contains authentication REST endpoints

### Available Operations

* [getRestLogout](#getrestlogout) - Logout
* [postRestLogin](#postrestlogin) - Login
* [postRestRegister](#postrestregister) - Register

## getRestLogout

Logout

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestLogoutResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.authentication.getRestLogout().then((res: GetRestLogoutResponse) => {
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

**Promise<[operations.GetRestLogoutResponse](../../models/operations/getrestlogoutresponse.md)>**


## postRestLogin

This API logins to prestashop

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestLoginResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.authentication.postRestLogin({}).then((res: PostRestLoginResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PostRestLoginRequestBody](../../models/operations/postrestloginrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostRestLoginResponse](../../models/operations/postrestloginresponse.md)>**


## postRestRegister

Register

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestRegisterResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.authentication.postRestRegister({}).then((res: PostRestRegisterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PostRestRegisterRequestBody](../../models/operations/postrestregisterrequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostRestRegisterResponse](../../models/operations/postrestregisterresponse.md)>**

