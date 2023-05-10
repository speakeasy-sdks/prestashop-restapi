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
  idCategory: 140350,
  imageSize: "at",
  page: 870088,
  q: "maiores",
  withAllImages: 473608,
  withCategoryTree: false,
}).then((res: GetRestCategoryProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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

## getRestListcomments

List Comments

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestListcommentsResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestListcomments({
  idProduct: 799159,
  page: 800911,
}).then((res: GetRestListcommentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getRestProductSearch

Is used for product search

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestProductSearchResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestProductSearch({
  resultsPerPage: 461479,
  s: "totam",
}).then((res: GetRestProductSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getRestProductdetail

Gets detail of a product. Including price, name, features and so on.

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestProductdetailResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.getRestProductdetail({
  imageType: "porro",
  productId: 678880,
  withAllImages: 118274,
}).then((res: GetRestProductdetailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postRestPostcomment

Post Comment

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { PostRestPostcommentResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.products.postRestPostcomment({
  "officia": "occaecati",
  "fugit": "deleniti",
  "hic": "optio",
}).then((res: PostRestPostcommentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
