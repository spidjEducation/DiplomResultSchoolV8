## Учет доходов и расходов

**Дипломный проект, разработанный в рамках обучения на курсе Профессия Джуниор Frontend-разработчик**

### Описание

Веб-приложение для учета доходов и расходов, с использованием JS, TS и React.

### Стек

- **Frontend:**
  - React
  - Redux
  - Redux Toolkit
  - Feature Slide Design (FSD) - методология разработки, использованная в проекте
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
- **Инструменты:**
  - Docker
  - VS code
  - npm

### С помощью Docker

1. Скачайте репозиторий локально: `git clone https://github.com/spidjEducation/DiplomResultSchoolV8.git`
2. В директории `backend` переименуйте файл `.env.example` его в `.env` и заполните свое окружение (`MONGO_URI`, `JWT_SECRET`).
3. В корневой директории проекта выполните следующие команды:
   `docker build -t diplom2024 .`
   `docker run -p 3005:3005 -d diplom2024`
4. Откройте проект в браузере по адресу [http://localhost:3005].

### Автор

[Дмитрий Спиридов] - [spidj@mail.ru]
