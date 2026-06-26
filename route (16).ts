.page { max-width: 1100px; }

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.title { font-size: 28px; font-weight: 800; }

.addBtn {
  padding: 10px 20px;
  background: var(--accent);
  color: white;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.15s;
}

.addBtn:hover { background: var(--accent-hover); }

.table {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
}

.tableHead {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 12px 20px;
  background: var(--surface-2);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--text-dim);
  gap: 12px;
}

.tableRow {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  font-size: 14px;
  align-items: center;
  gap: 12px;
  transition: background 0.1s;
}

.tableRow:hover { background: var(--surface-2); }

.productCell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.thumb {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 8px;
  background: var(--surface-2);
  flex-shrink: 0;
}

.productName {
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price { font-weight: 600; }
.inStock { color: var(--success); font-weight: 600; }
.outOfStock { color: var(--danger); font-weight: 600; }

.actions { display: flex; gap: 8px; }

.editBtn {
  padding: 5px 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  transition: all 0.15s;
}

.editBtn:hover {
  color: var(--accent);
  border-color: var(--accent);
}
