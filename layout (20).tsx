.page {
  padding: 48px 0 80px;
  max-width: 800px;
}

.title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 32px;
}

.orders {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.order {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.15s;
}

.order:hover {
  border-color: var(--accent);
}

.orderHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  gap: 16px;
  flex-wrap: wrap;
}

.orderId {
  font-size: 15px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  display: block;
}

.orderDate {
  font-size: 13px;
  color: var(--text-muted);
  display: block;
  margin-top: 2px;
}

.orderMeta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.orderTotal {
  font-size: 18px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
}

.orderItems {
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.itemName {
  color: var(--text);
  font-weight: 500;
}

.itemDetails {
  color: var(--text-muted);
}

.orderFooter {
  padding: 12px 24px 16px;
  border-top: 1px solid var(--border);
}

.address {
  font-size: 13px;
  color: var(--text-dim);
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 0;
  color: var(--text-muted);
}

.shopBtn {
  padding: 12px 28px;
  background: var(--accent);
  color: white;
  border-radius: 10px;
  font-weight: 600;
  transition: background 0.15s;
}

.shopBtn:hover { background: var(--accent-hover); }
