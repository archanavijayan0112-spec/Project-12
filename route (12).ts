"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from "../form.module.css";

export default function NewProductPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<{id:string;name:string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", description: "", price: "", stock: "",
    categoryId: "", images: "", featured: false,
  });

  useEffect(() => {
    fetch("/api/products")
      .then(() => {})
      .catch(() => {});
    fetch("/api/admin/products")
      .then(async (r) => {
        // Just get categories from a different endpoint
      });
    // Fetch categories directly
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          images: form.images.split("\n").map((s) => s.trim()).filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error("Failed to create product");
      toast.success("Product created!");
      router.push("/admin/products");
    } catch {
      toast.error("Failed to create product");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>New Product</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Product Name</label>
            <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
              placeholder="e.g. Wireless Headphones" required />
          </div>
          <div className={styles.field}>
            <label>Category</label>
            <select value={form.categoryId} onChange={(e) => setForm({...form, categoryId: e.target.value})} required>
              <option value="">Select category…</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>Price (USD)</label>
            <input type="number" step="0.01" min="0" value={form.price}
              onChange={(e) => setForm({...form, price: e.target.value})} placeholder="29.99" required />
          </div>
          <div className={styles.field}>
            <label>Stock Quantity</label>
            <input type="number" min="0" value={form.stock}
              onChange={(e) => setForm({...form, stock: e.target.value})} placeholder="100" required />
          </div>
        </div>
        <div className={styles.field}>
          <label>Description</label>
          <textarea value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            placeholder="Describe your product…" rows={4} required />
        </div>
        <div className={styles.field}>
          <label>Image URLs (one per line)</label>
          <textarea value={form.images}
            onChange={(e) => setForm({...form, images: e.target.value})}
            placeholder="https://images.unsplash.com/…" rows={3} />
        </div>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={form.featured}
            onChange={(e) => setForm({...form, featured: e.target.checked})} />
          Feature this product on homepage
        </label>
        <div className={styles.btnRow}>
          <button type="button" onClick={() => router.back()} className={styles.cancelBtn}>Cancel</button>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Creating…" : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
