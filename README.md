# Authorization. Порядок выполнения задания.

## `Frontend`

## Инициализация проекта (`npx create-react-app`)

## Подготовка проекта:

- составление плана поэтапной реализации задания
- создание предварительного макета
- уяснение структуры проекта
- выделение основных структурных элементов
- установка основных пакетов, которые будут использованы в проекте:
  - `@reduxjs/toolkit`
  - `react-redux`
  - `react-router-dom`
  - `redux-persist`
  - `axios`
  - `yup`
  - `formik`
  - `yup`
  - `react-switch`
  - `react-loader-spinner`
  - `styled-components`
  - `react-responsive`
- организация базовой файловой структуры проекта (commit: `"project file structure created"`)

  - каталоги/файлы:
    - Components / `App.js`
      - auth / `Auth.js`
      - header / `Header.js`
      - main / `Main.js`
    - pages / `HomePage.js`, `AuthPage.js`
    - redux / `store.js`, `rootReducer.js`
      - auth / `authActions.js`, `AuthOperations.js`, `authReducers.js`, `AuthSelectors.js`
    - routes / `mainRoutes.js`
    - styles / `globalStyles.js`
    - themes / `index.js`, `dark.js`, `light.js`
    - .env

## Настройки проекта с использованием библиотеки контроля состояния компонентов пользовательского интерфейса

- конфигурирование `Store` при помощи библиотеки `@reduxjs/toolkit`
- подключение библиотеки `redux-persist`
- настройка дефолтного `middleware`
- создание корневого редьюсера-заглушки (файл `rootReducer.js`)
- подключение redux в проект при помощи библиотеки `react-redux` (файл `index.js`)

## Создание и настройка базовых стилей проекта

- создание конфигурации стилей проекта в цветовых схемах (файлы `light.js, dark.js`)
- создание глобальных стилей проекта (только в рамках текущего проекта, без использования `modern-normalize`)
- создание кастомного хука переключения темы проекта (файл `usePersistedTheme.js`)
- подключение и использование посредством передачи контекста кастомного хука переключения темы `usePersistedTheme`

## Создание навигации проекта

- подключение библиотеки `react-router-dom` (файл `index.js`)
- создание массива элементов навигации (файл `mainRoutes.js`)
  - создание объектов со структурой, необходимой для реализации задач навигации в приложении (без использования вложенных роутов)
  - реализация задачи разделения кода (использование функции `lazy`);
- создание и настройка компонента навигации (файл `Navigation.js`)
- создание и настройка стилизованых компонетов пользовательского интерфейса (файлы `HeaderStyled.js`, `NavigationStyled.js`);

## `Backend`

