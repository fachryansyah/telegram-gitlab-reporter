# Telegram Gitlab Reporter
This is source code of telegram auto reporter to group chat / private chat when someone push code to spesific repository.

### Demo
![demo](https://raw.githubusercontent.com/fachryansyah/telegram-gitlab-reporter/master/demo.jpg)

### Setup Installation
#### 1. Clone the project
```
$ git clone https://github.com/fachryansyah/telegram-gitlab-reporter.git
```
#### 2. Install prerequisite library
```
$ npm install
```
#### 3. Setup Telegram bot API & Gitlab Token
you must generate your gitlab token manually (its not getting from gitlab but from yours randomly as you want).
edit .env
```
BOT_PORT=1337
TELEGRAM_BASEURL=https://api.telegram.org/bot
TELEGRAM_APIKEY=<your-bot-api>
GITLAB_TOKEN=<your-random-token>
CHAT_ID=<your-chat-id>
```
#### 4. Start bot service
```
$ node index.js
```
