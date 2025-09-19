import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "HOTLINETRADE",
  description: "Документация",
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
    },
    // en: {
    //   label: 'English',
    //   lang: 'en',
    // },
  },
  themeConfig: {
    nav: [
      { text: 'Документация', link: '/docs/'  }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Платежные системы',
        items: [
          {
            text: 'Подключение ПС',
            items: [
              { text: 'YOMONEY', link: '/docs/payment-system/connecting/yomoney' },
              { text: 'FREEKASSA', link: '/docs/payment-system/connecting/freekassa' },
              { text: 'PALYCH', link: '/docs/payment-system/connecting/palych' },
              { text: 'TBANK', link: '/docs/payment-system/connecting/tbank' },
              { text: 'VTB', link: '/docs/payment-system/connecting/vtb' },
            ]
          },
        ]
      },
      {
        text: 'Сервер',
        items: [
          {
            text: 'Подключение',
            items: [
              { text: 'Выделенного / Домашнего', link: '/docs/server/connecting/vds' },
              { text: 'На панели управления', link: '/docs/server/connecting/panel' },
            ]
          },
        ]
      },
      {
        text: 'Расширенный редактор',
        items: [
          {
            text: 'CSS',
            items: [
              { text: 'Смена заднего фона карточки товара', link: '/docs/custom-editor/css/product-bg' },
            ]
          },
          {
            text: 'JS',
            items: [
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'homepage', link: 'https://hotlinetrade.net' },
      { icon: 'github', link: 'https://github.com/ht-hotlinetrade' },
      { icon: 'discord', link: 'https://discord.com/invite/hotlinetrade' },
      { icon: 'vk', link: 'https://vk.com/hotlinetrade' }
    ],

    footer: {
      message: 'All right reserved!',
      copyright: 'HOTLINETRADE.NET © 2021-present'
    }
  },
  sitemap: {
    hostname: 'https://docs.hotlinetrade.net'
  }
})
