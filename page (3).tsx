"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import toast from "react-hot-toast";
import styles from "./ProductCard.module.css";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  stock: number;
  featured: boolean;
  category: { name: string };
}

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "",
      stock: product.stock,
    });
    toast.success(`${product.name} added to cart`);
  }

  return (
    <Link href={`/product/${product.slug}`} className={styles.card}>
      <div className={styles.imgWrap}>
        <img
          src={product.images[0] || "https://via.placeholder.com/400x300"}
          alt={product.name}
          className={styles.img}
        />
        {product.featured && <span className={styles.featuredBadge}>Featured</span>}
        {product.stock === 0 && <div className={styles.outOfStock}>Out of stock</div>}
      </div>
      <div className={styles.info}>
        <span className={styles.category}>{product.category.name}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.bottom}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <button
            className={styles.addBtn}
            onClick={handleAdd}
            disabled={product.stock === 0}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
