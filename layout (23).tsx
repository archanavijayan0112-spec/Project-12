import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/shop/ProductCard";
import styles from "./page.module.css";

interface Props {
  searchParams: { category?: string; search?: string };
}

export default async function HomePage({ searchParams }: Props) {
  const { category, search } = await searchParams;

  const categories = await prisma.category.findMany({
    include: { _count: { select: { products: true } } },
  });

  const products = await prisma.product.findMany({
    where: {
      ...(category ? { category: { slug: category } } : {}),
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    include: { category: true },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });

  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>New arrivals · Free shipping over $75</p>
          <h1 className={styles.heroTitle}>
            Everything you need,<br />
            <span>nothing you don&apos;t.</span>
          </h1>
          <p className={styles.heroSub}>
            Curated products across every category. Quality-checked, fast-shipped.
          </p>
        </div>
        <div className={styles.heroGrid}>
          {featured.slice(0, 3).map((p) => (
            <div key={p.id} className={styles.heroCard}>
              <img src={p.images[0] || "https://via.placeholder.com/400x300"} alt={p.name} />
              <div className={styles.heroCardLabel}>{p.name}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        {/* Filters */}
        <div className={styles.filters}>
          <form method="GET" className={styles.searchBox}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              name="search"
              defaultValue={search}
              placeholder="Search products…"
              className={styles.searchInput}
            />
          </form>

          <div className={styles.categories}>
            <a href="/" className={`${styles.catBtn} ${!category ? styles.active : ""}`}>
              All
            </a>
            {categories.map((c) => (
              <a
                key={c.id}
                href={`/?category=${c.slug}`}
                className={`${styles.catBtn} ${category === c.slug ? styles.active : ""}`}
              >
                {c.name}
                <span className={styles.catCount}>{c._count.products}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Product grid */}
        {products.length === 0 ? (
          <div className={styles.empty}>
            <p>No products found.</p>
            <a href="/">Clear filters</a>
          </div>
        ) : (
          <>
            <div className={styles.sectionHeader}>
              <h2>{category ? categories.find((c) => c.slug === category)?.name : "All Products"}</h2>
              <span className={styles.count}>{products.length} items</span>
            </div>
            <div className={styles.grid}>
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
