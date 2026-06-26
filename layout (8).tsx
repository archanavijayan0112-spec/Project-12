.page { max-width: 1100px; }
.title { font-size: 28px; font-weight: 800; margin-bottom: 28px; }
.loading { color: var(--text-muted); padding: 40px 0; }

.table {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
}

.tableHead {
  display: grid;
  grid-template-columns: 1.2fr 2fr 0.8fr 1fr 1fr 1.4fr;
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
  grid-template-columns: 1.2fr 2fr 0.8fr 1fr 1fr 1.4fr;
  padding: 14px 20px;
  border-top: 1px solid var(--border);
  font-size: 14px;
  align-items: center;
  gap: 12px;
  transition: background 0.1s;
}

.tableRow:hover { background: var(--surface-2); }

.orderId { font-weight: 700; font-family: 'Syne', sans-serif; }
.total { font-weight: 600; }
.date { color: var(--text-muted); font-size: 13px; }

.customer { display: flex; flex-direction: column; gap: 2px; }
.customerName { font-weight: 500; font-size: 14px; }
.customerEmail { font-size: 12px; color: var(--text-muted); }

.statusSelect {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 6px 10px;
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s;
  width: 100%;
}

.statusSelect:focus { border-color: var(--accent); }
