try { const saved = localStorage.getItem('vale-appearance'); if (saved === 'dark' || saved === 'light') document.documentElement.dataset.theme = saved; } catch (_) {}
