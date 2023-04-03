'use script'

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
    "Backspace": "backspace",
    "Tab": "tab",
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
    "CapsLock": "caps lock",
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
    "Enter": "enter",
    "ShiftLeft": "shift",
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
    "ShiftRight": "shift",
    "ControlLeft": "ctrl",
    "MetaLeft": "win",
    "AltLeft": "alt",
    "Space": " ",
    "AltRight": "alt",
    "ControlRight": "ctrl",
    "ArrowLeft": "ArrowLeft",
    "ArrowUp": "ArrowUp",
    "ArrowDown": "ArrowDown",
    "ArrowRight": "ArrowRight"
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
    "Backspace": "backspace",
    "Tab": "tab",
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
    "CapsLock": "caps lock",
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
    "Enter": "enter",
    "ShiftLeft": "shift",
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
    "ShiftRight": "shift",
    "ControlLeft": "ctrl",
    "MetaLeft": "win",
    "AltLeft": "alt",
    "Space": " ",
    "AltRight": "alt",
    "ControlRight": "ctrl",
    "ArrowLeft": "ArrowLeft",
    "ArrowUp": "ArrowUp",
    "ArrowDown": "ArrowDown",
    "ArrowRight": "ArrowRight"
}

let lowCaseSymbols = document.querySelectorAll('.low-case')
let upperCaseSymbols = document.querySelectorAll('.upper-case');
let keys = document.querySelectorAll('.key')
let keyboard = document.querySelector('.keyboard')
let input = document.querySelector('#input')
let leftShift = document.querySelector('.lshift')
let rightShift = document.querySelector('.rshift')
let Case = document.querySelector('.space .case')
let flag = true
let pressedShift = false


input.focus()

    ; (function addSymbolForKeys() {  // расставляем символы по кнопкам
        let i = 0
        for (let symbol in lowCaseKeys) {
            lowCaseSymbols[i].parentElement.setAttribute('data-code', `${symbol}`)
            if (lowCaseSymbols[i].nodeName === 'P') {
                lowCaseSymbols[i].textContent = lowCaseKeys[symbol]
            }
            i++
        }
        let j = 0
        for (let symbol in upperCaseKeys) {
            if (upperCaseSymbols[j].nodeName === 'P') {
                upperCaseSymbols[j].textContent = upperCaseKeys[symbol]
                upperCaseSymbols[j].classList.add('d-none')
            }
            j++
        }
    })();

function checkFlag() { // проверка на включёный caps lock
    if (Case.classList.contains('d-none')) {
        flag = true
    } else {
        flag = false
    }
}

function changeCase() { // смена регистра клавиатуры
    lowCaseSymbols.forEach(function (elem) {
        if (elem.nodeName === 'P') {
            elem.classList.toggle('d-none')
        }
    })
    upperCaseSymbols.forEach(function (elem) {
        if (elem.nodeName === 'P') {
            elem.classList.toggle('d-none')
        }
    })
    checkFlag()
}

let mousedown = new Event('mousedown') // анимация нажатия клавиши
document.addEventListener('keydown', function (event) {
    for (let elem of keys) {
        if (event.code === elem.dataset.code) {
            elem.dispatchEvent(mousedown)
            elem.classList.add('active-key')
            break
        }
    }
})
let mouseup = new Event('mouseup') // анимация отпускания клавиши
document.addEventListener('keyup', function (event) {
    for (let elem of keys) {
        if (event.code === elem.dataset.code) {
            elem.dispatchEvent(mouseup)
            elem.classList.remove('active-key')
            break
        }
    }
})

keyboard.addEventListener('click', function (event) { // ввод данных
    if (event.target.closest('.key').dataset.code === 'Backspace') {
        input.value = input.value.slice(0, -1)
    } else if (event.target.closest('.key').dataset.code === 'CapsLock') {
        changeCase()
    } else if (event.target.closest('.key').dataset.code === 'ShiftLeft' || event.target.closest('.key').dataset.code === 'ShiftRight') {
        changeCase()
        pressedShift = true
        event.target.closest('.key').classList.add('active-key')
    } if (event.target.closest('.symbol')) {
        if (flag) {
            input.value += event.target.closest('.symbol').lastElementChild.innerHTML
        } else {
            input.value += event.target.closest('.symbol').firstElementChild.innerHTML
        }
        if (pressedShift) {
            changeCase()
            pressedShift = false
            leftShift.classList.remove('active-key')
            rightShift.classList.remove('active-key')
        }
    }
    input.focus()
})



