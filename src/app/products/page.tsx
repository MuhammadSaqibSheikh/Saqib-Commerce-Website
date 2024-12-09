import Footer from "../components/Footer";
import LowerHeader from "../components/LowerHeader";
import NavBar from "../components/NavBar";
import Star from "../components/Star";
import TopHeader from "../components/TopHeader";

export default function Home() {
    return (
      <>
        <div className="mx-auto">
         <TopHeader/>
         <LowerHeader/>
         <NavBar/>

         <div className="mx-auto max-w-[1321px] my-9 px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold mb-8">All Products</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <Star name={"Wood"} image={"/img/item2.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item3.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item4.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item5.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item2.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item3.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item4.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item5.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item2.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item3.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item4.png"} price={"123$"} />
    <Star name={"Wood"} image={"/img/item5.png"} price={"123$"} />
  </div>
</div>





<div className="container mx-auto px-4 py-12 space-y-16">
  
  {/* Newsletter Section */}
  <section className="max-w-2xl mx-auto text-center space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
      Or Subscribe To The Newsletter
    </h2>
    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Email Address..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 uppercase"
      >
        Submit
      </button>
    </form>
  </section>

  {/* Instagram Section */}
  <section className="space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
      Follow Products And Discounts On Instagram
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item2.png" alt="item1" />
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item3.png" alt="item2" />
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item4.png" alt="item3" />
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item5.png" alt="item4" />
    </div>
  </section>
</div>

<div className="mt-40">
  <Footer/>
</div>


 
  
  
  </div>
      </>
    );
  }