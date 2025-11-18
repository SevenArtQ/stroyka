#!/bin/bash

# Скрипт для быстрой отправки изменений на GitHub

cd "/Users/vsevolodaleksandrovicgurenko/Documents/артема родионова /stroyka"

echo "📋 Проверяю статус git..."
git status

echo ""
echo "➕ Добавляю все изменения..."
git add .

echo ""
echo "💾 Создаю коммит..."
read -p "Введите описание изменений (или нажмите Enter для стандартного): " commit_message

if [ -z "$commit_message" ]; then
    commit_message="Обновление проекта: $(date '+%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$commit_message"

echo ""
echo "⬆️  Отправляю изменения на GitHub..."
git push

echo ""
echo "✅ Изменения отправлены!"
echo "🌐 Проверьте на GitHub: https://github.com/SevenArtQ/stroyka"

