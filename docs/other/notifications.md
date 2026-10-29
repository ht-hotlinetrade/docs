# Прочее > Подключение уведомлений

## Discord
#### Discord Notification — YouTube
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/zPnBQn_5x7M?si=GpfwaNUaFgJMxZ8-"
  title="Discord Notification (YouTube)"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>


#### Discord Notification — VK Video
<iframe
  src="https://vkvideo.ru/video_ext.php?oid=-205905941&id=456239020&hash=19c357a585395796&hd=3"
  width="560"
  height="315"
  title="Discord Notification (VK)"
  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
  frameborder="0"
  allowfullscreen>
</iframe>

1. Переходим в канал гуда будут поступать уведомления и нажимает клавишу "настроить канал" (шестеренка)
![](https://i.postimg.cc/VL0g8Lgw/image.png)
2. Переходим в раздел "Интеграция" -> Вебхуки -> нажимаем клавишу "Новый вебхук"
![](https://i.postimg.cc/C1t8PkWx/image.png)
3. В появившемся окне нажимаем клавишу "копировать URL вебхука" (по желанию можно изменить название, картинку)
![](https://i.postimg.cc/2jb4R2dM/image.png)
4. Переходим на сайте в раздел Управление -> Настрйоки -> Уведомления и нажимаем кнопку "Создать"
5. Указываем название канала на свое усмотрение, выбираем неробходимые типы уведомлений и тип канала - Discord, после чего вставляем ранее скопирвоанный Discord вебхук
6. Нажимаем клавишу "Создать".

## Telegram
#### Telegram Notification — YouTube
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/zPnBQn_5x7M?si=GpfwaNUaFgJMxZ8-"
  title="Telegram Notification  (YouTube)"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>

#### Telegram Notification — VK Video
<iframe
  src="https://vkvideo.ru/video_ext.php?oid=-205905941&id=456239020&hash=19c357a585395796&hd=3"
  width="560"
  height="315"
  title="Telegram Notification  (VK)"
  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
  frameborder="0"
  allowfullscreen>
</iframe>

1. Создаём бота: пишем [@BotFather](https://t.me/BotFather) команду `/newbot`, задаём имя и username бота.
2. BotFather пришлёт **токен бота** вида `123456789:AAH...` — копируем его.
3. Добавляем бота в группу или канал, куда будут приходить уведомления. Для канала бота нужно сделать **администратором** с правом публикации сообщений.
4. Узнаём **Chat ID** группы/канала. Самый простой способ — добавить в группу бота [@getmyid_bot](https://t.me/getmyid_bot) (или переслать ему сообщение из канала). ID групп и каналов начинается с `-100`, например `-1001234567890`.
5. Если у группы включены **темы (топики)** и уведомления нужны в конкретную тему — узнаём ID темы: откройте любое сообщение в теме → «Копировать ссылку». Ссылка будет вида `https://t.me/c/1234567890/15/100`, где `15` — ID темы.
6. Переходим на сайте в раздел **Управление → Настройки → Уведомления** и нажимаем кнопку **«Создать»**.
7. Указываем название канала, выбираем необходимые типы уведомлений и тип канала — **Телеграм**, после чего заполняем:
   - **Telegram Bot Token** — токен из пункта 2
   - **Telegram Chat ID** — ID из пункта 4
   - **ID топика (необязательно)** — ID темы из пункта 5
8. Нажимаем клавишу **«Создать»**.

---

## Типы уведомлений

Для каждого канала можно выбрать, какие события в него отправлять:

| Тип | Когда приходит |
|---|---|
| Покупка | Пользователь купил товар |
| Перевод | Пользователь перевёл средства другому пользователю |
| Пополнение | Пользователь пополнил баланс |
| Выдача администратором | Администратор выдал товар пользователю |
| Использование промокода | Пользователь активировал промокод |
| Ежедневная статистика | Каждый день в 00:05 — сводка за прошедший день |
| Wargm: выдача товара | Выдан товар, купленный на WARGM |
| Ручное изменение баланса администратором | Администратор изменил баланс пользователя |

Можно создать несколько каналов — например, покупки в один чат, а статистику в другой.

::: tip
После создания канала его можно проверить: в списке уведомлений у канала есть действие **отправки тестового уведомления**. Если тестовое сообщение не пришло — проверьте токен/вебхук, Chat ID и права бота в группе.
:::
