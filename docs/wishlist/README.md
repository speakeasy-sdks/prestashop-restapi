# wishlist

### Available Operations

* [getRestWishlist](#getrestwishlist) - Rename Wishlist

## getRestWishlist

Rename Wishlist

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestWishlistResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.wishlist.getRestWishlist({
  action: "laborum",
  idWishList: 170909,
  name: "Stacy Champlin",
}).then((res: GetRestWishlistResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
