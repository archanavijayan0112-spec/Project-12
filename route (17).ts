import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Providers from "@/components/layout/Providers";
import Link from "next/link";
import styles from "./layout.module.css";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if ((session?.user as any)?.role !== "ADMIN") redirect("/");

  return (
    <Providers>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <Link href="/" className={styles.logo}>Shop<span>Forge</span></Link>
          <nav className={styles.nav}>
            <p className={styles.navLabel}>Management</p>
            <Link href="/admin" className={styles.navLink}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              Dashboard
            </Link>
            <Link href="/admin/products" className={styles.navLink}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
              </svg>
              Products
            </Link>
            <Link href="/admin/orders" className={styles.navLink}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
              </svg>
              Orders
            </Link>
          </nav>
        </aside>
        <main className={styles.main}>{children}</main>
      </div>
    </Providers>
  );
}
