'use strict'

let div = document.querySelector('div');
let form = document.querySelector('form')
let input1 = document.querySelector('[name="num1"]')
let input2 = document.querySelector('[name="num2"]')
let input3 = document.querySelector('[name="num3"]')
let input4 = document.querySelector('[name="num4"]')
let input5 = document.querySelector('[name="num5"]')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    fetch('/handler/', {
        method: 'POST',
        body: new FormData(this)
    }).then(response => {
        return response.text()
    }).then(text => {
        div.textContent = text
    })
})

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

function func() {
    let formData = new FormData()
    for (let key in obj) {
        console.log(obj[key])
        formData.set(key, obj[key])
        console.log(Array.from(formData))
    }
    fetch('/handler/', {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.text()
    }).then(text => {
        div.textContent = text
    })
}

func()
