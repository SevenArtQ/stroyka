# 🔧 Быстрое решение

## Проблема:
Ошибка `fatal: not a git repository` означает, что git репозиторий еще не создан в этой папке.

## Решение:

Выполните команды по порядку:

```bash
cd "/Users/vsevolodaleksandrovicgurenko/Documents/артема родионова /stroyka"

# 1. Инициализация git репозитория
git init

# 2. Добавление всех файлов
git add .

# 3. Создание первого коммита
git commit -m "Initial commit: проект готов к деплою"

# 4. Переименование ветки в main
git branch -M main

# 5. Подключение к GitHub
git remote add origin https://github.com/SevenArtQ/stroyka.git

# 6. Отправка на GitHub
git push -u origin main
```

---

## Если remote уже существует:

Если получите ошибку "remote origin already exists", выполните:

```bash
git remote remove origin
git remote add origin https://github.com/SevenArtQ/stroyka.git
git push -u origin main
```

---

## Все в одной команде:

```bash
cd "/Users/vsevolodaleksandrovicgurenko/Documents/артема родионова /stroyka" && git init && git add . && git commit -m "Initial commit" && git branch -M main && git remote add origin https://github.com/SevenArtQ/stroyka.git 2>/dev/null || git remote set-url origin https://github.com/SevenArtQ/stroyka.git && git push -u origin main
```

