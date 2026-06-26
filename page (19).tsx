import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import styles from "./page.module.css";

const STATUS_COLORS: Record<string, string> = {
  PENDING: "badge-warning",
  PROCESSING: "badge-accent",
  SHIPPED: "badge-accent",
  DELIVERED: "badge-success",
  CANCELLED: "badge-danger",
};

export default async function OrdersPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/orders");

  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container">
      <div className={styles.page}>
        <h1 className={styles.title}>My Orders</h1>
        {orders.length === 0 ? (
          <div className={styles.empty}>
            <p>You haven&apos;t placed any orders yet.</p>
            <Link href="/" className={styles.shopBtn}>Start shopping</Link>
          </div>
        ) : (
          <div className={styles.orders}>
            {orders.map((order) => (
              <div key={order.id} className={styles.order}>
                <div className={styles.orderHeader}>
                  <div>
                    <span className={styles.orderId}>#{order.id.slice(-8).toUpperCase()}</span>
                    <span className={styles.orderDate}>
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className={styles.orderMeta}>
                    <span className={`badge ${STATUS_COLORS[order.status] || "badge-muted"}`}>
                      {order.status}
                    </span>
                    <span className={styles.orderTotal}>{formatPrice(order.total)}</span>
                  </div>
                </div>
                <div className={styles.orderItems}>
                  {order.items.map((item) => (
                    <div key={item.id} className={styles.item}>
                      <span className={styles.itemName}>{item.product.name}</span>
                      <span className={styles.itemDetails}>
                        {item.quantity} × {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={styles.orderFooter}>
                  <span className={styles.address}>
                    {order.address}, {order.city}, {order.country} {order.postalCode}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
