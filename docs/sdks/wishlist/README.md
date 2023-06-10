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
  action: "excepturi",
  idWishList: 392785,
  name: "Jake Bernier MD",
}).then((res: GetRestWishlistResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetRestWishlistRequest](../../models/operations/getrestwishlistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetRestWishlistResponse](../../models/operations/getrestwishlistresponse.md)>**

