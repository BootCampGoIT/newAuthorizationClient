const ukrainian = {
  title: "ukrainian",
  value: "Українська",
  mode: "Нічний режим",
  switcher: "Мова",
  buttons: {
    cancel: "Відмінити",
    save: "Зберегти",
    exitButton: "Вийти з аккаунта",
  },
  languages: [
    { name: "Українська", value: "ukrainian" },
    { name: "Русский", value: "russian" },
  ],
  months: [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ],
  navigation: {
    main: "Головна",
    signUp: "Зареєструватись",
    signIn: "Увійти",
    profile: "Профіль",
  },

  authForm: {
    email: "Електронна пошта",
    password: "Пароль",
    signUp: "Зареєструватись",
    signIn: "Увійти",
    emailExist: "Вказана електронна пошта зайнята!",
    complete: "Ви успішно зареєструвались!",
    noExist: "Вказану поштову скриньку не знайдено!",
    noCorrectPassword: "Вказаний пароль не коректний!",
    exited: "Ви успішно вийшли з аккаунта"
  },
  authValidation: {
    invalidEmail: "Вкажіть, будь-ласка, коректну поштову скриньку",
    emailRequired: "Вкажіть, будь-ласка, свою поштову скриньку",
    passwordRequired: "Вкажіть, будь-ласка, свій пароль",
    passwordMin: "Пароль має містити не менше 6 символів",
    passwordMax: "Пароль має бути не більше 16 символів",
    passwordMatches:
      "Пароль повинен містити символи латинского алфавіту, прописні та заглавні букви, а також цифри",
  },
  profileInfo: {
    title: "Профіль користувача",
    editButton: "Змінити профіль",
    exitButton: "Вийти з аккаунта",
    name: "Ім'я",
    birthday: "Дата народження",
    email: "Електронна пошта",
    phone: "Телефон",
    telegram: "Telegram",
    gitHub: "GitHub",
    noInfo: "Інформація не вказана",
    editPhoto: "Змінити фото",
    surname: "Призвіще",
    year: "року",
    placeholder: {
      firstName: "Дорошенко",
      surname: "Микита",
    },
  },
  avatarEditor: {
    chooseFile: "Оберіть файл",
    size: "Розмір",
    horizontal: "Рухати по горизонталі",
    vertical: "Рухати по вертикалі",
  },
};

export default ukrainian;
