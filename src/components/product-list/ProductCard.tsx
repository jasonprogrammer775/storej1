import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  children?: React.ReactNode; // For PayPal button or other actions
}

export function ProductCard({ product, children }: ProductCardProps) {
  return (
    <article
      className="flex flex-col rounded-xl bg-white dark:bg-zinc-900 shadow-md p-4 gap-4 w-full max-w-xs items-center"
      aria-labelledby={`product-title-${product.id}`}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={220}
        height={220}
        className="rounded-lg object-cover bg-zinc-100 dark:bg-zinc-800"
        priority
      />
      <h2
        id={`product-title-${product.id}`}
        className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-center"
      >
        {product.title}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-300 text-sm text-center">{product.description}</p>
      <span className="text-base font-bold text-zinc-800 dark:text-zinc-200">
        {product.price.toFixed(2)} {product.currency}
      </span>
      {children && <div className="mt-2 w-full flex justify-center">{children}</div>}
    </article>
  );
}