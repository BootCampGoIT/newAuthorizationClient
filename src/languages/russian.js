const russian = {
  title: "russian",
  value: "Русский",
  mode: "Ночной режим",
  switcher: "Язык",
  buttons: {
    cancel: "Отмена",
    save: "Сохранить",
    exitButton: "Выйти из аккаунта",
  },
  languages: [
    { name: "Русский", value: "russian" },
    { name: "Українська", value: "ukrainian" },
  ],
  months: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  navigation: {
    main: "Главная",
    signUp: "Зарегистрироваться",
    signIn: "Войти",
    profile: "Профиль",
  },

  authForm: {
    email: "Электронная почта",
    password: "Пароль",
    signUp: "Зарегистрироваться",
    signIn: "Войти",
    emailExist: "Указаная електронная почта занята!",
    complete: "Вы успешно зарегистрировались!",
    noExist: "Указаной электронной почты не найдено!",
    noCorrectPassword: "Указаный пароль не коректный!",
    exited: "Вы успешно вышли из аккаунта!",
  },
  authValidation: {
    invalidEmail: "Укажите, пожалуйста, корректную электронную почту",
    emailRequired: "Укажите, пожалуйста, свою электронную почту",
    passwordRequired: "Укажите, пожалуйста, свой пароль",
    passwordMin: "Пароль должен содержать не менее чем 6 символов",
    passwordMax: "Пароль должен быть не более чем 16 символов",
    passwordMatches:
      "Пароль должен содержать символы латинского алфавита, прописные и заглавные буквы, а также цифры",
  },
  profileInfo: {
    title: "Профиль пользователя",
    editButton: "Изменить профиль",
    exitButton: "Выйти из аккаунта",
    name: "Имя",
    birthday: "Дата рождения",
    email: "Электронная почта",
    phone: "Телефон",
    telegram: "Telegram",
    gitHub: "GitHub",
    noInfo: "Информация не указана",
    editPhoto: "Изменить фото",
    surname: "Фамилия",
    year: "года",
    placeholder: {
      firstName: "Иванов",
      surname: "Никита",
    },
  },

  avatarEditor: {
    chooseFile: "Выберите файл",
    size: "Размер",
    horizontal: "Двигать по горизонтали",
    vertical: "Двигать по вертикали",
  },
};

export default russian;
