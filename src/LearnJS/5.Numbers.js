//========== NUMBERS ==========

/*
let a = +prompt('Enter a')
let b = +prompt('Enter b')

if (isFinite(a) && isFinite(b)) {
    alert(`Sum ${a + b}`)
} else {
    alert('You should enter only numbers!')
}*/

//-------

/*function readNumber() {
    let num = +prompt('enter number')
    if (isFinite(num)) {
        return alert(`Your number is ${num}`)
    } if (num === '' || num === null) {
        return null
    } else {
        return alert('Try again')
    }
}
readNumber()*/

/*
function readNumber() {
    let num

    do {
        num = +prompt('enter number')
    } while (!isFinite(num))

    if (num == null || num == '') return null

    return alert(`Your number is ${num}`)
}
readNumber()*/

//-------

/*let a = +prompt('enter a')
let b = +prompt('enter b')

function random(a, b) {
    return a + Math.random() * (a - b);
}

alert(random(a, b))*/

//-------

/*let min = +prompt('enter min')
let max = +prompt('enter max')

function randomInteger(min, max) {
    let num = min + Math.random() * (min - max)
    return Math.round(num);
}

alert(randomInteger(min, max))*/


