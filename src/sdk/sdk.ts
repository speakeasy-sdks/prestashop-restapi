/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Address } from "./address";
import { Authentication } from "./authentication";
import { Cart } from "./cart";
import { Checkout } from "./checkout";
import { CheckoutGreaterThanPayments } from "./checkoutgreaterthanpayments";
import { Default } from "./default";
import { NewsletterSubscription } from "./newslettersubscription";
import { Products } from "./products";
import { ProfileAccount } from "./profileaccount";
import { ProfileAccountGreaterThanOrder } from "./profileaccountgreaterthanorder";
import { Wishlist } from "./wishlist";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["http://{{website_url}}"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "1.9.0";
    genVersion = "2.37.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * PrestaShop REST API: # **Download Official Version**
 *
 * @remarks
 *
 * ## **Official version and Full PDF documentation of endpoints, explanation of business logics and full Postman doc is available on official module:**
 *
 * ### [https://addons.prestashop.com/en/website-performance/52062-rest-api-pro-version-with-fast-api-caching.html](https://addons.prestashop.com/en/website-performance/52062-rest-api-pro-version-with-fast-api-caching.html#overview)
 */
export class Binshops {
    public address: Address;
    /**
     * This Section contains authentication REST endpoints
     */
    public authentication: Authentication;
    public cart: Cart;
    public checkout: Checkout;
    public checkoutGreaterThanPayments: CheckoutGreaterThanPayments;
    public newsletterSubscription: NewsletterSubscription;
    /**
     * REST endpoints related to products
     */
    public products: Products;
    /**
     * REST endpoints related to user profile section
     */
    public profileAccount: ProfileAccount;
    public profileAccountGreaterThanOrder: ProfileAccountGreaterThanOrder;
    public wishlist: Wishlist;
    public default: Default;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.address = new Address(this.sdkConfiguration);
        this.authentication = new Authentication(this.sdkConfiguration);
        this.cart = new Cart(this.sdkConfiguration);
        this.checkout = new Checkout(this.sdkConfiguration);
        this.checkoutGreaterThanPayments = new CheckoutGreaterThanPayments(this.sdkConfiguration);
        this.newsletterSubscription = new NewsletterSubscription(this.sdkConfiguration);
        this.products = new Products(this.sdkConfiguration);
        this.profileAccount = new ProfileAccount(this.sdkConfiguration);
        this.profileAccountGreaterThanOrder = new ProfileAccountGreaterThanOrder(
            this.sdkConfiguration
        );
        this.wishlist = new Wishlist(this.sdkConfiguration);
        this.default = new Default(this.sdkConfiguration);
    }
}
