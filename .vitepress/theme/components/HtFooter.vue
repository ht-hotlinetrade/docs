<script setup lang="ts">
import { DISCORD_URL, MAIN_SITE, SUPPORT_EMAIL } from '../site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="ht-footer">
    <div class="ht-footer__inner">
      <p>© 2021–{{ year }} HotlineTrade</p>
      <nav class="ht-footer__links" aria-label="Контакты">
        <a :href="DISCORD_URL" target="_blank" rel="noopener noreferrer nofollow">Discord</a>
        <a :href="`mailto:${SUPPORT_EMAIL}`">{{ SUPPORT_EMAIL }}</a>
        <a :href="MAIN_SITE">hotlinetrade.net</a>
      </nav>
    </div>
  </footer>
</template>
