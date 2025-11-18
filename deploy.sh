#!/bin/bash

# Скрипт для деплоя на GitHub Pages
# Использование: ./deploy.sh

set -e

echo "🚀 Начинаю деплой на GitHub Pages..."

# Проверка git
if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен. Установите Xcode Command Line Tools:"
    echo "   xcode-select --install"
    exit 1
fi

# Инициализация git (если еще не инициализирован)
if [ ! -d .git ]; then
    echo "📦 Инициализирую git репозиторий..."
    git init
fi

# Добавление всех файлов
echo "📝 Добавляю файлы..."
git add .

# Коммит
echo "💾 Создаю коммит..."
git commit -m "Deploy to GitHub Pages: $(date '+%Y-%m-%d %H:%M:%S')" || echo "Нет изменений для коммита"

# Переименование ветки в main
git branch -M main

# Настройка remote (если еще не настроен)
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Настраиваю remote..."
    git remote add origin https://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@github.com/SevenArtQ/stroyka.git
else
    echo "🔄 Обновляю remote URL..."
    git remote set-url origin https://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@github.com/SevenArtQ/stroyka.git
fi

# Push
echo "⬆️  Отправляю изменения на GitHub..."
git push -u origin main --force || git push -u origin main

echo ""
echo "✅ Деплой завершен!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Перейдите на https://github.com/SevenArtQ/stroyka/settings/pages"
echo "2. В разделе 'Source' выберите 'GitHub Actions'"
echo "3. Сохраните изменения"
echo "4. Дождитесь завершения workflow в разделе Actions"
echo ""
echo "🌐 Сайт будет доступен по адресу:"
echo "   https://sevenartq.github.io/stroyka/"

