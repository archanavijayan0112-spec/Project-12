.page { max-width: 760px; }

.title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 32px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
}

.field input,
.field select,
.field textarea {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 11px 14px;
  color: var(--text);
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s;
  resize: vertical;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--accent);
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-dim);
}

.field select option {
  background: var(--surface-2);
}

.checkLabel {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-muted);
  cursor: pointer;
}

.checkLabel input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--accent);
}

.btnRow {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding-top: 8px;
  border-top: 1px solid var(--border);
}

.cancelBtn {
  padding: 10px 20px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: all 0.15s;
}

.cancelBtn:hover { color: var(--text); }

.submitBtn {
  padding: 10px 24px;
  background: var(--accent);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.15s;
}

.submitBtn:hover:not(:disabled) { background: var(--accent-hover); }

.submitBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}
