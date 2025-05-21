import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/product";

interface ProductListProps {
  products: Product[];
  renderAction?: (product: Product) => React.ReactNode; // For PayPal button or other actions
}

export function ProductList({ products, renderAction }: ProductListProps) {
  return (
    <section
      aria-label="Product list"
      className="w-full flex flex-wrap gap-8 justify-center"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product}>
          {renderAction && renderAction(product)}
        </ProductCard>
      ))}
    </section>
  );
}