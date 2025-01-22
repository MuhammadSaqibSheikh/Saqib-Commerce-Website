 // This marks the file as a Client Component

import { useRouter } from "next/navigation";

type Product = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export const useAddToCart = () => {
  const router = useRouter();

  const addToCartAndCheckout = (product: Product) => {
    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as Product[];

    // Check if product already exists in cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to checkout page
    router.push("/shop");
  };

  return { addToCartAndCheckout };
};
