import { ProductList } from "@/components/product-list/ProductList";
import { PayPalButton } from "@/components/paypal/PayPalButton";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "prod-1",
    title:  "Stylish Everyday Pillow",
    description: "Soft, supportive, and designed with modern colors to complement any room.",
    price: 39.99,
    image: "/pilow.jpg", // Place an image named lamp.jpg in your public/ folder, or use an external URL
    currency: "USD",
  },
  {
    id: "prod-2",
    title: "Durable Travel Backpack",
    description: "Spacious and weather-resistant backpack, perfect for daily use or weekend adventures.",
    price: 89.99,
    image: "/bagpack.jpg",
    currency: "USD",
  },
  {
    id: "prod-3",
    title: "Stylish Toothbrush",
    description: "A minimalist toothbrush designed for comfort, control, and a clean aesthetic.",
    price: 9.99,
    image: "/toothbrush.jpg",
    currency: "USD",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center py-8 sm:py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 text-center">
          My Shop
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 text-center mt-2">
          Buy our favorite products securely with PayPal!
        </p>
      </header>
      <ProductList
        products={products}
        renderAction={() => <PayPalButton />}
      />
      <footer className="mt-16 text-xs text-zinc-500 dark:text-zinc-400 text-center">
        &copy; {new Date().getFullYear()} My Shop. All rights reserved.
      </footer>
    </div>
  );
}
