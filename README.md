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


### [address](docs/address/README.md)

* [deleteRestAddress](docs/address/README.md#deleterestaddress) - Delete Address
* [getRestAddress](docs/address/README.md#getrestaddress) - Get Address
* [getRestAddressform](docs/address/README.md#getrestaddressform) - List avaibale countries and states
* [getRestAlladdresses](docs/address/README.md#getrestalladdresses) - All Addresses
* [postRestAddress](docs/address/README.md#postrestaddress) - Update Address

### [authentication](docs/authentication/README.md)

* [getRestLogout](docs/authentication/README.md#getrestlogout) - Logout
* [postRestLogin](docs/authentication/README.md#postrestlogin) - Login
* [postRestRegister](docs/authentication/README.md#postrestregister) - Register

### [cart](docs/cart/README.md)

* [getRestCart](docs/cart/README.md#getrestcart) - Remove a specific product from cart

### [checkout](docs/checkout/README.md)

* [getRestCarriers](docs/checkout/README.md#getrestcarriers) - 2- All Carriers
* [getRestPaymentoptions](docs/checkout/README.md#getrestpaymentoptions) - 4- Payment Options
* [postRestSetaddresscheckout](docs/checkout/README.md#postrestsetaddresscheckout) - 1- Set Address
* [postRestSetcarriercheckout](docs/checkout/README.md#postrestsetcarriercheckout) - 3- Set Carrier

### [checkoutGreaterThanPayments](docs/checkoutgreaterthanpayments/README.md)

* [getRestPsCashondelivery](docs/checkoutgreaterthanpayments/README.md#getrestpscashondelivery) - Cash on Delivery
* [getRestPsCheckpayment](docs/checkoutgreaterthanpayments/README.md#getrestpscheckpayment) - Check Payment
* [getRestPsWirepayment](docs/checkoutgreaterthanpayments/README.md#getrestpswirepayment) - Wire Payment

### [newsletterSubscription](docs/newslettersubscription/README.md)

* [getRestEmailsubscription](docs/newslettersubscription/README.md#getrestemailsubscription) - Get Conditions
* [postRestEmailsubscription](docs/newslettersubscription/README.md#postrestemailsubscription) - Email Subscription

### [products](docs/products/README.md)

* [getRestCategoryProducts](docs/products/README.md#getrestcategoryproducts) - Faceted Search
* [getRestFeaturedproducts](docs/products/README.md#getrestfeaturedproducts) - Featured Products
* [getRestListcomments](docs/products/README.md#getrestlistcomments) - List Comments
* [getRestProductSearch](docs/products/README.md#getrestproductsearch) - Product Search
* [getRestProductdetail](docs/products/README.md#getrestproductdetail) - Product Detail
* [postRestPostcomment](docs/products/README.md#postrestpostcomment) - Post Comment

### [profileAccount](docs/profileaccount/README.md)

* [getRestAccountInfo](docs/profileaccount/README.md#getrestaccountinfo) - Account Info
* [postRestAccountedit](docs/profileaccount/README.md#postrestaccountedit) - New Password
* [postRestResetpasswordbyemail](docs/profileaccount/README.md#postrestresetpasswordbyemail) - Reset Pass By Email
* [postRestResetpasswordcheck](docs/profileaccount/README.md#postrestresetpasswordcheck) - 2- Check Reset Pass Code
* [postRestResetpasswordemail](docs/profileaccount/README.md#postrestresetpasswordemail) - 1- Send Reset Password Code
* [postRestResetpasswordenter](docs/profileaccount/README.md#postrestresetpasswordenter) - 3- Reset Password

### [profileAccountGreaterThanOrder](docs/profileaccountgreaterthanorder/README.md)

* [getRestOrderhistory](docs/profileaccountgreaterthanorder/README.md#getrestorderhistory) - Order Details

### [wishlist](docs/wishlist/README.md)

* [getRestWishlist](docs/wishlist/README.md#getrestwishlist) - Rename Wishlist

### [default](docs/default/README.md)

* [getRestBootstrap](docs/default/README.md#getrestbootstrap) - Bootstrap
* [getRestLightbootstrap](docs/default/README.md#getrestlightbootstrap) - Light Bootstrap
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

