<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->