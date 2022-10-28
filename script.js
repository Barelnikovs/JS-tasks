'use strict'

const PI = 3.142

    // exercise 1
    ; (function () {
        let data = document.querySelector('#ex1 .data')
        let enter = document.querySelector('#ex1 .enter')
        let square = document.querySelector('#ex1 .square span')
        let perimeter = document.querySelector('#ex1 .perimeter span')

        enter.addEventListener('click', function () {
            square.textContent = lib.square(Number(data.value)) + ' см²'
            perimeter.textContent = (Number(data.value * 4)) + ' см'
        })
    })();

// exercise 2
; (function () {
    let firstSide = document.querySelector('#ex2 #first_side')
    let secondSide = document.querySelector('#ex2 #second_side')
    let enter = document.querySelector('#ex2 .enter')
    let square = document.querySelector('#ex2 .square span')
    let perimeter = document.querySelector('#ex2 .perimeter span')

    enter.addEventListener('click', function () {
        square.textContent = Number(firstSide.value) * Number(secondSide.value) + ' см²'
        perimeter.textContent = (Number(firstSide.value) + Number(secondSide.value)) * 2 + ' см'
    })
})();

// exercise 3
; (function () {
    let length = document.querySelector('#ex3 .length')
    let select = document.querySelector('#ex3 select')
    let enter = document.querySelector('#ex3 .enter')
    let res1 = document.querySelector('#ex3 .result1 span')
    let res2 = document.querySelector('#ex3 .result2 span')

    enter.addEventListener('click', function () {
        if (select.value === 'радиус') {
            res1.textContent = (PI * (lib.square(Number(length.value)))).toFixed(2) + ' см²'
            res2.textContent = (2 * PI * Number(length.value)).toFixed(2) + ' см'
        } else if (select.value === 'диаметр') {
            res1.textContent = (0.25 * PI * (lib.square(Number(length.value)))).toFixed(2) + ' см²'
            res2.textContent = (PI * Number(length.value)).toFixed(2) + ' см'
        }
    })
})();

// exercise 4
; (function () {
    let firstSide = document.querySelector('#ex4 .first_side')
    let secondSide = document.querySelector('#ex4 .second_side')
    let thirdSide = document.querySelector('#ex4 .third_side')
    let enter = document.querySelector('#ex4 .enter')
    let res = document.querySelector('#ex4 .result1 span')

    enter.addEventListener('click', function () {
        let a = Number(firstSide.value)
        let b = Number(secondSide.value)
        let c = Number(thirdSide.value)
        let p = (a + b + c) / 2
        res.textContent = (p * (p - a) * (p - b) * (p - c)) ** 0.5 + ' см²'
    })
})();