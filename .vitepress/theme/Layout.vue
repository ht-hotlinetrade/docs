<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { watch } from 'vue'
import HtLogo from './components/HtLogo.vue'
import HtFooter from './components/HtFooter.vue'
import { APPEARANCE_COOKIE, COOKIE_DOMAIN } from './site'

const { Layout } = DefaultTheme
const { isDark } = useData()

// Переключение темы в документации сохраняем в общую cookie, как это делает основной сайт
watch(isDark, (dark) => {
  if (typeof document === 'undefined') return
  const domain = location.hostname.endsWith('hotlinetrade.net') ? `;domain=${COOKIE_DOMAIN}` : ''
  document.cookie = `${APPEARANCE_COOKIE}=${dark ? 'dark' : 'light'};path=/;max-age=31536000;SameSite=Lax${domain}`
})
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <HtLogo />
    </template>
    <template #layout-bottom>
      <HtFooter />
    </template>
  </Layout>
</template>
