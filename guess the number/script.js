'use strict'

let prompts = document.getElementById('prompt-text')
let newGame = document.getElementById('new-game')
let enterNum = document.getElementById('enter-number')
let checkNum = document.getElementById('check-number')

let unknownNum
let counter = 0

function pastPrompt(num) {
    let arr = ['Нажмите "Новая игра"',
        'Загадано целое число от 1 до 100. Попробуйте угадать его за как можно меньшее количество попыток. После каждой попытки будет появляться подсказка',
        'Число больше',
        'Число меньше',
        'Введённое число не входит в диапозон от 1 до 100',
        'Введённое не целое число',]
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
    enterNum.select()
})

enterNum.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        checkNum.click()
    }
})

checkNum.addEventListener('click', function () {
    console.log('нажатие Enter')
    //if (enterNum.value >= 1 && enterNum.value < unknownNum && Number.isInteger(enter.value)){

    //}
})
