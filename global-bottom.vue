<template>
  <div
    v-if="$nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-10 py-4"
    style="font-size: 0.62rem; color: rgba(43, 43, 43, 0.42); z-index: 20; letter-spacing: 0.08em; font-weight: 700"
  >
    <span style="display: flex; align-items: center; gap: 0.45rem">
      <img src="/brand/icon.png" alt="" style="width: 0.9rem; height: 0.9rem; object-fit: contain" />
      <span style="font-weight: 500; letter-spacing: -0.02em">Unframe</span>
      <span style="margin-left: 0.25rem; letter-spacing: 0.12em">Mitou</span>
    </span>
    <span style="display: flex; align-items: center; gap: 0.65rem">
      <i style="display: block; width: 1.8rem; height: 1px; background: linear-gradient(90deg, #7187f5, #9a80d0 48%, #df7b80)" />
      <span style="font-variant-numeric: tabular-nums">{{ String($nav.currentPage).padStart(2, '0') }}</span>
    </span>
  </div>
</template>
