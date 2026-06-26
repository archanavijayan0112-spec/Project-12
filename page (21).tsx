@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --bg: #0a0a0f;
  --surface: #12121a;
  --surface-2: #1a1a26;
  --border: #2a2a3a;
  --accent: #6c63ff;
  --accent-hover: #5a52e0;
  --accent-muted: rgba(108, 99, 255, 0.15);
  --text: #f0f0ff;
  --text-muted: #8888aa;
  --text-dim: #555577;
  --success: #22c55e;
  --danger: #ef4444;
  --warning: #f59e0b;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

input, textarea, select {
  font-family: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--surface); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

/* Utilities */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.badge-accent { background: var(--accent-muted); color: var(--accent); }
.badge-success { background: rgba(34,197,94,0.15); color: var(--success); }
.badge-danger { background: rgba(239,68,68,0.15); color: var(--danger); }
.badge-warning { background: rgba(245,158,11,0.15); color: var(--warning); }
.badge-muted { background: var(--surface-2); color: var(--text-muted); }
