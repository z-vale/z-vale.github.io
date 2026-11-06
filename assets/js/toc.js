// Enhance Hugo's generated links without changing their anchor destinations.
(() => {
  const nav = document.getElementById('TableOfContents');
  if (!nav) return;
  const branches = new Map();
  const setExpanded = (branch, expanded) => {
    branch.children.hidden = !expanded;
    branch.button.setAttribute('aria-expanded', String(expanded));
    branch.button.setAttribute('aria-label', `${expanded ? '收起' : '展开'} ${branch.title} 的子目录`);
    branch.button.title = expanded ? '收起子目录' : '展开子目录';
  };
  nav.querySelectorAll('li').forEach((item, index) => {
    const link = Array.from(item.children).find(child => child.tagName === 'A');
    const children = Array.from(item.children).find(child => child.tagName === 'UL');
    if (!link) return;
    const row = document.createElement('div');
    row.className = 'toc-row';
    item.insertBefore(row, link);
    if (children) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'toc-toggle';
      button.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="m6 3 5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      children.id = `vale-toc-children-${index}`;
      button.setAttribute('aria-controls', children.id);
      const branch = { button, children, title: link.textContent.trim() };
      branches.set(children, branch);
      setExpanded(branch, true);
      button.addEventListener('click', () => setExpanded(branch, children.hidden));
      row.append(button);
    } else {
      row.classList.add('toc-leaf');
    }
    row.append(link);
  });
  const tools = document.getElementById('toc-tools');
  if (tools && branches.size) {
    tools.hidden = false;
    tools.querySelectorAll('[data-toc-expand]').forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.dataset.tocExpand === 'true';
        branches.forEach(branch => setExpanded(branch, expanded));
      });
    });
  }
  const openHashBranch = () => {
    let hash;
    try { hash = decodeURIComponent(location.hash); } catch (_) { return; }
    if (!hash) return;
    const link = Array.from(nav.querySelectorAll('a')).find(item => {
      try { return decodeURIComponent(item.getAttribute('href')) === hash; } catch (_) { return false; }
    });
    if (!link) return;
    for (let parent = link.parentElement; parent && parent !== nav; parent = parent.parentElement) {
      if (branches.has(parent)) setExpanded(branches.get(parent), true);
    }
    const panel = nav.closest('details');
    if (panel) panel.open = true;
  };
  window.addEventListener('hashchange', openHashBranch);
  openHashBranch();
})();
