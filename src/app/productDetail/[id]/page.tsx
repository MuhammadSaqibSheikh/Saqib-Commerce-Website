

import Carts from "@/app/components/Carts";
import NewCart2 from "@/app/components/NewCart2";
import Star from "@/app/components/Star";
import { useAddToCart } from "@/app/funcation/script";
import { sanityFatch } from "@/sanity/lib/fatch"; // Your fetch function
import { useRouter } from "next/router";




type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

// Fetch product data based on dynamic route
async function getProduct(id: string): Promise<Product | null> {
  const productQuery = `
    *[_type == "products" && _id == $id][0]{
      _id,
      title,
      description,
      "image": image.asset->url,
      price
    }
  `;
  const product: Product = await sanityFatch({ query: productQuery, params: { id } });
  return product || null;
}

// Dynamic Product Page Component
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="text-center text-lg mt-20">Product not found</div>;
  }

  return (

    <>
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500" >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div className="my-16">
<Carts product={"/img/Product2.png"} heading={""}/>
<Carts product={"/img/Product2.png"} heading={""}/>
</div>
    

    </>

    
  );
}

// Generate Static Params for Dynamic Routes
export async function generateStaticParams() {
  const allProductsQuery = `
    *[_type == "products"]{
      _id
    }
  `;
  const products = await sanityFatch({ query: allProductsQuery });
  return products.map((product: Product) => ({
    id: product._id,
  }));
}
