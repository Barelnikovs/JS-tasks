'use strict'
const cells = document.querySelectorAll('.cell')
const mainButton = document.querySelector('.mainButton')
const message = document.querySelector('.message')
let moveOfCrosses = true

mainButton.addEventListener('click', startGame)

function startGame() {
    message.classList.remove('invisible')
    mainButton.classList.add('invisible')
    changeMessage()
    for (let cell of cells) {
        cell.addEventListener('click', makeMove)
    }
}
function stopGame() {
    for (let cell of cells) {
        cell.removeEventListener('click', makeMove)
    }
    finishGame()
}
function finishGame() {
    mainButton.innerHTML = 'Новая новую игру'
    message.classList.add('invisible')
    mainButton.classList.remove('invisible')
}

function changeMessage() {
    if (moveOfCrosses) {
        message.textContent = 'Ход крестиков'
    } else {
        message.textContent = 'Ход ноликов'
    }
}

function makeMove(event) {
    if (event.type === 'click') {
        if (moveOfCrosses) {
            this.lastElementChild.classList.remove('invisible')
            moveOfCrosses = false
            changeMessage()
            this.removeEventListener('click', makeMove)
            checkVictory()
        } else {
            this.firstElementChild.classList.remove('invisible')
            moveOfCrosses = true
            changeMessage()
            this.removeEventListener('click', makeMove)
            checkVictory()
        }
    }
}
function checkVictory() {
    let crossCells = []
    let zeroCells = []
    for (let i = 0; i < cells.length; i++) {
        let classNames = cells[i].lastElementChild.classList
        if (!classNames.contains('invisible')) {
            crossCells.push(i)
        }   
    }
    for (let i = 0; i < cells.length; i++) {
        let classNames = cells[i].firstElementChild.classList
        if (!classNames.contains('invisible')) {
            zeroCells.push(i)
        }   
    }
    checkCells(crossCells, zeroCells)
}
function checkCells(croses, zeros) {
    if (croses.indexOf(0) !== -1 && croses.indexOf(1) !== -1 && croses.indexOf(2) !== -1 ||
        croses.indexOf(0) !== -1 && croses.indexOf(4) !== -1 && croses.indexOf(8) !== -1 ||
        croses.indexOf(0) !== -1 && croses.indexOf(3) !== -1 && croses.indexOf(6) !== -1 ||
        croses.indexOf(3) !== -1 && croses.indexOf(4) !== -1 && croses.indexOf(5) !== -1 ||
        croses.indexOf(6) !== -1 && croses.indexOf(7) !== -1 && croses.indexOf(8) !== -1 ||
        croses.indexOf(1) !== -1 && croses.indexOf(4) !== -1 && croses.indexOf(7) !== -1 ||
        croses.indexOf(2) !== -1 && croses.indexOf(5) !== -1 && croses.indexOf(8) !== -1 ||
        croses.indexOf(2) !== -1 && croses.indexOf(4) !== -1 && croses.indexOf(6) !== -1 ) {
            stopGame()
        } else if (
        zeros.indexOf(0) !== -1 && zeros.indexOf(1) !== -1 && zeros.indexOf(2) !== -1 ||
        zeros.indexOf(0) !== -1 && zeros.indexOf(4) !== -1 && zeros.indexOf(8) !== -1 ||
        zeros.indexOf(0) !== -1 && zeros.indexOf(3) !== -1 && zeros.indexOf(6) !== -1 ||
        zeros.indexOf(3) !== -1 && zeros.indexOf(4) !== -1 && zeros.indexOf(5) !== -1 ||
        zeros.indexOf(6) !== -1 && zeros.indexOf(7) !== -1 && zeros.indexOf(8) !== -1 ||
        zeros.indexOf(1) !== -1 && zeros.indexOf(4) !== -1 && zeros.indexOf(7) !== -1 ||
        zeros.indexOf(2) !== -1 && zeros.indexOf(5) !== -1 && zeros.indexOf(8) !== -1 ||
        zeros.indexOf(2) !== -1 && zeros.indexOf(4) !== -1 && zeros.indexOf(6) !== -1 ) {
            stopGame()
        }
}
