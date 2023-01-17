//========== OBJECTS FUNDAMENTALS ==========

/*let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name*/



/*
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}*/


/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}*/




/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2
        }
    }
}*/



//========== THIS ==========

/*
let calculator = {
    read() {
        this.a = +prompt('Введите а')
        this.b = +prompt('Введите b')
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return  this.a * this.b
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/


/*function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Nastassia',
    age: 29,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Lena',
    age: 28
}

person.logInfo.bind(lena, 'frontend', '290919993')()//возвращает новую функцию сс опред контекстом, которую мы можем вызвать, когда нам будет нужно
person.logInfo.call(lena, 'frontend', '290919993')//задает опред контакст, возможно какие-то параметры и сразу же сам его вызывает
person.logInfo.apply(lena, ['frontend', '290919993'])//то же самое, что и call, но доп параметры должны быть в массиве

const array = [1, 2, 3, 4]
function multBy(arr, n) {
    return arr.map(function (i) {
        return i * n
    })
}

console.log(multBy(array, 5))*/

/*
console.log('просто в программе')
console.log(this)

function abc() {
    console.log('внутри функции')
    console.log(this)
    console.log(3 + 5/2)
    this.style.background = 'green'
}

//abc()

//document.querySelector('p').onclick = abc

let p = document.querySelectorAll('p')
p.forEach(function (el){
    el.addEventListener('click', abc)
})

//document.querySelector('p').addEventListener('click', abc)*/


/*
let calculator = {
    read() {
        this.a = +prompt('Введите а')
        this.b = +prompt('Введите b')
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

/*type someObjType = {
    name: string;
    age: number;
    greeting: () => string
}*/

/*
let someObj1 = {
    name: 'Lena',
    age: 25,
    greeting: function () {
        console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}
let someObj2 = {
    name: 'Nastassia',
    age: 26,
    greeting: function () {
        console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}

console.log(someObj1.greeting())
console.log(someObj2.greeting())*/

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

/*let counter = {
    currentCount: 5,
    setCurrentCount: function (newValue){
        this.currentCount = newValue
        console.log(this.currentCount)
    },
    increment() {
        console.log(++this.currentCount)
    },
    decrement: function (){
        console.log(--this.currentCount)
    },
    getCurrentCount (){
        console.log(this.currentCount)
    },
    restCurrentCount: function (){
        console.log( this.currentCount = 0)
    }
}

console.log(counter.getCurrentCount())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.setCurrentCount(6))
console.log(counter.restCurrentCount())*/


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

/*
let counter = {
    currentCount: 5,
    setCurrentCount: function (newValue){
        this.currentCount = newValue
       return this

    },
    increment() {
        ++this.currentCount
        return this

    },
    decrement: function (){
        --this.currentCount
        return this

    },
    getCurrentCount (){
        return this

    },
    restCurrentCount: function (){
        console.log( this.currentCount = 0)
    }
}


console.log(counter.setCurrentCount(113).increment().increment().increment().decrement().getCurrentCount() )*/


/*
function Calculator() {
    this.read = function () {
       this.a = +prompt('Введите число а')
       this.b = +prompt('Введите число b')
    };
    this.sum = function () {
        return  this.a + this.b
    };
    this.mul = function () {
        return this.a * this.b
    }
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/


/*function Accumulator(startingValue) {
    this.value =  startingValue;
    this.read = function () {
        this.value += +prompt('Введите currentValue')
    }
    /!*this.read = function () {
        this.currentValue = +prompt('Введите currentValue')
        return this.value += this.currentValue
    }*!/
}


let accumulator = new Accumulator(3); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений*/



// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01


/*
function myFirstConstructorFunc(name,age) {
    this.name = name;
    this.age = age;
    this.greeting = function () {
        console.log(`My name is ${this.name}. I am ${this.age}`)

    }
}

let userGreeting = new myFirstConstructorFunc('Nastassia', 29)

console.log(userGreeting.greeting())*/
