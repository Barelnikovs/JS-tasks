'use strict'

    ; (function () {
        function square(num) {
            return num ** 2;
        }
        function cube(num) {
            return num ** 3;
        }
        function avg(arr) {
            return sum(arr, 1) / arr.length;
        }
        function digitsSum(num) {
            return sum(String(num).split(''));
        }
        function randomInteger(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min))
        }
        function getArrWithRundomDifferentDigits(length, min, max) {
            let arr = []
            while (arr.length < length) {
                if (arr.length == 0) {
                    arr.push(lib.randomInteger(min, max))
                } if (arr.length >= 1) {
                    let num = lib.randomInteger(min, max)
                    if (arr.indexOf(num) == -1) {
                        arr.push(num)
                    }
                }
            }
            return arr
        }

        // вспомогательная функция
        function sum(arr) {
            let res = 0;

            for (let elem of arr) {
                res += +elem;
            }

            return res;
        }

        window.lib = { square, cube, avg, digitsSum, randomInteger, getArrWithRundomDifferentDigits };
    })();