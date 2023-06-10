# products

## Overview

REST endpoints related to products

### Available Operations

* [getRestCategoryProducts](#getrestcategoryproducts) - Faceted Search
* [getRestFeaturedproducts](#getrestfeaturedproducts) - Featured Products
* [getRestListcomments](#getrestlistcomments) - List Comments
* [getRestProductSearch](#getrestproductsearch) - Product Search
* [getRestProductdetail](#getrestproductdetail) - Product Detail
* [postRestPostcomment](#postrestpostcomment) - Post Comment

## getRestCategoryProducts

Is used for product search

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestCategoryProductsResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestCategoryProducts({
  idCategory: 384382,
  imageSize: "iure",
  page: 297534,
  q: "debitis",
  withAllImages: 56713,
  withCategoryTree: false,
}).then((res: GetRestCategoryProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetRestCategoryProductsRequest](../../models/operations/getrestcategoryproductsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetRestCategoryProductsResponse](../../models/operations/getrestcategoryproductsresponse.md)>**


## getRestFeaturedproducts

Gets featured products

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestFeaturedproductsResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestFeaturedproducts().then((res: GetRestFeaturedproductsResponse) => {
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

**Promise<[operations.GetRestFeaturedproductsResponse](../../models/operations/getrestfeaturedproductsresponse.md)>**


## getRestListcomments

List Comments

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestListcommentsResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestListcomments({
  idProduct: 963663,
  page: 272656,
}).then((res: GetRestListcommentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetRestListcommentsRequest](../../models/operations/getrestlistcommentsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetRestListcommentsResponse](../../models/operations/getrestlistcommentsresponse.md)>**


## getRestProductSearch

Is used for product search

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestProductSearchResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestProductSearch({
  resultsPerPage: 383441,
  s: "molestiae",
}).then((res: GetRestProductSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetRestProductSearchRequest](../../models/operations/getrestproductsearchrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetRestProductSearchResponse](../../models/operations/getrestproductsearchresponse.md)>**


## getRestProductdetail

Gets detail of a product. Including price, name, features and so on.

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestProductdetailResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestProductdetail({
  imageType: "minus",
  productId: 812169,
  withAllImages: 528895,
}).then((res: GetRestProductdetailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetRestProductdetailRequest](../../models/operations/getrestproductdetailrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetRestProductdetailResponse](../../models/operations/getrestproductdetailresponse.md)>**


## postRestPostcomment

Post Comment

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestPostcommentResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.postRestPostcomment({}).then((res: PostRestPostcommentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostRestPostcommentRequestBody](../../models/operations/postrestpostcommentrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostRestPostcommentResponse](../../models/operations/postrestpostcommentresponse.md)>**

