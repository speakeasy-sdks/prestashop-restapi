/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetRestProductdetailRequest extends SpeakeasyBase {
    /**
     * image type can be "large" and medium
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_type" })
    imageType?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_id" })
    productId?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_all_images" })
    withAllImages?: number;
}

export class GetRestProductdetailResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
