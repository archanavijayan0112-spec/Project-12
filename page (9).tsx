import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";
import styles from "./page.module.css";

export default async function AdminDashboard() {
  const [totalOrders, totalProducts, totalUsers, revenueData] = await Promise.all([
    prisma.order.count(),
    prisma.product.count(),
    prisma.user.count(),
    prisma.order.aggregate({ _sum: { total: true } }),
  ]);

  const recentOrders = await prisma.order.findMany({
    take: 5,
    include: { user: true, items: true },
    orderBy: { createdAt: "desc" },
  });

  const stats = [
    { label: "Total Revenue", value: formatPrice(revenueData._sum.total || 0), icon: "💰" },
    { label: "Orders", value: totalOrders.toString(), icon: "📦" },
    { label: "Products", value: totalProducts.toString(), icon: "🛍️" },
    { label: "Customers", value: totalUsers.toString(), icon: "👥" },
  ];

  const STATUS_COLORS: Record<string, string> = {
    PENDING: "badge-warning", PROCESSING: "badge-accent",
    SHIPPED: "badge-accent", DELIVERED: "badge-success", CANCELLED: "badge-danger",
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.statsGrid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statIcon}>{s.icon}</span>
            <div>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Orders</h2>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <span>Order ID</span>
            <span>Customer</span>
            <span>Items</span>
            <span>Total</span>
            <span>Status</span>
            <span>Date</span>
          </div>
          {recentOrders.map((order) => (
            <div key={order.id} className={styles.tableRow}>
              <span className={styles.orderId}>#{order.id.slice(-8).toUpperCase()}</span>
              <span>{order.user.name || order.user.email}</span>
              <span>{order.items.length} item{order.items.length !== 1 ? "s" : ""}</span>
              <span className={styles.total}>{formatPrice(order.total)}</span>
              <span><span className={`badge ${STATUS_COLORS[order.status]}`}>{order.status}</span></span>
              <span className={styles.date}>{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
