import Image from "next/image";

import Button from "./components/Button";
import Carts from "./components/Carts";
import NewCart2 from "./components/NewCart2";
import { sanityFatch } from "@/sanity/lib/fatch";
import { allProducts } from "@/sanity/lib/queries";
import image from "@sanity/image-url"



type Products ={
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}




export default async function Home() {
  const products:Products [] = await sanityFatch({query:allProducts});
  return (
    <>
      <div className="mx-auto">
       

        <div className="container bg-slate-100 flex items-center justify-between max-w-7xl h- mx-auto px-9 pt-36">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full space-y-6 lg:py-20">
            <p className="text-XL md:text-xl ">WELCOME TO CHAIRY</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Best Furniture Collection for Your Interior
            </h1>

            <Button  />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img
              className="max-w-full h-auto lg:w-[80%] "
              src="/img/Product2.png"
              alt="Furniture"
            />
          </div>
        </div>

      
     


        <div className="px-4 lg:px-[80px] space-y-8">
  {/* Logo Section */}
  <div className="mx-auto w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
    <img
      className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
      src="/img/Logo2.png"
      alt="Logo 2"
    />

    <img
      className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
      src="/img/Logo3.png"
      alt="Logo 3"
    />

    <img
      className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
      src="/img/Logo4.png"
      alt="Logo 4"
    />

    <img
      className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
      src="/img/Logo5.png"
      alt="Logo 5"
    />

    <img
      className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
      src="/img/Logo6.png"
      alt="Logo 6"
    />

    <img
      className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
      src="/img/Logo7.png"
      alt="Logo 7"
    />
  </div>
</div>


 
  <Carts product={"/img/Product2.png"} heading={"Featured Products"}/>

  <NewCart2 product={"/img/Product3.png"} title={"top Categories"}/>

   
  {/* gallary section */}

  
  <div className="mt-24">
    <h1 className="text-3xl text-center font-semibold">Explore new and popular styles</h1>
  </div>
   <div className="container mx-auto px-4 py-8">
  <div className="flex flex-wrap justify-center gap-4">

    
    <div className="m-4">
    
      <img className="w-full h-auto" src="/img/item1.png" alt="Item 1" />
    </div>

   
    <div className="flex flex-col space-y-4 m-4">
      <img className="w-full h-auto" src="/img/item2.png" alt="Item 2" />
      <img className="w-full h-auto" src="/img/item3.png" alt="Item 3" />
    </div>

  
    <div className="flex flex-col space-y-4 m-4">
      <img className="w-full h-auto" src="/img/item4.png" alt="Item 4" />
      <img className="w-full h-auto" src="/img/item5.png" alt="Item 5" />
    </div>

  </div>
</div>

<div className="my-16">

  <div>
    <h1 className="text-3xl text-center font-bold">Our Products</h1>
  </div>
  <div className="my-16">
<Carts product={"/img/Product2.png"} heading={""}/>
<Carts product={"/img/Product2.png"} heading={""}/>
</div>



{/* <div>
  <Star name={"wood"} image={"/img/item2.png"} price={"123$"}/>
</div> */}
</div>
</div>

    </>
  );
}
