const Keys = [
  {
    ru: 'ё', en: '`', code: 'Backquote', enShift: '~',
  },
  {
    ru: '1', en: '1', code: 'Digit1', ruShift: '!', enShift: '!',
  },
  {
    ru: '2', en: '2', code: 'Digit2', ruShift: '"', enShift: '@',
  },
  {
    ru: '3', en: '3', code: 'Digit3', ruShift: '№', enShift: '#',
  },
  {
    ru: '4', en: '4', code: 'Digit4', ruShift: ';', enShift: '$',
  },
  {
    ru: '5', en: '5', code: 'Digit5', ruShift: '%', enShift: '%',
  },
  {
    ru: '6', en: '6', code: 'Digit6', ruShift: ':', enShift: '^',
  },
  {
    ru: '7', en: '7', code: 'Digit7', ruShift: '?', enShift: '&',
  },
  {
    ru: '8', en: '8', code: 'Digit8', ruShift: '*', enShift: '*',
  },
  {
    ru: '9', en: '9', code: 'Digit9', ruShift: '(', enShift: '(',
  },
  {
    ru: '0', en: '0', code: 'Digit0', ruShift: ')', enShift: ')',
  },
  {
    ru: '-', en: '-', code: 'Minus', ruShift: '_', enShift: '_',
  },
  {
    ru: '=', en: '=', code: 'Equal', ruShift: '+', enShift: '+',
  },
  {
    ru: '←', en: '←', code: 'Backspace', isFnKey: true,
  },
  {
    ru: `\t`, en: `\t`, code: 'Tab',
  },
  {
    ru: 'й', en: 'q', code: 'KeyQ',
  },
  {
    ru: 'ц', en: 'w', code: 'KeyW',
  },
  {
    ru: 'у', en: 'e', code: 'KeyE',
  },
  {
    ru: 'к', en: 'r', code: 'KeyR',
  },
  {
    ru: 'е', en: 't', code: 'KeyT',
  },
  {
    ru: 'н', en: 'y', code: 'KeyY',
  },
  {
    ru: 'г', en: 'u', code: 'KeyU',
  },
  {
    ru: 'ш', en: 'i', code: 'KeyI',
  },
  {
    ru: 'щ', en: 'o', code: 'KeyO',
  },
  {
    ru: 'з', en: 'p', code: 'KeyP',
  },
  {
    ru: 'х', en: '[', code: 'BracketLeft', enShift: '{',
  },
  {
    ru: 'ъ', en: ']', code: 'BracketRight', enShift: '}',
  },
  {
    ru: '\\', en: '\\', code: 'Backslash', ruShift: '/', enShift: '|',
  },
  {
    ru: 'Del', en: 'Del', code: 'Delete', isFnKey: true,
  },
  {
    ru: 'CapsLock', en: 'CapsLock', code: 'CapsLock', isFnKey: true,
  },
  {
    ru: 'ф', en: 'a', code: 'KeyA',
  },
  {
    ru: 'ы', en: 's', code: 'KeyS',
  },
  {
    ru: 'в', en: 'd', code: 'KeyD',
  },
  {
    ru: 'а', en: 'f', code: 'KeyF',
  },
  {
    ru: 'п', en: 'g', code: 'KeyG',
  },
  {
    ru: 'р', en: 'h', code: 'KeyH',
  },
  {
    ru: 'о', en: 'j', code: 'KeyJ',
  },
  {
    ru: 'л', en: 'k', code: 'KeyK',
  },
  {
    ru: 'д', en: 'l', code: 'KeyL',
  },
  {
    ru: 'ж', en: ';', code: 'Semicolon', enShift: ':',
  },
  {
    ru: 'э', en: '\'', code: 'Quote', enShift: '"',
  },
  {
    ru: `\n`, en: `\n`, code: 'Enter',
  },
  {
    ru: 'Shift', en: 'Shift', code: 'ShiftLeft', isShift: true, isFnKey: true,
  },
  {
    ru: 'я', en: 'z', code: 'KeyZ',
  },
  {
    ru: 'ч', en: 'x', code: 'KeyX',
  },
  {
    ru: 'с', en: 'c', code: 'KeyC',
  },
  {
    ru: 'м', en: 'v', code: 'KeyV',
  },
  {
    ru: 'и', en: 'b', code: 'KeyB',
  },
  {
    ru: 'т', en: 'n', code: 'KeyN',
  },
  {
    ru: 'ь', en: 'm', code: 'KeyM',
  },
  {
    ru: 'б', en: ',', code: 'Comma', enShift: '<',
  },
  {
    ru: 'ю', en: '.', code: 'Period', enShift: '>',
  },
  {
    ru: '.', en: '/', code: 'Slash', ruShift: ',', enShift: '?',
  },
  {
    ru: '↑', en: '↑', code: 'ArrowUp',
  },
  {
    ru: 'Shift', en: 'Shift', code: 'ShiftRight', isShift: true, isFnKey: true,
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
    ru: '←', en: '←', code: 'ArrowLeft',
  },
  {
    ru: '↓', en: '↓', code: 'ArrowDown',
  },
  {
    ru: '→', en: '→', code: 'ArrowRight',
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
  descriptionLangSwitch.textContent = 'Переключение языка = Ctrl + Alt';
  document.body.append(section);
  const mainSection = document.querySelector('.app');
  mainSection.append(title);
  mainSection.append(textArea);
  mainSection.append(keyContainer);
  mainSection.append(descriptionOS);
  mainSection.append(descriptionLangSwitch);
};


// переменные нужные
renderLayout();
const keyContainer = document.querySelector('.container');
let language = 'ru';
let caps = false;
let shift = false;

// бэкспейс
const onBackSpaceClick = () => {
  const output = document.querySelector('.output');
  if (output === document.activeElement) {
    const textBefore = output.value.slice(0, output.selectionEnd);
    const textAfter = output.value.slice(output.selectionEnd);
    output.value = textBefore.slice(0, textBefore.length - 1) + textAfter;
    output.selectionStart = output.selectionEnd = textBefore.length - 1;
  } else {
    const text = output.value;
    output.value = text.slice(0, text.length - 1)
  }
}

const onDelBtnClick = () => {
  const output = document.querySelector('.output');
  const textBefore = output.value.slice(0, output.selectionEnd);
  console.log(textBefore);
  const textAfter = output.value.slice(output.selectionEnd);
  console.log(textAfter);
  output.value = textBefore + textAfter.slice(1);
  if (output === document.activeElement) {
    output.selectionStart = output.selectionEnd = textBefore.length;
  }
}

const addLetter = (field, btn) => {
  if (field === document.activeElement) {
    const beforeSelect = field.value.slice(0, field.selectionStart);
    const afterSelect = field.value.slice(field.selectionEnd, field.value.length)
    field.value = `${beforeSelect}${btn.textContent}${afterSelect}`;
    field.selectionStart = field.selectionEnd = beforeSelect.length + 1;
  } else {
    field.value += btn.textContent;
  }
}
// рендеринг кнопок
const renderKey = (key, lang) => {
  const keyBtn = document.createElement('button');
  keyBtn.classList.add('key');
  keyBtn.classList.add(`${key.code}`)
  keyBtn.dataset.code = key.code;
  if (key.isFnKey) {
    keyBtn.classList.add('fnKey');
  };
  keyBtn.textContent = key[lang];
  keyBtn.addEventListener('click', () => {
    const output = document.querySelector('.output');
    output.focus();
    if (!key.isFnKey) {
      addLetter(output, keyBtn);
    }
    if (key.code === 'Backspace') {
      onBackSpaceClick();
    }
    if (key.code === 'Delete') {
      onDelBtnClick();
    }
    if (key.code === 'CapsLock') {
      getCaps();
    }
    if (key.isShift) {
      !shift ? getShift() : noShift();
    }
  });
  keyContainer.append(keyBtn);
};

const renderKeys = (lan = language) => {
  localStorage.getItem('lan') ? Keys.forEach((key) => (renderKey(key, localStorage.getItem('lan')))) : Keys.forEach((key) => (renderKey(key, lan)));
}

// переключение языка
const switchCase = (evt) => {
  if (evt.ctrlKey && evt.altKey) {
    keyContainer.innerHTML = '';
    language === 'ru' ? language = 'en' : language = 'ru';
    localStorage.setItem('lan', `${language}`)
    renderKeys(language);
  }
};

// события по кнопкам настоящей клавиатуры
const typeButton = (evt) => {
  evt.preventDefault();
  const currentKey = document.querySelector(`[data-code="${evt.code}"]`);
  if (currentKey) currentKey.classList.add('active');
  const currentDataKey = Keys.find((key) => key.code === evt.code);
  if (currentDataKey && !currentDataKey.isFnKey) {
    const output = document.querySelector('.output');
    addLetter(output, currentKey);
  }
}

const upButton = (evt) => {
  const currentKey = document.querySelector(`[data-code="${evt.code}"]`);
  if (currentKey) currentKey.classList.remove('active');
}

const onCapsClick = (evt) => {
  if (evt.code === 'CapsLock') {
    getCaps();
  }
}

const onShiftUpClick = (evt) => {
  if (evt.key === 'Shift') {
    noShift();
  }
}

const onShiftDownClick = (evt) => {
  if (evt.shiftKey) {
    getShift();
    document.addEventListener('keyup', onShiftUpClick);
  }
}

function getShift() {
  const shifted = `${language}Shift`;
  keyContainer.innerHTML = '';
  Keys.forEach((key) => {
    if (key.hasOwnProperty(shifted)) {
      renderKey(key, shifted)
    } else {
      renderKey(key, language);
    }
  });
  const currentKeys = document.querySelectorAll('.key');
  currentKeys.forEach((key) => {
    if (!key.classList.contains('fnKey')) {
      key.textContent = key.textContent.toUpperCase();
    }
  });
  shift = true;
}

function noShift() {
  keyContainer.innerHTML = '';
  renderKeys(language);
  shift = false;
}

function getCaps() {
  const currentKeys = document.querySelectorAll('.key');
  if (!caps) {
    currentKeys.forEach((key) => {
      if (!key.classList.contains('fnKey')) {
        key.textContent = key.textContent.toUpperCase();
      }
    })
    document.querySelector('.CapsLock').classList.add('caps-on');
    caps = true;
  } else {
    currentKeys.forEach((key) => {
      if (!key.classList.contains('fnKey')) {
        key.textContent = key.textContent.toLowerCase();
      }
    });
    document.querySelector('.CapsLock').classList.remove('caps-on');
    caps = false;
  }
}

document.addEventListener('keydown', onCapsClick);
document.addEventListener('keydown', onShiftDownClick);

renderKeys();


document.addEventListener('keydown', switchCase);
document.addEventListener('keydown', typeButton);
document.addEventListener('keyup', upButton);
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Backspace') {
    onBackSpaceClick();
  }
});
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Delete') {
    onDelBtnClick();
  }
});


