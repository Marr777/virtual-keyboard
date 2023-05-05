import { Keys, renderLayout } from './keys.js';

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
    output.value = text.slice(0, text.length - 1);
  }
};

const onDelBtnClick = () => {
  const output = document.querySelector('.output');
  const textBefore = output.value.slice(0, output.selectionEnd);
  const textAfter = output.value.slice(output.selectionEnd);
  output.value = textBefore + textAfter.slice(1);
  if (output === document.activeElement) {
    output.selectionStart = output.selectionEnd = textBefore.length;
  }
};

const addLetter = (field, btn) => {
  if (field === document.activeElement) {
    const beforeSelect = field.value.slice(0, field.selectionStart);
    const afterSelect = field.value.slice(field.selectionEnd, field.value.length);
    field.value = `${beforeSelect}${btn.textContent}${afterSelect}`;
    field.selectionStart = field.selectionEnd = beforeSelect.length + 1;
  } else {
    field.value += btn.textContent;
  }
};

const onArrowClick = (key) => {
  const output = document.querySelector('.output');
  output.focus();
  if (key.code === 'ArrowLeft') {
    output.selectionStart = output.selectionEnd = output.selectionStart - 1;
  }
  if (key.code === 'ArrowRight') {
    output.selectionStart = output.selectionEnd = output.selectionStart + 1;
  }
  if (key.code === 'ArrowUp') {
    const currentPosition = output.selectionStart;

    let newPosition = currentPosition;
    while (newPosition > 0 && output.value[newPosition - 1] !== '\n') {
      newPosition--;
    }

    if (newPosition !== 0) {
      while (newPosition > 0 && output.value[newPosition - 1] === '\n') {
        newPosition--;
      }
      output.selectionStart = output.selectionEnd = newPosition;
    }
  }
  if (key.code === 'ArrowDown') {
    const currentPosition = output.selectionStart;

    let newPosition = currentPosition;
    while (newPosition < output.value.length && output.value[newPosition] !== '\n') {
      newPosition++;
    }
    while (newPosition < output.value.length && output.value[newPosition] === '\n') {
      newPosition++;
    }

    if (newPosition !== currentPosition) {
      const newLinePosition = newPosition;
      while (newPosition < output.value.length && output.value[newPosition] !== '\n') {
        newPosition++;
      }
      output.selectionStart = output.selectionEnd = newLinePosition;
    }
  }
};

const onArrowBtnClick = (evt) => {
  onArrowClick(evt);
};

document.addEventListener('keydown', onArrowBtnClick);

// рендеринг кнопок
const renderKey = (key, lang) => {
  const keyBtn = document.createElement('button');
  keyBtn.classList.add('key');
  keyBtn.classList.add(`${key.code}`);
  keyBtn.dataset.code = key.code;
  if (key.isFnKey) {
    keyBtn.classList.add('fnKey');
  }
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
    if (key.isArrow) {
      onArrowClick(key);
    }
  });
  keyContainer.append(keyBtn);
};

const renderKeys = (lan = language) => {
  localStorage.getItem('lan') ? Keys.forEach((key) => (renderKey(key, localStorage.getItem('lan')))) : Keys.forEach((key) => (renderKey(key, lan)));
};

// переключение языка
const switchCase = (evt) => {
  if (evt.ctrlKey && evt.altKey) {
    keyContainer.innerHTML = '';
    language === 'ru' ? language = 'en' : language = 'ru';
    localStorage.setItem('lan', `${language}`);
    renderKeys(language);
    if (caps) {
      document.querySelectorAll('.key').forEach((key) => {
        if (!key.classList.contains('fnKey')) {
          key.textContent = key.textContent.toUpperCase();
          document.querySelector('.CapsLock').classList.add('caps-on');
        }
      });
    }
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
};

const upButton = (evt) => {
  const currentKey = document.querySelector(`[data-code="${evt.code}"]`);
  if (currentKey) currentKey.classList.remove('active');
};

const onCapsClick = (evt) => {
  if (evt.code === 'CapsLock') {
    getCaps();
  }
};

const onShiftUpClick = (evt) => {
  if (evt.key === 'Shift') {
    noShift();
  }
};

const onShiftDownClick = (evt) => {
  if (evt.shiftKey) {
    getShift();
    document.addEventListener('keyup', onShiftUpClick);
  }
};

function getShift() {
  const shifted = `${language}Shift`;
  keyContainer.innerHTML = '';
  Keys.forEach((key) => {
    if (key.hasOwnProperty(shifted)) {
      renderKey(key, shifted);
    } else {
      localStorage.getItem('lan') ? renderKey(key, localStorage.getItem('lan')) : renderKey(key, language);
    }
  });
  const currentKeys = document.querySelectorAll('.key');
  currentKeys.forEach((key) => {
    if (!key.classList.contains('fnKey')) {
      caps
        ? key.textContent = key.textContent.toLowerCase()
        : key.textContent = key.textContent.toUpperCase();
    }
  });
  if (caps) document.querySelector('.CapsLock').classList.add('caps-on');
  shift = true;
}

function noShift() {
  keyContainer.innerHTML = '';
  localStorage.getItem('lan') ? renderKeys(localStorage.getItem('lan')) : renderKeys();
  const currentKeys = document.querySelectorAll('.key');
  currentKeys.forEach((key) => {
    if (!key.classList.contains('fnKey')) {
      if (!caps) {
        key.textContent = key.textContent.toLowerCase();
      } else {
        key.textContent = key.textContent.toUpperCase();
      }
    }
  });
  if (caps) {
    document.querySelector('.CapsLock').classList.add('caps-on');
  }
  shift = false;
}

function getCaps() {
  const currentKeys = document.querySelectorAll('.key');
  if (!caps) {
    currentKeys.forEach((key) => {
      if (!key.classList.contains('fnKey')) {
        key.textContent = key.textContent.toUpperCase();
      }
    });
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
