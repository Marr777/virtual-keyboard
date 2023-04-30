const Keys = [
  {
    ru: 'ё', en: '`', code: 'Backquote', ruShift: false, enShift: '~',
  },
  {
    ru: '1', en: '1', code: 'Digit1', ruShift: '!', enShift: '!',
  },
  {
    ru: '2', en: '2', code: 'Digit2', ruShift: '"', enShift: '',
  },
  {
    ru: '3', en: '3', code: 'Digit3', ruShift: '№', enShift: '',
  },
  {
    ru: '4', en: '4', code: 'Digit4', ruShift: ';', enShift: '',
  },
  {
    ru: '5', en: '5', code: 'Digit5', ruShift: '%', enShift: '',
  },
  {
    ru: '6', en: '6', code: 'Digit6', ruShift: ':', enShift: '',
  },
  {
    ru: '7', en: '7', code: 'Digit7', ruShift: '?', enShift: '',
  },
  {
    ru: '8', en: '8', code: 'Digit8', ruShift: '*', enShift: '',
  },
  {
    ru: '9', en: '9', code: 'Digit9', ruShift: '(', enShift: '',
  },
  {
    ru: '0', en: '0', code: 'Digit0', ruShift: ')', enShift: '',
  },
  {
    ru: '-', en: '-', code: 'Minus', ruShift: '_', enShift: '',
  },
  {
    ru: '=', en: '=', code: 'Equal', ruShift: '+', enShift: '',
  },
  {
    ru: 'backspace', en: 'backspace', code: 'Backspace', isFnKey: true,
  },
  {
    ru: 'tab', en: 'tab', code: 'Tab', isFnKey: true,
  },
  {
    ru: 'й', en: 'q', code: 'KeyQ', ruShift: false, enShift: false,
  },
  {
    ru: 'ц', en: 'w', code: 'KeyW', ruShift: false, enShift: false,
  },
  {
    ru: 'у', en: 'e', code: 'KeyE', ruShift: false, enShift: false,
  },
  {
    ru: 'к', en: 'r', code: 'KeyR', ruShift: false, enShift: false,
  },
  {
    ru: 'е', en: 't', code: 'KeyT', ruShift: false, enShift: false,
  },
  {
    ru: 'н', en: 'y', code: 'KeyY', ruShift: false, enShift: false,
  },
  {
    ru: 'г', en: 'u', code: 'KeyU', ruShift: false, enShift: false,
  },
  {
    ru: 'ш', en: 'i', code: 'KeyI', ruShift: false, enShift: false,
  },
  {
    ru: 'щ', en: 'o', code: 'KeyO', ruShift: false, enShift: false,
  },
  {
    ru: 'з', en: 'p', code: 'KeyP', ruShift: false, enShift: false,
  },
  {
    ru: 'х', en: '[', code: 'BracketLeft', ruShift: false, enShift: '{',
  },
  {
    ru: 'ъ', en: ']', code: 'BracketRight', ruShift: false, enShift: '}',
  },
  {
    ru: '\\', en: '\\', code: 'Backslash', ruShift: '/', enShift: '|',
  },
  {
    ru: 'CapsLock', en: 'CapsLock', code: 'CapsLock', isFnKey: true,
  },
  {
    ru: 'ф', en: 'a', code: 'KeyA', ruShift: false, enShift: false,
  },
  {
    ru: 'ы', en: 's', code: 'KeyS', ruShift: false, enShift: false,
  },
  {
    ru: 'в', en: 'd', code: 'KeyD', ruShift: false, enShift: false,
  },
  {
    ru: 'а', en: 'f', code: 'KeyF', ruShift: false, enShift: false,
  },
  {
    ru: 'п', en: 'g', code: 'KeyG', ruShift: false, enShift: false,
  },
  {
    ru: 'р', en: 'h', code: 'KeyH', ruShift: false, enShift: false,
  },
  {
    ru: 'о', en: 'j', code: 'KeyJ', ruShift: false, enShift: false,
  },
  {
    ru: 'л', en: 'k', code: 'KeyK', ruShift: false, enShift: false,
  },
  {
    ru: 'д', en: 'l', code: 'KeyL', ruShift: false, enShift: false,
  },
  {
    ru: 'ж', en: ';', code: 'Semicolon', ruShift: false, enShift: ':',
  },
  {
    ru: 'э', en: '\'', code: 'Quote', ruShift: false, enShift: '"',
  },
  {
    ru: 'Enter', en: 'Enter', code: 'Enter', isFnKey: true, isEnterKey: true,
  },
  {
    ru: 'Shift', en: 'Shift', code: 'ShiftLeft', isFnKey: true,
  },
  {
    ru: 'я', en: 'z', code: 'KeyZ', ruShift: false, enShift: false,
  },
  {
    ru: 'ч', en: 'x', code: 'KeyX', ruShift: false, enShift: false,
  },
  {
    ru: 'с', en: 'c', code: 'KeyC', ruShift: false, enShift: false,
  },
  {
    ru: 'м', en: 'v', code: 'KeyV', ruShift: false, enShift: false,
  },
  {
    ru: 'и', en: 'b', code: 'KeyB', ruShift: false, enShift: false,
  },
  {
    ru: 'т', en: 'n', code: 'KeyN', ruShift: false, enShift: false,
  },
  {
    ru: 'ь', en: 'm', code: 'KeyM', ruShift: false, enShift: false,
  },
  {
    ru: 'б', en: ',', code: 'Comma', ruShift: false, enShift: '<',
  },
  {
    ru: 'ю', en: '.', code: 'Period', ruShift: false, enShift: '>',
  },
  {
    ru: '/', en: '/', code: 'Slash', ruShift: ',', enShift: '?',
  },
  {
    ru: 'Shift', en: 'Shift', code: 'ShiftRight', isFnKey: true,
  },
  {
    ru: 'Ctrl', en: 'Ctrl', code: 'ControlLeft', isFnKey: true,
  },
  {
    ru: 'Win', en: 'Win', code: 'MetaLeft', isFnKey: true,
  },
  {
    ru: 'Alt', en: 'Alt', code: 'AltLeft', isFnKey: true,
  },
  {
    ru: ' ', en: ' ', code: 'Space',
  },
  {
    ru: 'Alt', en: 'Alt', code: 'AltRight', isFnKey: true,
  },
  {
    ru: 'Ctrl', en: 'Ctrl', code: 'ControlRight', isFnKey: true,
  },
];

// рендер общей разметки
const renderLayout = () => {
  const section = document.createElement('section');
  const textArea = document.createElement('textarea');
  const keyContainer = document.createElement('div');
  const title = document.createElement('h1');
  const descriptionOS = document.createElement('p');
  const descriptionLangSwitch = document.createElement('p');
  title.classList.add('app__title');
  title.textContent = 'Виртуальная клавиатура';
  section.classList.add('app');
  textArea.classList.add('output');
  textArea.setAttribute('rows', '5');
  keyContainer.classList.add('container');
  descriptionOS.classList.add('app__description');
  descriptionLangSwitch.classList.add('app__description');
  descriptionOS.textContent = 'Клавиатура сделана в операционной системе Windows 10';
  descriptionLangSwitch.textContent = 'Переключение языка = Cntrl + Alt';
  document.body.append(section);
  const mainSection = document.querySelector('.app');
  mainSection.append(title);
  mainSection.append(textArea);
  mainSection.append(keyContainer);
  mainSection.append(descriptionOS);
  mainSection.append(descriptionLangSwitch);
};

renderLayout();

// переменные нужные
const keyContainer = document.querySelector('.container');
let language = 'ru';

const onBackSpaceClick = () => {
    const output = document.querySelector('.output');
    const text = output.value;

    output.value = text.slice(0, text.length - 1);
}

// рендеринг кнопок
const renderKey = (key, lang) => {
  const keyBtn = document.createElement('button');
  keyBtn.classList.add('key');
  keyBtn.classList.add(`${key.code}`)
  keyBtn.dataset.code = key.code;
  keyBtn.textContent = key[lang];
  keyBtn.addEventListener('click', () => {
    if (!key.isFnKey) {
      document.querySelector('.output').value += key[lang];
    }
    if (key.isEnterKey) {
      document.querySelector('.output').value += '\n';
    }
    if (key.code === 'Backspace') {
      onBackSpaceClick();
    }
  });
  keyContainer.append(keyBtn);
};

const renderKeys = (lan = language) => Keys.forEach((key) => (renderKey(key, lan)));

// переключение языка
const switchCase = (evt) => {
  if (evt.ctrlKey && evt.altKey) {
    keyContainer.innerHTML = '';
    language === 'ru' ? language = 'en' : language = 'ru';
    renderKeys(language);
  }
};

document.addEventListener('keydown', switchCase);

const typeButton = (evt) => {
  evt.preventDefault();
  const currentKey = document.querySelector(`[data-code="${evt.code}"]`);
  if (currentKey) currentKey.classList.add('active');
  const currentDataKey = Keys.find((key) => key.code === evt.code);
  if (currentDataKey) {
    if (!currentDataKey.isFnKey) {
      document.querySelector('.output').value += currentDataKey[language];
    }
    if (currentDataKey.isEnterKey) {
      document.querySelector('.output').value += '\n';
    }
  }
}

const upButton = (evt) => {
  const currentKey = document.querySelector(`[data-code="${evt.code}"]`);
  if (currentKey) currentKey.classList.remove('active');
}

document.addEventListener('keydown', typeButton);
document.addEventListener('keyup', upButton);
document.addEventListener('keydown', (evt) => {
  if(evt.code === 'Backspace') {
    onBackSpaceClick();
  }
})
renderKeys();



