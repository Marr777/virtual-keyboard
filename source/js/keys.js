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
    ru: '↑', en: '↑', code: 'ArrowUp', isArrow: true, isFnKey: true,
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
    ru: '←', en: '←', code: 'ArrowLeft', isArrow: true, isFnKey: true,
  },
  {
    ru: '↓', en: '↓', code: 'ArrowDown', isArrow: true, isFnKey: true,
  },
  {
    ru: '→', en: '→', code: 'ArrowRight', isArrow: true, isFnKey: true,
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
  title.textContent = 'Virtual Keyboard';
  section.classList.add('app');
  textArea.classList.add('output');
  textArea.setAttribute('rows', '5');
  textArea.setAttribute('cols', '20');
  keyContainer.classList.add('container');
  descriptionOS.classList.add('app__description');
  descriptionLangSwitch.classList.add('app__description');
  descriptionOS.textContent = 'Клавиатура сделана в операционной системе Windows10';
  descriptionLangSwitch.textContent = 'Переключение языка: Ctrl+Alt';
  document.body.append(section);
  const mainSection = document.querySelector('.app');
  mainSection.append(title);
  mainSection.append(textArea);
  mainSection.append(keyContainer);
  mainSection.append(descriptionOS);
  mainSection.append(descriptionLangSwitch);
};

export {Keys, renderLayout}
