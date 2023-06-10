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
  action: "provident",
  delete: 715190,
  idProduct: 844266,
  idProductAttribute: 602763,
  imageSize: "nulla",
}).then((res: GetRestCartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetRestCartRequest](../../models/operations/getrestcartrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetRestCartResponse](../../models/operations/getrestcartresponse.md)>**

