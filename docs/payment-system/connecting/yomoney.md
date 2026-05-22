# ЮMoney
#### ЮMoney — YouTube
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/CCojFjSZoUU?si=9hGJFB2T_jKujm48"
  title="ЮMoney видео гайд (YouTube)"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>

#### ЮMoney — VK Video
<iframe
  src="https://vkvideo.ru/video_ext.php?oid=-205905941&id=456239018&hash=c296bed9437bab89&hd=3"
  width="560"
  height="315"
  title="ЮMoney видео гайд (VK)"
  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
  frameborder="0"
  allowfullscreen>
</iframe>

---

# 💳 PayPalych — подключение платёжной системы
::: info
Если оплата не проходит, проверьте:

* корректность URL уведомлений
* правильность секретного ключа
* что галочка на уведомления включена
:::
---

### ⚙️ Настройка ЮMoney

#### 1️⃣ Копирование ссылки обработчика

Перейдите в **настройки магазина** → раздел **«Платёжные настройки»** и скопируйте ссылку на обработчик уведомлений.

![](https://i.postimg.cc/k47TV3kz/image.png)

---

#### 2️⃣ Авторизация в ЮMoney

Перейдите на официальный сайт **YooMoney API** и выполните авторизацию:

👉 https://yoomoney.ru/transfer/myservices/http-notification

---

#### 3️⃣ Настройка HTTP-уведомлений

В поле **«Куда отправлять (URL сайта)»** вставьте ранее скопированную ссылку на обработчик  
и **обязательно поставьте галочку**:

☑ **Отправлять HTTP-уведомления**

![](https://i.postimg.cc/8kdVnMdW/photo-2026-01-20-21-21-52.jpg)

---

#### 4️⃣ Секретный ключ

Нажмите кнопку **«Показать секрет»**, затем:

- скопируйте сгенерированный ключ
- вставьте его в настройках магазина в поле **«Секретный ключ»**

> ⚠️ Секретный ключ должен полностью совпадать с ключом в настройках ЮMoney

---

#### 5️⃣ Указание номера кошелька

##### 5.1 Получение номера кошелька в ЮMoney
Скопируйте номер кошелька в личном кабинете ЮMoney:

![](https://i.postimg.cc/Vkj9XZ9V/image.png)

##### 5.2 Вставка номера кошелька в магазин
Вставьте скопированный номер в соответствующее поле в настройках магазина:

![](https://i.postimg.cc/6pLR82wg/image.png)

---

### ✅ Готово

После выполнения всех шагов:
- HTTP-уведомления от ЮMoney будут корректно обрабатываться
- платежи автоматически подтверждаться в магазине

Если платежи не приходят — в первую очередь проверьте:
- корректность URL обработчика
- совпадение секретного ключа
- включённую галочку **«Отправлять HTTP-уведомления»**
