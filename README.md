deploy https://mi8mto.github.io/BLOG-FINAL/
json server npx json-server --watch src/db.json --port 3009

# React + Vite

init
(по списку GitHub )
git init
git add .
git remote add origin "НАШ РЕПОЗИТОРИЙ"
git push -u origin "НАША ВЕТКА"

1. npm install gh-pages --save-dev
2. в package.json в scripts после "dev" add
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist",
3. в vite.config add
   base: '/папку и именем GitHub',
4. git add .
5. git commit -m "comment"
6. git push
7. npm run deploy
8. settings gh-pages

---

Области хранения данных:

- база данных на json-server
- BFF
- redux стор

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего), стор(отображение в браузере)
- роль пользователя: БД (список ролей), BFF(сессия пользователя с ролью), стор(использование на клиенте)
- статья: БД(список статей), стор(отображение в браузере)
- комментарий: БД(список комментариев), стор(отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registed_at / role_id /
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментирии - comments: id / author_id / post_id / content / published_at

Схема состояния на BFF:

- cессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

- user: id/ login / roleId / session
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
