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

## postRestLogin

This API logins to prestashop

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestLoginResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.authentication.postRestLogin({
  "error": "deserunt",
  "suscipit": "iure",
}).then((res: PostRestLoginResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestRegister

Register

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestRegisterResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.authentication.postRestRegister({
  "debitis": "ipsa",
  "delectus": "tempora",
}).then((res: PostRestRegisterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
