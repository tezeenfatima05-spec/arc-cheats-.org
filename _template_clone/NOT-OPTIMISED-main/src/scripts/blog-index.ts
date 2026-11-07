/** Blog index topic filters + Starwind sort select. */

let blogFilterEmptyMessage = 'No articles match this filter.';

function normalizeBlogFilterKey(value: string | null): string {
  if (!value || value === 'all') return 'all';
  return value.trim().toLowerCase();
}

export function initBlogIndexFilters(emptyMessage: string) {
  blogFilterEmptyMessage = emptyMessage;

  const getSortSelectRoot = () =>
    document.getElementById('blog-sort-select')?.querySelector<HTMLElement>('[data-sw-select]');

  const getSort = () => {
    const sortRoot = document.getElementById('blog-sort-select');
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    return input?.value || 'newest';
  };

  const isBlogSortEvent = (event: Event) => {
    const sortRoot = document.getElementById('blog-sort-select');
    const root = getSortSelectRoot();
    if (!root || !sortRoot) return false;
    return event.target === root || root.contains(event.target as Node);
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    return tsB - tsA;
  };

  const apply = () => {
    const grid = document.getElementById('blog-grid');
    const emptyEl = document.getElementById('blog-empty');
    if (!grid) return;

    const activeBtn = document.querySelector<HTMLElement>(
      '[data-blog-filter][aria-pressed="true"]',
    );
    const tag = normalizeBlogFilterKey(activeBtn?.getAttribute('data-blog-filter') ?? 'all');
    const sort = getSort();
    const items = [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const cardTag = normalizeBlogFilterKey(el.getAttribute('data-tag'));
      const match = tag === 'all' || cardTag === tag;
      el.classList.toggle('hidden', !match);
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = blogFilterEmptyMessage;
    }
  };

  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  document.querySelectorAll<HTMLElement>('[data-blog-filter]').forEach((btn) => {
    if (btn.dataset.blogFilterBound === '1') return;
    btn.dataset.blogFilterBound = '1';
    btn.addEventListener('click', () => {
      document.querySelectorAll<HTMLElement>('[data-blog-filter]').forEach((b) =>
        b.setAttribute('aria-pressed', 'false'),
      );
      btn.setAttribute('aria-pressed', 'true');
      apply();
    });
  });

  const onSortChange = (event: Event) => {
    if (!document.getElementById('blog-grid')) return;
    if (!isBlogSortEvent(event)) return;
    apply();
  };

  document.addEventListener('starwind:value-change', onSortChange);

  requestAnimationFrame(apply);
  window.setTimeout(apply, 0);
}
