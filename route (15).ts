import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import styles from "./page.module.css";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products</h1>
        <Link href="/admin/products/new" className={styles.addBtn}>
          + Add Product
        </Link>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span>Product</span>
          <span>Category</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Featured</span>
          <span>Actions</span>
        </div>
        {products.map((p) => (
          <div key={p.id} className={styles.tableRow}>
            <div className={styles.productCell}>
              <img
                src={p.images[0] || "https://via.placeholder.com/40"}
                alt={p.name}
                className={styles.thumb}
              />
              <span className={styles.productName}>{p.name}</span>
            </div>
            <span className="badge badge-muted">{p.category.name}</span>
            <span className={styles.price}>{formatPrice(p.price)}</span>
            <span className={p.stock === 0 ? styles.outOfStock : styles.inStock}>
              {p.stock}
            </span>
            <span>{p.featured ? "✓" : "—"}</span>
            <div className={styles.actions}>
              <Link href={`/admin/products/${p.id}`} className={styles.editBtn}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
