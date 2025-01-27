export interface ObjectData{
    id: number,
    url: string,
    mainImage: {
        blue: null,
        brightness: null,
        creation_tsz: null,
        full_height: null,
        full_width: null,
        green: null,
        hex_code: null,
        hue: null,
        is_black_and_white: null,
        listing_id: number,
        listing_image_id: number,
        rank: null,
        red: null,
        saturation: null
        url_75x75: string,
        url_170x135: string,
        url_570xN: string,
        url_fullxfull: string,
    }
    title: string,
    currencyCode: string,
    price: string,
    quantity: number,
}

export interface JSONObject{
    listing_id: number | null,
    state: string,
    user_id: number | null,
    category_id: number | null,
    title: string,
    description: string,
    creation_tsz: number | null,
    ending_tsz: number | null,
    original_creation_tsz: number | null,
    last_modified_tsz: number | null,
    MainImage: {
        blue: number | null,
        brightness: number | null,
        creation_tsz: number | null,
        full_height: number | null,
        full_width: number | null,
        green: number | null,
        hex_code: number | null,
        hue: number | null,
        is_black_and_white: number | null,
        listing_id: number | null,
        listing_image_id: number | null,
        rank: number | null,
        red: number | null,
        saturation: number | null
        url_75x75: string,
        url_170x135: string,
        url_570xN: string,
        url_fullxfull: string,
    }
    currency_code: string,
    category_path: [string]
    category_path_ids: [number | null]
    featured_rank: number | null,
    file_data: string,
    has_variations: boolean,
    is_customizable: boolean,
    is_digital: boolean,
    is_private: boolean,
    is_supply: string,
    item_dimensions_unit: string,
    item_height: number | null,
    item_length: number | null,
    item_weight: number | null,
    item_weight_unit: string, 
    item_width: number | null,
    language: string,
    materials: [string],
    non_taxable: boolean,
    num_favorers: number | null,
    occasion: number | null,
    price: string,
    processing_max: number | null,
    processing_min: number | null,
    quantity: number | null,
    recipient: number | null,
    shipping_template_id: number | null,
    shop_section_id: number | null,
    should_auto_renew: boolean,
    sku: [string],
    state_tsz: number | null,
    style: number | null,
    tags: [string],
    taxonomy_id: number | null,
    taxonomy_path: [string],
    url:string,
    used_manufacturer: boolean,
    views: number | null,
    when_made: string,
    who_made: string,
}

export interface starItem{
    <Star key={i}/>
}

