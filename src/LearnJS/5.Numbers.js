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


//===========STRINGS===========

/*function ucFirst(name) {
    if (!name) return name

    return name[0].toUpperCase() + name.slice(1)

}
alert(ucFirst('вася'))*/



/*function checkSpam(str) {
    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx') ) {
        return true
    } else {
        return false
    }

}

alert(checkSpam('buy ViAgRA now') == true)
alert(checkSpam('free xxxxx') == true)
alert(checkSpam("innocent rabbit") == false)*/


/*
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength-3) + '...'
    } else {
        return str
    }
}
*/

/*
function extractCurrencyValue(str) {
    return +str.slice(1)
}
*/


//===========ARRAY===========

/*
let styles = ['Джаз', 'Блюз']

styles.push('Поп')
alert(styles)

styles[Math.floor((styles.length - 1) / 2)] = 'Классика'

alert(styles.shift())

styles.unshift('Рэп', 'Рок-н-ролл')*/




function sumInput(){

    let arr = []

    while (true) {

        let n = +prompt("Введите число", 0);

        if (n === "" || n === null || !isFinite(n)) break;

        arr.push(n);
    }


    let sum = 0

    for (let n of arr) {
      sum += n
    }

    return sum
}

alert(sumInput())