import Faq from "../components/Faq";
import Footer from "../components/Footer";
import LowerHeader from "../components/LowerHeader";
import NavBar from "../components/NavBar";
import TopHeader from "../components/TopHeader";

export default function Home() {
    return (
      <>

<TopHeader/>
<LowerHeader/>
<NavBar/>
      
<div className="container mx-auto px-4 py-8">
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Bag Section */}
    <div className="flex-grow">
      <h1 className="text-2xl font-semibold mb-6">Bag</h1>

      {/* Item 1 */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="flex gap-4">
          <img
            src="/img/item4.png"
            alt="Orange Chair"
            className="w-32 h-32 object-cover rounded-md"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold">Library Stool Chair</h2>
                <p className="text-gray-600 text-sm">Ashen Slate/Cobalt Bliss</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm">Size: L</p>
                  <p className="text-sm">Quantity: 1</p>
                </div>
              </div>
              <p className="font-semibold">MRP: $99</p>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                <i className="far fa-heart"></i> {/* Font Awesome Heart icon */}
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="far fa-trash-alt"></i> {/* Font Awesome Trash icon */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex gap-4">
          <img
            src="/img/item4.png"
            alt="Gray Chair"
            className="w-32 h-32 object-cover rounded-md"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold">Library Stool Chair</h2>
                <p className="text-gray-600 text-sm">Ashen Slate/Cobalt Bliss</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm">Size: L</p>
                  <p className="text-sm">Quantity: 1</p>
                </div>
              </div>
              <p className="font-semibold">MRP: $99</p>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                <i className="far fa-heart"></i> {/* Font Awesome Heart icon */}
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="far fa-trash-alt"></i> {/* Font Awesome Trash icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Summary Section */}
    <div className="lg:w-1/3">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">$198.00</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Delivery & Handling</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$198.00</span>
            </div>
          </div>
          <button className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600 transition-colors">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


<Footer/>

       
 
 
  
  
  
      </>
    );
  }