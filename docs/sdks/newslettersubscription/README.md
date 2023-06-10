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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetRestEmailsubscriptionResponse](../../models/operations/getrestemailsubscriptionresponse.md)>**


## postRestEmailsubscription

Email Subscription

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestEmailsubscriptionResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.newsletterSubscription.postRestEmailsubscription({
  email: "Roselyn_Kassulke@yahoo.com",
}).then((res: PostRestEmailsubscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostRestEmailsubscriptionRequest](../../models/operations/postrestemailsubscriptionrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostRestEmailsubscriptionResponse](../../models/operations/postrestemailsubscriptionresponse.md)>**

