.btn {
  width: 100%;
  padding: 16px;
  background: var(--accent);
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  transition: background 0.15s, transform 0.1s;
}

.btn:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn:disabled {
  background: var(--surface-2);
  color: var(--text-dim);
  cursor: not-allowed;
}
