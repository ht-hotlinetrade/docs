# Выделенный сервер
Данная инструкция описывает полный процесс настройки **FTP-доступа к выделенному серверу** с использованием **FileZilla Server** и последующее подключение сервера в магазине.

---

### ⚠️ Важно перед началом

- Устанавливайте **FileZilla Server**, **НЕ FileZilla Client**
- Все действия выполняются на **выделенном сервере**
- Сервер рекомендуется настраивать от имени администратора

---

### 1️⃣ Установка FileZilla Server

1. Установите **FileZilla Server** на выделенный сервер  
2. Во время установки **ничего не меняйте** — просто нажимайте `Next` до полного завершения установки

---

### 2️⃣ Подключение к админ-панели FileZilla Server

После установки откроется окно подключения к админке.

- Ничего не изменяйте
- Нажмите кнопку **`CONNECT`**

<img src="https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2Fmj83HXBaJaPH79u2lUO2%2Fimage.png?alt=media&token=affc93a5-491c-4677-93c0-17eb363398d2" />

---

### 3️⃣ Настройка пассивного режима (PASV)

1. В верхнем меню перейдите:  
   **Edit → Settings → Passive mode settings**
2. Установите галочку **`Use the following IP`**
3. Вставьте **IP-адрес сервера**  
   ⚠️ **Только IP, без порта**
4. Нажмите **`OK`**

![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FSNuL5LwXZMtLXpVgm5Nz%2Fimage.png?alt=media&token=ce9f68f2-249a-46ac-89fd-091c624508ae)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FwxqG5iubQORxK4wOSx7Q%2Fimage.png?alt=media&token=e6c9d308-6d5e-4ddb-990f-36de1333129b)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FYQKoqu5iLK7cefJRZNCJ%2Fimage.png?alt=media&token=cf73296e-46bc-47ff-af25-c43f2df1c47e)

---

### 4️⃣ Создание FTP-пользователя

1. Перейдите в меню **Edit → Users**
2. Нажмите кнопку **`Add`**
3. Введите любой логин:
   - только латиница
   - без пробелов
4. Нажмите **`OK`**

![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FragZv4l5CrcIzVRnR42t%2Fimage.png?alt=media&token=c45e212d-4d22-4389-a71d-5edaf6f60b57)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FSSo8rHzUi1oyGAZGNRFs%2Fimage.png?alt=media&token=afbe0775-3e93-4ec7-b579-8ab940a39ace)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FnZvyTxsVSwlSYa46EDlM%2Fimage.png?alt=media&token=07739476-df0c-4980-893c-5e68a7b4efa3)

---

### 5️⃣ Настройка доступа к папкам

1. В окне пользователя перейдите во вкладку **`Shared Folders`**
2. Нажмите **`Add`** (слева)
3. Укажите **полный путь до корня сервера**
   - ❗ не до `profiles`
   - ❗ именно до корневой директории
4. После добавления **установите все галочки доступа**

![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FBtuYSxrkhvyCppxBQUV2%2Fimage.png?alt=media&token=f605c0e9-93ea-4bb0-a634-1d982f9f3a8e)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FmgBjBYsy97vy4BB28a6s%2Fimage.png?alt=media&token=95ea55e1-2a52-4c80-8d93-85993ff7c699)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2Fl0iPP5mlMna7x4Cq8DKG%2Fimage.png?alt=media&token=ec3197b5-334c-4af2-bfc8-b0ff439dbb17)

---

### 6️⃣ Установка пароля FTP-пользователя

1. Вернитесь во вкладку **`General`**
2. Установите галочку **`Password`**
3. Задайте пароль и сохраните его  
   ⚠️ **Пароль понадобится позже**

![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2Fxc2TMfT7XCiPteqD7OtA%2Fimage.png?alt=media&token=5c07cf4c-bacb-447c-9199-00a421405b67)

---

### 7️⃣ Открытие порта 21 в Firewall

1. Откройте **Пуск → Firewall**
2. Перейдите в **Правила для входящих подключений**
3. Нажмите **Создать правило**
4. Выберите **Для порта**
5. Укажите порт **21 (TCP)** → завершите создание
6. Повторите процедуру **для UDP**

![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FHudloEOenZnHOapJJJhE%2Fimage.png?alt=media&token=bd2299c3-94d1-46d0-9936-8c8877a8a14d)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FVEAVH5yV8KCaGaR7IkH4%2Fimage.png?alt=media&token=b9d48f3a-addd-47de-8aa8-1f0433478172)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FTDNa9bFyFuWibew4CcLZ%2Fimage.png?alt=media&token=de84b0a0-1f9b-46a6-90c7-9dadd345f352)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2F4QHnP9ogRhBm4eRmCSgw%2Fimage.png?alt=media&token=4c005777-5d06-4a89-8721-2803b6a8118b)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FSQ7sX8eKafn1PdujuPfT%2Fimage.png?alt=media&token=c6f1e751-3785-442e-866b-413717f9c2d1)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FPM9BsSBg8ymQA3lE3Lff%2Fimage.png?alt=media&token=c4ba2cc5-5b7f-4f6d-bd02-7c75836005e4)
![](https://2736139429-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjvo3AGQPnOqkRb0uDmnc%2Fuploads%2FC1u0GGq75LshnW7EyBoF%2Fimage.png?alt=media&token=ceda037c-4871-4441-8e67-19b237b9cf1c)

---

### 8️⃣ Добавление сервера в магазине

Перейдите в добавление сервера и заполните поля:

- **FTP Имя пользователя** — логин FTP
- **FTP Порт** — `21`
- **FTP Пароль** — ранее заданный пароль
- **FTP Адрес** — IP сервера (без порта)
- **Путь до корневой папки** — `/`
- **Путь до папки profiles** — `profiles/`
- **FTP Pasv** — включён
- **Остальные параметры** — по желанию

![](https://i.postimg.cc/05CjfX9K/image.png)
![](https://i.postimg.cc/52XtfxLB/image.png)

---

### ✅ Готово

**FTP-сервер полностью настроен и готов к работе.**  
Выделенный сервер успешно подключён к магазину.
