(() => {
  const byId = id => document.getElementById(id);
  const toggle = byId('theme-toggle');
  const updateThemeLabel = () => { const dark = document.documentElement.dataset.theme === 'dark'; toggle.setAttribute('aria-label', dark ? '切换为浅色模式' : '切换为深色模式'); toggle.textContent = dark ? '☼' : '◐'; };
  updateThemeLabel();
  toggle.addEventListener('click', () => { const value = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = value; try { localStorage.setItem('vale-appearance', value); } catch (_) {} updateThemeLabel(); });
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => byId(button.dataset.close).close()));
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } }));
  const search = byId('search-dialog'), input = byId('search-input'), results = byId('search-results'), status = byId('search-status');
  let indexPromise;
  const loadIndex = () => indexPromise ||= fetch(search.dataset.index).then(r => { if (!r.ok) throw new Error('Search unavailable'); return r.json(); }).catch(error => { indexPromise = null; throw error; });
  byId('search-open').addEventListener('click', () => { search.showModal(); input.focus(); });
  document.addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key === 'k') { event.preventDefault(); if (!search.open) search.showModal(); input.focus(); } });
  let queryVersion = 0;
  input.addEventListener('input', async () => {
    const version = ++queryVersion, query = input.value.trim().toLocaleLowerCase(); results.replaceChildren();
    if (!query) { status.textContent = '输入关键词，查找笔记。'; return; }
    status.textContent = '正在查找…';
    try {
      const pages = await loadIndex(); if (version !== queryVersion) return;
      const words = query.split(/\s+/);
      const matches = pages.filter(p => words.every(word => [p.title, p.summary, p.content, ...p.tags, ...p.categories].join(' ').toLocaleLowerCase().includes(word))).sort((a,b) => Number(b.title.toLocaleLowerCase().includes(query)) - Number(a.title.toLocaleLowerCase().includes(query)));
      status.textContent = matches.length ? `找到 ${matches.length} 篇笔记` : '没有找到结果，换个关键词试试。';
      matches.slice(0,20).forEach(p => { const link = document.createElement('a'); link.className = 'search-result'; link.href = p.url; const title = document.createElement('strong'); title.textContent = p.title; const summary = document.createElement('span'); summary.textContent = p.summary; link.append(title,summary); results.append(link); });
    } catch (_) { if (version === queryVersion) status.textContent = '搜索暂时不可用，请稍后重试。'; }
  });
  const imageDialog = byId('image-dialog'), image = imageDialog.querySelector('img');
  document.querySelectorAll('.image-link').forEach(link => link.addEventListener('click', event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); image.src = link.href; image.alt = link.querySelector('img').alt; imageDialog.showModal(); }));
  document.querySelectorAll('.prose pre').forEach(pre => { const button = document.createElement('button'); button.className = 'copy-button'; button.textContent = '复制'; button.setAttribute('aria-label','复制代码'); button.addEventListener('click', async () => { try { await navigator.clipboard.writeText(pre.querySelector('code')?.textContent || pre.textContent); button.textContent = '已复制'; } catch (_) { button.textContent = '请选中复制'; } setTimeout(() => button.textContent = '复制',1800); }); pre.append(button); });
})();
