'use script'

let keyboard = document.getElementById('keyboard')
let upperCaseSymbols = document.querySelectorAll('.upper-case')
let lowCaseSymbols = document.querySelectorAll('.low-case')


let lowCaseKeys = {
    "Backquote": "`",
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Digit0": "0",
    "Minus": "-",
    "Equal": "=",
    "Backspace": "Backspace",
    "Tab": "Tab",
    "KeyQ": "q",
    "KeyW": "w",
    "KeyE": "e",
    "KeyR": "r",
    "KeyT": "t",
    "KeyY": "y",
    "KeyU": "u",
    "KeyI": "i",
    "KeyO": "o",
    "KeyP": "p",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Backslash": "\\",
    "CapsLock": "CapsLock",
    "KeyA": "a",
    "KeyS": "s",
    "KeyD": "d",
    "KeyF": "f",
    "KeyG": "g",
    "KeyH": "h",
    "KeyJ": "j",
    "KeyK": "k",
    "KeyL": "l",
    "Semicolon": ";",
    "Quote": "'",
    "Enter": "Enter",
    "ShiftLeft": "Shift",
    "KeyZ": "z",
    "KeyX": "x",
    "KeyC": "c",
    "KeyV": "v",
    "KeyB": "b",
    "KeyN": "n",
    "KeyM": "m",
    "Comma": ",",
    "Period": ".",
    "Slash": "/",
    "ShiftRight": "Shift",
    "ControlLeft": "Ctrl",
    "MetaLeft": "Win",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Ctrl",
}
let upperCaseKeys = {
    "Backquote": "~",
    "Digit1": "!",
    "Digit2": "@",
    "Digit3": "#",
    "Digit4": "$",
    "Digit5": "%",
    "Digit6": "^",
    "Digit7": "&",
    "Digit8": "*",
    "Digit9": "(",
    "Digit0": ")",
    "Minus": "_",
    "Equal": "+",
    "Backspace": "Backspace",
    "Tab": "Tab",
    "KeyQ": "Q",
    "KeyW": "W",
    "KeyE": "E",
    "KeyR": "R",
    "KeyT": "T",
    "KeyY": "Y",
    "KeyU": "U",
    "KeyI": "I",
    "KeyO": "O",
    "KeyP": "P",
    "BracketLeft": "{",
    "BracketRight": "}",
    "Backslash": "|",
    "CapsLock": "CapsLock",
    "KeyA": "A",
    "KeyS": "S",
    "KeyD": "D",
    "KeyF": "F",
    "KeyG": "G",
    "KeyH": "H",
    "KeyJ": "J",
    "KeyK": "K",
    "KeyL": "L",
    "Semicolon": ":",
    "Quote": "\"",
    "Enter": "Enter",
    "ShiftLeft": "Shift",
    "KeyZ": "Z",
    "KeyX": "X",
    "KeyC": "C",
    "KeyV": "V",
    "KeyB": "B",
    "KeyN": "N",
    "KeyM": "M",
    "Comma": "<",
    "Period": ">",
    "Slash": "?",
    "ShiftRight": "Shift",
    "ControlLeft": "Ctrl",
    "MetaLeft": "Win",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Ctrl",
}


// расставляем символы по клавишам
let i = 0
for (let key in lowCaseKeys) {
    keyboard.children[i].firstElementChild.textContent = lowCaseKeys[key]
    keyboard.children[i].setAttribute('data-code', `${key}`) // добавляю каждой клавише атрибут data-code
    i++
}
let j = 0
for (let key in upperCaseKeys) {
    keyboard.children[j].lastElementChild.textContent = upperCaseKeys[key]
    j++
}
// скрывю верхний регистор
for (let elem of upperCaseSymbols) {
    elem.classList.add('d-none')
}

document.addEventListener('keydown', function (event) {

})