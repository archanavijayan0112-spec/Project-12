.page {
  min-height: 80vh;
}

/* Hero */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 24px 64px;
}

.eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

.heroTitle {
  font-size: clamp(38px, 4vw, 58px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1.5px;
  color: var(--text);
  margin-bottom: 20px;
}

.heroTitle span {
  color: var(--accent);
}

.heroSub {
  font-size: 17px;
  color: var(--text-muted);
  max-width: 400px;
  line-height: 1.7;
}

.heroGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  height: 420px;
}

.heroCard {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
}

.heroCard:first-child {
  grid-row: 1 / 3;
}

.heroCard img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.heroCard:hover img {
  transform: scale(1.04);
}

.heroCardLabel {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(10,10,15,0.85);
  backdrop-filter: blur(8px);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  border: 1px solid var(--border);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 24px);
}

/* Filters */
.filters {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 0 32px;
  flex-wrap: wrap;
}

.searchBox {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0 14px;
  height: 40px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.searchInput {
  background: none;
  border: none;
  outline: none;
  color: var(--text);
  font-size: 14px;
  width: 200px;
}

.searchInput::placeholder {
  color: var(--text-dim);
}

.categories {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.catBtn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--surface);
  border: 1px solid var(--border);
  transition: all 0.15s;
}

.catBtn:hover {
  color: var(--text);
  border-color: var(--accent);
}

.catBtn.active {
  background: var(--accent-muted);
  color: var(--accent);
  border-color: var(--accent);
}

.catCount {
  font-size: 11px;
  color: var(--text-dim);
  background: var(--surface-2);
  padding: 1px 6px;
  border-radius: 10px;
}

.sectionHeader {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 24px;
}

.sectionHeader h2 {
  font-size: 22px;
  font-weight: 700;
}

.count {
  font-size: 13px;
  color: var(--text-dim);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  padding-bottom: 40px;
}

.empty {
  text-align: center;
  padding: 80px 0;
  color: var(--text-muted);
}

.empty a {
  color: var(--accent);
  font-size: 14px;
  margin-top: 8px;
  display: block;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 40px 16px;
  }
  .heroGrid { display: none; }
}
