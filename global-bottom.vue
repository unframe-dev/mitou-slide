<template>
  <div
    v-if="$nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-10 py-4"
    style="font-size: 0.62rem; color: rgba(43, 43, 43, 0.42); z-index: 20; letter-spacing: 0.08em; font-weight: 700"
  >
    <span style="display: flex; align-items: center; gap: 0.45rem">
      <img src="/brand/icon.png" alt="" style="width: 0.9rem; height: 0.9rem; object-fit: contain" />
      <span style="display: flex; align-items: center; gap: 1.2rem">
        <a href="https://un-fra.me" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 500; letter-spacing: -0.02em; color: #565b66; text-decoration: none" aria-label="UnframeのWebサイト">
          <span>https://un-fra.me</span>
        </a>
        <a href="https://mitoujr.un-fra.me" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 500; letter-spacing: -0.02em; color: #565b66; text-decoration: none" aria-label="発表スライド">
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3h18M4 3v13h16V3M12 16v5m-4 0 4-3 4 3M8 7h8M8 11h5" />
          </svg>
          <span>https://mitoujr.un-fra.me</span>
        </a>
      </span>
    </span>
    <span style="display: flex; align-items: center; gap: 0.65rem">
      <i style="display: block; width: 1.8rem; height: 1px; background: linear-gradient(90deg, #7187f5, #9a80d0 48%, #df7b80)" />
      <span style="font-variant-numeric: tabular-nums">{{ String($nav.currentPage).padStart(2, '0') }}</span>
    </span>
  </div>
</template>
