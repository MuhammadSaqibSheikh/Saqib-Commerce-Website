import Image from "next/image";
import TopHeader from "./compoents/TopHeader";
import LowerHeader from "./compoents/LowerHeader";
import NavBar from "./compoents/NavBar";
import Button from "./compoents/Button";
import Carts from "./compoents/Carts";
import NewCart2 from "./compoents/NewCart2";
import Footer from "./compoents/Footer";
import LowFooter from "./compoents/LowFooter";


export default function Home() {
  return (
    <>
      <div className="mx-auto">
        <TopHeader />
        <LowerHeader />
        <NavBar />

        <div className="container bg-slate-100 flex items-center justify-between max-w-7xl h- mx-auto px-9 pt-36">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full space-y-6 lg:py-20">
            <p className="text-XL md:text-xl ">WELCOME TO CHAIRY</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Best Furniture Collection for Your Interior
            </h1>

            <Button />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img
              className="max-w-full h-auto lg:w-[80%] "
              src="/img/product2.png"
              alt="Furniture"
            />
          </div>
        </div>

      
     


<div className="px-4 lg:px-[80px] space-y-20"> 
  {/* Logo Section */}
  <div className="mx-auto w-full max-w-7xl flex justify-between flex-wrap gap-6">
    {Array(6)
      .fill(null)
      .map((_, index) => (
        <img
        key={index}
        className="w-32 h-auto sm:w-36 md:w-40"
        src={`/img/logo${index + 2}.png`}
        alt={`Logo ${index + 2}`}
        />
      ))}
  </div>
      </div>

 
  <Carts product={"/img/product2.png"} heading={"Featured Products"}/>

  <NewCart2 product={"/img/product3.png"} title={"top Categories"}/>

   
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
<Carts product={"/img/product2.png"} heading={""}/>
<Carts product={"/img/product2.png"} heading={""}/>
</div>


{/* <div>
  <Star name={"wood"} image={"/img/item2.png"} price={"123$"}/>
</div> */}

<div className="mt-40">
  <Footer/>
</div>

</div>

</div>
<LowFooter/>
    </>
  );
}
