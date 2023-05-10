# default

### Available Operations

* [getRestBootstrap](#getrestbootstrap) - Bootstrap
* [getRestLightbootstrap](#getrestlightbootstrap) - Light Bootstrap

## getRestBootstrap

Bootstraps binshops applciation. This request is used to render the home page of the application.

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestBootstrapResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.default.getRestBootstrap({
  menuWithImages: "omnis",
}).then((res: GetRestBootstrapResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getRestLightbootstrap

Light Bootstrap

### Example Usage

```typescript
import { Binshops } from "prestashop-restapi";
import { GetRestLightbootstrapResponse } from "prestashop-restapi/dist/sdk/models/operations";

const sdk = new Binshops();

sdk.default.getRestLightbootstrap({
  menuWithImages: "nemo",
}).then((res: GetRestLightbootstrapResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
