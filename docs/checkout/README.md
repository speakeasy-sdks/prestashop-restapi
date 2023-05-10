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

## postRestSetaddresscheckout

1- Set Address

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestSetaddresscheckoutResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkout.postRestSetaddresscheckout({
  "excepturi": "nisi",
  "recusandae": "temporibus",
}).then((res: PostRestSetaddresscheckoutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestSetcarriercheckout

3- Set Carrier

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestSetcarriercheckoutResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.checkout.postRestSetcarriercheckout({
  "quis": "veritatis",
}).then((res: PostRestSetcarriercheckoutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
