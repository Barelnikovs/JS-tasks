'use strict'

let prompts = document.getElementById('prompt-text')
let newGame = document.getElementById('new-game')
let enterNum = document.getElementById('enter-number')
let checkNum = document.getElementById('check-number')

let unknownNum
let counter = 0

function pushPrompt(num) {
    let arr = ['Нажмите "Новая игра"',
        'Загадано целое число от 1 до 100. Попробуйте угадать его за как можно меньшее количество попыток. После каждой проверки будет появляться подсказка.',
        'Число больше',
        'Число меньше',
        'Введённое число не входит в диапозон от 1 до 100',
        'Введённое число не целое',
        `Победа!
    Использовано попыток ${counter}`,]
    prompts.textContent = arr[num]
}

function changeVisibleBlock() {
    newGame.parentElement.classList.toggle('d-none')
    enterNum.parentElement.classList.toggle('d-none')
}

newGame.addEventListener('click', function () {
    changeVisibleBlock()
    unknownNum = Math.ceil(Math.random() * 100)
    console.log(unknownNum)
    pushPrompt(1)
    enterNum.select()
})

enterNum.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        checkNum.click()
    }
})

checkNum.addEventListener('click', function () {
    if (enterNum.value >= 1 && enterNum.value < unknownNum && Number.isInteger(Number(enterNum.value))) {
        pushPrompt(2)
        ++counter
    } if (enterNum.value <= 100 && enterNum.value > unknownNum && Number.isInteger(Number(enterNum.value))) {
        pushPrompt(3)
        ++counter
    } if (!Number.isInteger(Number(enterNum.value))) {
        pushPrompt(5)
    } if (enterNum.value > 100 || enterNum.value < 1) {
        pushPrompt(4)
    } if (Number(enterNum.value) === unknownNum) {
        ++counter
        pushPrompt(6)
        changeVisibleBlock()
        counter = 0
    }
    enterNum.value = ''
    enterNum.select()
})
