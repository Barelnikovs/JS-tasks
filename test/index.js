'use strict'

let div = document.querySelector('div')

div.addEventListener('click', () => div.textContent = 'Я хочу какать!')

document.addEventListener('keyup', (event) => {
    console.log(event.target)
})
