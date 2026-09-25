<template>
  <a
    href="#main"
    class="sr-only z-[60] rounded bg-foreground px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
  >
    Skip to content
  </a>

  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>
