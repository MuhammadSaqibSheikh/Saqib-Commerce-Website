import React from "react";
import Image from "next/image";
import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import NavBar from "../components/NavBar";


const ProductPage = () => {
  return (

    <div className="bg-gray-50">

      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Product Details */}
        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src="/img/Item2.png"
              alt="Library Stool Chair"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Library Stool Chair</h2>
            <p className="text-teal-500 text-xl font-semibold mb-4">$20.00 USD</p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat
              enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded font-semibold">
              Add To Cart
            </button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Featured Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array(5).fill().map((_, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                <img
                  src={`/images/product-${i + 1}.jpg`}
                  alt="Featured Product"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-medium text-gray-800">Library Stool Chair</h4>
                  <p className="text-teal-500 font-bold mt-2">$99</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
