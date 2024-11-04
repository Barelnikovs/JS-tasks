"use strict"
console.log('script is working')
let prompt = document.getElementById('prompt')
let newGame = document.getElementById('new-game')
let table = document.getElementById('table')
let tds = document.querySelectorAll('#table td')
let attamps = document.getElementById('attampts')
let remainCells = document.getElementById('remaining-cells')

let counterOfAttapts = 0
let counterOfCells = 10

function changeVisionBlock() { // меняет видимый блок
    newGame.parentElement.classList.toggle('d-none')
    table.parentElement.classList.toggle('d-none')
}

function pushPrompt(num) {
    let arr = ['Найдите 10 загаданных ячеек, используя как можно меньшее количество попыток. Если вы угадали ячейку, то она станет красной, если нет, то серой',
        `Победа! Потребовалось попыток ${counterOfAttapts}`]
    prompt.textContent = arr[num]
}

function pushInfo(num) { // обновляет информацию под таблицей
    let obj = {
        attamps: `Попыток использовано: ${counterOfAttapts}`,
        remainCells: `Осталось найти ячеек: ${counterOfCells}`,
    }
    attamps.textContent = obj.attamps
    remainCells.textContent = obj.remainCells
}

function guessCells() { // загадывает ячейки таблицы
    let arr = lib.getArrWithRundomDifferentDigits(10, 1, 100)
    console.log(arr)
    let counter = 1
    for (let td of tds) {
        if (arr.indexOf(counter) !== -1) {
            td.classList.add('guess-cell')
        }
        counter++
    }
}

function checkCell() { // проверяет ячейки
    if (this.classList.contains('guess-cell')) {
        this.classList.add('td__red')
        counterOfCells--
        counterOfAttapts++
        pushInfo()
        this.removeEventListener('click', checkCell)
        if (counterOfCells == 0) {
            changeVisionBlock()
            pushPrompt(1)
            beforeNewGame()
        }
    } else {
        this.classList.add('td__grey')
        counterOfAttapts++
        pushInfo()
        this.removeEventListener('click', checkCell)
    }
}

function beforeNewGame() { // убирает лишние классы перед новой игрой
    for (let td of tds) {
        td.classList.remove('td__red', 'td__grey', 'guess-cell')
    }
    counterOfAttapts = 0
    counterOfCells = 10
}

newGame.addEventListener('click', function () {
    changeVisionBlock()
    pushInfo()
    pushPrompt(0)
    guessCells()
    for (let td of tds) {
        td.addEventListener('click', checkCell)
    }
})

