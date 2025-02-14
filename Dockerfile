# 1. Строим проект
FROM node:16 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock, если ты его используешь)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Строим проект
RUN npm run build

# 2. Настроим сервер для обслуживания
FROM nginx:alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Стартуем Nginx для обслуживания приложения
CMD ["nginx", "-g", "daemon off;"]
