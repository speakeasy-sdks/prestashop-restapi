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

## postRestAccountedit

New Password

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestAccounteditResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestAccountedit({
  "beatae": "commodi",
  "molestiae": "modi",
  "qui": "impedit",
}).then((res: PostRestAccounteditResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestResetpasswordbyemail

Reset Pass By Email

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordbyemailResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordbyemail({
  "esse": "ipsum",
  "excepturi": "aspernatur",
  "perferendis": "ad",
}).then((res: PostRestResetpasswordbyemailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestResetpasswordcheck

2- Check Reset Pass Code

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordcheckResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordcheck({
  "sed": "iste",
  "dolor": "natus",
  "laboriosam": "hic",
}).then((res: PostRestResetpasswordcheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestResetpasswordemail

1- Send Reset Password Code

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordemailResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordemail({
  "fuga": "in",
  "corporis": "iste",
  "iure": "saepe",
  "quidem": "architecto",
}).then((res: PostRestResetpasswordemailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestResetpasswordenter

3- Reset Password

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestResetpasswordenterResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccount.postRestResetpasswordenter({
  "reiciendis": "est",
}).then((res: PostRestResetpasswordenterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
