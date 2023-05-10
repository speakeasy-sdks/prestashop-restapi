# cart

### Available Operations

* [getRestCart](#getrestcart) - Remove a specific product from cart

## getRestCart

Remove a specific product from cart

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestCartResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.cart.getRestCart({
  action: "suscipit",
  delete: 477665,
  idProduct: 791725,
  idProductAttribute: 812169,
  imageSize: "voluptatum",
}).then((res: GetRestCartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
