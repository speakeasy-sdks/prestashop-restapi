# prestashop-restapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/prestashop-restapi
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/prestashop-restapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [address](docs/sdks/address/README.md)

* [deleteRestAddress](docs/sdks/address/README.md#deleterestaddress) - Delete Address
* [getRestAddress](docs/sdks/address/README.md#getrestaddress) - Get Address
* [getRestAddressform](docs/sdks/address/README.md#getrestaddressform) - List avaibale countries and states
* [getRestAlladdresses](docs/sdks/address/README.md#getrestalladdresses) - All Addresses
* [postRestAddress](docs/sdks/address/README.md#postrestaddress) - Update Address

### [authentication](docs/sdks/authentication/README.md)

* [getRestLogout](docs/sdks/authentication/README.md#getrestlogout) - Logout
* [postRestLogin](docs/sdks/authentication/README.md#postrestlogin) - Login
* [postRestRegister](docs/sdks/authentication/README.md#postrestregister) - Register

### [cart](docs/sdks/cart/README.md)

* [getRestCart](docs/sdks/cart/README.md#getrestcart) - Remove a specific product from cart

### [checkout](docs/sdks/checkout/README.md)

* [getRestCarriers](docs/sdks/checkout/README.md#getrestcarriers) - 2- All Carriers
* [getRestPaymentoptions](docs/sdks/checkout/README.md#getrestpaymentoptions) - 4- Payment Options
* [postRestSetaddresscheckout](docs/sdks/checkout/README.md#postrestsetaddresscheckout) - 1- Set Address
* [postRestSetcarriercheckout](docs/sdks/checkout/README.md#postrestsetcarriercheckout) - 3- Set Carrier

### [checkoutGreaterThanPayments](docs/sdks/checkoutgreaterthanpayments/README.md)

* [getRestPsCashondelivery](docs/sdks/checkoutgreaterthanpayments/README.md#getrestpscashondelivery) - Cash on Delivery
* [getRestPsCheckpayment](docs/sdks/checkoutgreaterthanpayments/README.md#getrestpscheckpayment) - Check Payment
* [getRestPsWirepayment](docs/sdks/checkoutgreaterthanpayments/README.md#getrestpswirepayment) - Wire Payment

### [newsletterSubscription](docs/sdks/newslettersubscription/README.md)

* [getRestEmailsubscription](docs/sdks/newslettersubscription/README.md#getrestemailsubscription) - Get Conditions
* [postRestEmailsubscription](docs/sdks/newslettersubscription/README.md#postrestemailsubscription) - Email Subscription

### [products](docs/sdks/products/README.md)

* [getRestCategoryProducts](docs/sdks/products/README.md#getrestcategoryproducts) - Faceted Search
* [getRestFeaturedproducts](docs/sdks/products/README.md#getrestfeaturedproducts) - Featured Products
* [getRestListcomments](docs/sdks/products/README.md#getrestlistcomments) - List Comments
* [getRestProductSearch](docs/sdks/products/README.md#getrestproductsearch) - Product Search
* [getRestProductdetail](docs/sdks/products/README.md#getrestproductdetail) - Product Detail
* [postRestPostcomment](docs/sdks/products/README.md#postrestpostcomment) - Post Comment

### [profileAccount](docs/sdks/profileaccount/README.md)

* [getRestAccountInfo](docs/sdks/profileaccount/README.md#getrestaccountinfo) - Account Info
* [postRestAccountedit](docs/sdks/profileaccount/README.md#postrestaccountedit) - New Password
* [postRestResetpasswordbyemail](docs/sdks/profileaccount/README.md#postrestresetpasswordbyemail) - Reset Pass By Email
* [postRestResetpasswordcheck](docs/sdks/profileaccount/README.md#postrestresetpasswordcheck) - 2- Check Reset Pass Code
* [postRestResetpasswordemail](docs/sdks/profileaccount/README.md#postrestresetpasswordemail) - 1- Send Reset Password Code
* [postRestResetpasswordenter](docs/sdks/profileaccount/README.md#postrestresetpasswordenter) - 3- Reset Password

### [profileAccountGreaterThanOrder](docs/sdks/profileaccountgreaterthanorder/README.md)

* [getRestOrderhistory](docs/sdks/profileaccountgreaterthanorder/README.md#getrestorderhistory) - Order Details

### [wishlist](docs/sdks/wishlist/README.md)

* [getRestWishlist](docs/sdks/wishlist/README.md#getrestwishlist) - Rename Wishlist

### [default](docs/sdks/default/README.md)

* [getRestBootstrap](docs/sdks/default/README.md#getrestbootstrap) - Bootstrap
* [getRestLightbootstrap](docs/sdks/default/README.md#getrestlightbootstrap) - Light Bootstrap
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

