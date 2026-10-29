import { defineConfig } from 'vitepress'

// Тема сайта хранится в cookie `appearance` на .hotlinetrade.net (light | dark | system).
// Переносим её в ключ VitePress до отрисовки, чтобы документация открывалась в той же теме без мигания.
const syncAppearance = `;(() => {
  try {
    const match = document.cookie.match(/(?:^|; )appearance=(light|dark|system)/)
    if (match) localStorage.setItem('vitepress-theme-appearance', match[1] === 'system' ? 'auto' : match[1])
  } catch (e) {}
})()`

export default defineConfig({
  ignoreDeadLinks: true,
  title: "HOTLINETRADE",
  titleTemplate: ':title — Документация HOTLINETRADE',
  description: "Документация по магазину и панели управления HOTLINETRADE",
  lang: 'ru-RU',
  head: [
    ['script', {}, syncAppearance],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '32x32' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.bunny.net' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700&display=swap' }],
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
    ['meta', { property: 'og:site_name', content: 'HOTLINETRADE' }],
    ['meta', { property: 'og:image', content: 'https://docs.hotlinetrade.net/images/og/og-image.png' }],
  ],
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
    },
  },
  themeConfig: {
    // Логотип в стиле hotlinetrade.net, ведёт на главную документации
    siteTitle: false,
    nav: [
      { text: 'Магазин', link: '/docs/', activeMatch: '^/docs/(?!billmgr)' },
      { text: 'Заказ и панель управления', link: '/docs/billmgr/order/first', activeMatch: '^/docs/billmgr/' },
    ],

    outline: { level: [2, 3], label: 'На этой странице' },
    docFooter: { prev: 'Предыдущая', next: 'Следующая' },
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    langMenuLabel: 'Язык',
    externalLinkIcon: false,
    notFound: {
      title: 'Страница не найдена',
      quote: 'Возможно, она была перемещена или удалена.',
      linkText: 'К документации',
      linkLabel: 'Перейти к документации',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
          modal: {
            displayDetails: 'Показать подробности',
            resetButtonTitle: 'Сбросить поиск',
            backButtonTitle: 'Закрыть поиск',
            noResultsText: 'Ничего не найдено по запросу',
            footer: { selectText: 'выбрать', navigateText: 'перейти', closeText: 'закрыть' },
          },
        },
      },
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
              { text: 'PAYPALYCH', link: '/docs/payment-system/connecting/paypalych' },
              { text: 'CENT', link: '/docs/payment-system/connecting/cent' },
              { text: 'TBANK', link: '/docs/payment-system/connecting/tbank' },
              { text: 'Остальные ПС', link: '/docs/payment-system/connecting/other' },
            ]
          },
          {
            text: 'Прочее',
            items: [
              { text: 'Общие настройки ПС', link: '/docs/payment-system/other/general-settings' },
              { text: 'Засчитать платеж', link: '/docs/payment-system/other/submit-payment' },
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
          { text: 'Параметры сервера', link: '/docs/server/settings' },
        ]
      },
      {
        text: 'Товар',
        items: [
          { text: 'Создание товара и типы', link: '/docs/product/types' },
          { text: 'Кастомный файл', link: '/docs/product/custom-file' },
          { text: 'Аренда и возврат услуг', link: '/docs/product/rental' },
          {
            text: 'Авто-выдача WARGM',
            items: [
              { text: 'Подключение WARGM', link: '/docs/product/wargm/connect' },
              { text: 'Настройка товаров', link: '/docs/product/wargm/settings' },
            ]
          },
          { text: 'Подключение кастомных сетов (123new)', link: '/docs/product/123newset-connection' },
          {
            text: 'Зоны выдачи',
            items: [
              { text: 'Как они работают', link: '/docs/product/zones/info' },
            ]
          },
          {
            text: 'Webhook [Post Request]',
            items: [
              { text: 'Как они работают', link: '/docs/product/webhook/info' },
              { text: 'Дополнительная информация', link: '/docs/product/webhook/additional-info' },
            ]
          },
        ]
      },
      {
        text: 'Акции',
        items: [
          { text: 'Промокоды', link: '/docs/promo/promocodes' },
          { text: 'Скидки', link: '/docs/promo/discounts' },
          { text: 'Реферальная система', link: '/docs/promo/referral' },
          { text: 'Адвент-календарь', link: '/docs/promo/advent' },
        ]
      },
      {
        text: 'Настройки сайта',
        items: [
          { text: 'Основные и дополнительные', link: '/docs/settings/site' },
          { text: 'Дизайн, баннеры, ссылки', link: '/docs/settings/design' },
        ]
      },
      {
        text: 'Прочее',
        items: [
          {
            text: 'Смена позиции блоков',
            link: '/docs/other/change-sort-order'
          },
          {
            text: 'Просмотр/вайп корзины игрока',
            link: '/docs/other/view-wipe-player-cart'
          },
          {
            text: 'Смена клавиши открытия магазина',
            link: '/docs/other/change-keybind'
          },
          {
            text: 'Подключение уведомлений',
            link: '/docs/other/notifications'
          },
          {
            text: 'Блокировка',
            link: '/docs/other/blocking'
          },
          {
            text: 'Перевод средств',
            link: '/docs/other/transfers'
          }
        ]
      },
      {
        text: 'Расширенный редактор',
        items: [
          {
            text: 'CSS',
            items: [
              { text: 'Смена заднего фона карточки товара', link: '/docs/custom-editor/css/product-bg' },
              { text: 'Как понять какой блок редактировать?', link: '/docs/custom-editor/css/which-block' },
            ]
          },
          {
            text: 'JS',
            items: [
              { text: 'Важно перед началом использования', link: '/docs/custom-editor/js/important-before-start' },
            ]
          }
        ]
      },
      {
        text: 'Биллинг',
        items: [
          {
            text: 'Первый заказ',
            link: '/docs/billmgr/order/first'
          },
          {
            text: 'Оформление магазина',
            link: '/docs/billmgr/order/order'
          },
          {
            text: 'Подключение после оформления',
            link: '/docs/billmgr/order/connect'
          },
        ]
      },
      {
        text: 'Пользователи',
        items: [
            { text: 'Назначение сотрудником', link: '/docs/users/set-roles'},
          ]
      },
      {
        text: 'Интеграции',
        items: [
          { text: 'API магазина', link: '/docs/integrations/api' },
          { text: 'Нейросети (MCP)', link: '/docs/integrations/mcp' },
        ]
      },
      {
        text: 'Кастом страницы',
        items: [
            { text: 'Демо/гайд по использованию', link: '/docs/custom-pages/demo'},
          ]
      },
    ],

  },
  sitemap: {
    hostname: 'https://docs.hotlinetrade.net'
  }
})