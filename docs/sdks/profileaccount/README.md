# profileAccount

## Overview

REST endpoints related to user profile section

### Available Operations

* [getRestAccountInfo](#getrestaccountinfo) - Account Info
* [postRestAccountedit](#postrestaccountedit) - New Password
* [postRestResetpasswordbyemail](#postrestresetpasswordbyemail) - Reset Pass By Email
* [postRestResetpasswordcheck](#postrestresetpasswordcheck) - 2- Check Reset Pass Code
* [postRestResetpasswordemail](#postrestresetpasswordemail) - 1- Send Reset Password Code
* [postRestResetpasswordenter](#postrestresetpasswordenter) - 3- Reset Password

## getRestAccountInfo

Gets customer account information

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestAccountInfoResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.getRestAccountInfo().then((res: GetRestAccountInfoResponse) => {
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

**Promise<[operations.GetRestAccountInfoResponse](../../models/operations/getrestaccountinforesponse.md)>**


## postRestAccountedit

New Password

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestAccounteditResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestAccountedit({}).then((res: PostRestAccounteditResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostRestAccounteditRequestBody](../../models/operations/postrestaccounteditrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostRestAccounteditResponse](../../models/operations/postrestaccounteditresponse.md)>**


## postRestResetpasswordbyemail

Reset Pass By Email

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordbyemailResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordbyemail({}).then((res: PostRestResetpasswordbyemailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PostRestResetpasswordbyemailRequestBody](../../models/operations/postrestresetpasswordbyemailrequestbody.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PostRestResetpasswordbyemailResponse](../../models/operations/postrestresetpasswordbyemailresponse.md)>**


## postRestResetpasswordcheck

2- Check Reset Pass Code

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordcheckResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordcheck({}).then((res: PostRestResetpasswordcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostRestResetpasswordcheckRequestBody](../../models/operations/postrestresetpasswordcheckrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostRestResetpasswordcheckResponse](../../models/operations/postrestresetpasswordcheckresponse.md)>**


## postRestResetpasswordemail

1- Send Reset Password Code

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordemailResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordemail({}).then((res: PostRestResetpasswordemailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostRestResetpasswordemailRequestBody](../../models/operations/postrestresetpasswordemailrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostRestResetpasswordemailResponse](../../models/operations/postrestresetpasswordemailresponse.md)>**


## postRestResetpasswordenter

3- Reset Password

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordenterResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordenter({}).then((res: PostRestResetpasswordenterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostRestResetpasswordenterRequestBody](../../models/operations/postrestresetpasswordenterrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostRestResetpasswordenterResponse](../../models/operations/postrestresetpasswordenterresponse.md)>**

