"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/lib/cart-store";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { data: session } = useSession();
  const count = useCart((s) => s.count());

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Shop<span>Forge</span>
        </Link>

        <div className={styles.links}>
          <Link href="/" className={styles.link}>Shop</Link>
          {session?.user && (
            <Link href="/orders" className={styles.link}>Orders</Link>
          )}
          {(session?.user as any)?.role === "ADMIN" && (
            <Link href="/admin" className={styles.link + " " + styles.admin}>Admin</Link>
          )}
        </div>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cart}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </Link>

          {session?.user ? (
            <div className={styles.user}>
              <span className={styles.name}>{session.user.name?.split(" ")[0]}</span>
              <button onClick={() => signOut()} className={styles.signout}>Sign out</button>
            </div>
          ) : (
            <Link href="/login" className={styles.signin}>Sign in</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
