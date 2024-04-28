"use server"

import { scrapeAmazonProduct } from "../scrapper";

export async function scrapeAndStoreProduct (productUrl : string) {
    if(!productUrl) return ;

    try {
        const scrapeProduct = await scrapeAmazonProduct(productUrl);
        
    } catch (error:any) {
        throw new Error (`cannot fetch the product : ${error.message}`)
    }
}