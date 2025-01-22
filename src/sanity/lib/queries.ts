import { defineQuery } from "next-sanity";



export const allProducts = defineQuery(`
  *[_type =="products"]{
  _id,
    title,
    description,
    "image": image.asset->url,
    price
    
}
    
 `)

    export const FourProducts = defineQuery(`
       
    *[_type =="products"][0..3]{
  _id,
    title,
    description,
    "image": image.asset->url,
    price
    
}
`)