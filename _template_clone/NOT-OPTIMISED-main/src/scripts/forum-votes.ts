const storagePrefix = 'arccheats-forum-vote:';

function parseCount(value: string | null, fallback: number): number {
  const n = Number.parseInt(value ?? '', 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Local-only demo upvotes for forum sample threads (persists in sessionStorage). */
export function initForumVotes(): void {
  if (typeof document === 'undefined') return;

  document.querySelectorAll<HTMLElement>('[data-forum-vote]').forEach((root) => {
    const slug = root.getAttribute('data-post-slug');
    if (!slug) return;

    const countKey = `${storagePrefix}${slug}`;
    const votedKey = `${countKey}:voted`;
    const btn = root.querySelector<HTMLButtonElement>('[data-vote-up]');
    const countEl = root.querySelector<HTMLElement>('[data-vote-count]');
    const base = parseCount(root.getAttribute('data-upvotes'), 0);
    const storedCount = sessionStorage.getItem(countKey);
    const count = storedCount !== null ? parseCount(storedCount, base) : base;
    const voted = sessionStorage.getItem(votedKey) === '1';

    if (countEl) countEl.textContent = String(count);
    if (voted) {
      btn?.classList.add('is-upvoted');
      btn?.setAttribute('aria-pressed', 'true');
    }

    btn?.addEventListener('click', () => {
      if (sessionStorage.getItem(votedKey) === '1') return;
      const next = count + 1;
      sessionStorage.setItem(countKey, String(next));
      sessionStorage.setItem(votedKey, '1');
      if (countEl) countEl.textContent = String(next);
      btn.classList.add('is-upvoted');
      btn.setAttribute('aria-pressed', 'true');
    });
  });
}
