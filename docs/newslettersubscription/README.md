# newsletterSubscription

### Available Operations

* [getRestEmailsubscription](#getrestemailsubscription) - Get Conditions
* [postRestEmailsubscription](#postrestemailsubscription) - Email Subscription

## getRestEmailsubscription

Get Conditions

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestEmailsubscriptionResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.newsletterSubscription.getRestEmailsubscription().then((res: GetRestEmailsubscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestEmailsubscription

Email Subscription

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestEmailsubscriptionResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.newsletterSubscription.postRestEmailsubscription({
  email: "Aiyana_Hills77@yahoo.com",
}).then((res: PostRestEmailsubscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
