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
  - `react-avatar-editor`
  - `react-datepicker`
  - `styled-components`
  - `react-responsive`
  - `react-transition-group`
  - `moment`
- организация базовой файловой структуры проекта:

  - каталоги / `файлы`:
    - Components / `App.js`
      - auth / `AuthForm.js`,
        - validation/ `Validator.js`
      - header / `Header.js`
      - main / `Main.js`
      - loader / `Loader.js`
      - routes / `PrivateRoutes.js`, `PublicRoutes.js`
    - pages / `HomePage.js`, `AuthPage.js`, `ProfilePage.js`
    - redux / `store.js`, `rootReducer.js`
      - auth / `authActions.js`, `AuthOperations.js`, `authReducers.js`, `AuthSelectors.js`
      - user / `userActions.js`, `userOperations.js`, `userReducers.js`, `userSelectors.js`
    - routes / `mainRoutes.js`
    - styles / `globalStyles.js`
    - `.env`

## Настройки проекта с использованием библиотеки контроля состояния компонентов пользовательского интерфейса

- конфигурирование `Store` при помощи библиотеки `@reduxjs/toolkit` (файл `store.js`)
- подключение библиотеки `redux-persist`
- настройка дефолтного `middleware`
- создание корневого редьюсера (файл `rootReducer.js`)
- подключение redux в проект при помощи библиотеки `react-redux` (файл `index.js`)

## Создание и настройка базовых стилей проекта
- создание конфигурации стилей проекта в цветовых схемах (themes / `light.js, dark.js`)
- создание объекта стилей с цветовыми схемами (themes / `index.js`)
- создание глобальных стилей проекта (только в рамках текущего проекта, без использования `modern-normalize`)
- создание кастомного хука переключения темы проекта (файл `usePersistedTheme.js`)
- подключение и использование посредством передачи контекста кастомного хука переключения темы `usePersistedTheme`.
- подключение компонента `ThemeProvider` из библиотеки `styled-components`. Передача цветовых схем в файлы со стилями, реализованых посредством использования библиотеки `styled-components`, осуществлется путем использования контекста (файл `App.js`)
- создание дефолтных стилей проекта посредством использования функции  `createGlobalStyle` из библиотеки `styled-components` (файл `globalStyles.js`)
- 
## Создание навигации проекта

- подключение библиотеки `react-router-dom` (файл `index.js`)
- создание массива элементов навигации (файл `mainRoutes.js`)
  - создание объектов со структурой, необходимой для реализации задач навигации в приложении (без использования вложенных роутов)
  - реализация задачи разделения кода (использование функции `lazy`);
- создание и настройка компонента навигации (файл `Navigation.js`)
- создание и настройка стилизованых компонетов пользовательского интерфейса (файлы `HeaderStyled.js`, `NavigationStyled.js`);

## `Backend`
