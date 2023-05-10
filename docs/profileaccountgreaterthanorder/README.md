# profileAccountGreaterThanOrder

### Available Operations

* [getRestOrderhistory](#getrestorderhistory) - Order Details

## getRestOrderhistory

Order Details

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestOrderhistoryResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.profileAccountGreaterThanOrder.getRestOrderhistory({
  idOrder: 653140,
}).then((res: GetRestOrderhistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
