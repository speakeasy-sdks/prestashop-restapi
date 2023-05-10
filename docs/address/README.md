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

## postRestAddress

If the address ID is not passed, it creates new address

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestAddressResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.address.postRestAddress({
  "distinctio": "quibusdam",
  "unde": "nulla",
  "corrupti": "illum",
}).then((res: PostRestAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
