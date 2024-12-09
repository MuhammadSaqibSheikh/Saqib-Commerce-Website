import Image from "next/image";
import TopHeader from "./components/TopHeader";
import LowerHeader from "./components/LowerHeader";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Carts from "./components/Carts";
import NewCart2 from "./components/NewCart2";
import Footer from "./components/Footer";
import LowFooter from "./components/LowFooter";


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

      
     


<div className="px-4 lg:px-[80px] space-y-20"> 
  {/* Logo Section */}
  <div className="mx-auto w-full max-w-7xl flex justify-between flex-wrap gap-6">
    
        <img
       
        className="w-32 h-auto sm:w-36 md:w-40"
        src="/img/Logo2.png"
        alt="Logo 2"
        />
      
  </div>
  
  <div className="mx-auto w-full max-w-7xl flex justify-between flex-wrap gap-6">
    
        <img
       
        className="w-32 h-auto sm:w-36 md:w-40"
        src="/img/Logo2.png"
        alt="Logo 2"
        />
      
  </div>
  
  <div className="mx-auto w-full max-w-7xl flex justify-between flex-wrap gap-6">
    
        <img
       
        className="w-32 h-auto sm:w-36 md:w-40"
        src="/img/Logo2.png"
        alt="Logo 2"
        />
      
  </div>
  
  <div className="mx-auto w-full max-w-7xl flex justify-between flex-wrap gap-6">
    
        <img
       
        className="w-32 h-auto sm:w-36 md:w-40"
        src="/img/Logo2.png"
        alt="Logo 2"
        />
      
  </div>
  
  <div className="mx-auto w-full max-w-7xl flex justify-between flex-wrap gap-6">
    
        <img
       
        className="w-32 h-auto sm:w-36 md:w-40"
        src="/img/Logo2.png"
        alt="Logo 2"
        />
      
  </div>
  
  <div className="mx-auto w-full max-w-7xl flex justify-between flex-wrap gap-6">
    
        <img
       
        className="w-32 h-auto sm:w-36 md:w-40"
        src="/img/Logo2.png"
        alt="Logo 2"
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

<div className="mt-40">
  <Footer/>
</div>

</div>

</div>
<LowFooter/>
    </>
  );
}
