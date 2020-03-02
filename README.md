# HK-47
[![Discord](https://img.shields.io/discord/464822298537623562?style=flat-square)](http://dscrd.in/extremecode)
[![License](https://img.shields.io/badge/license-Apache--2.0-green?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0.txt)

> [Бот сообщества ExtremeCode](http://dscrd.in/extremecode)

HK-47 - это бот для Discord сервера, написан на JavaScript использует библиотеку [discord.js](https://discord.js.org/) и [Commando](https://github.com/discordjs/Commando) фреймворк

## Установка

### Для начала
1. Клонировать репозиторий  `git clone https://github.com/extremecodetv/HK-47.git`
2. Перейти в каталог проекта `cd ./HK-47`
3. Создать и заполнить .env файл  `cp .env.example .env`

### Docker
1. Убедиться в наличии установленного [Docker](https://www.docker.com/)
2. Собрать образ `docker build -t hk47`
3. Запустить контейнер с ботом `docker run -d hk47`

### Node.js
1. Убедиться в наличии установленного [Node.js](https://nodejs.org/en/)
2. Установить зависимости `npm i`
3. Запустить бота `npm run start`