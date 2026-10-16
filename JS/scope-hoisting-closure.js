// global scope

const appName = "Doodleblue";
function getAppName() {
    console.log(appName); // Output: Doodleblue
}
getAppName()

// function scope

function getAppName() {
    const appName = "Doodleblue";
     // Output: Doodleblue
     console.log(appName); // Output: Doodleblue
}
getAppName() 
console.log(appName); // Output: ReferenceError: appName is not defined


// lexical scope

const outerVariable = "I am from outer function";
function outerFunction() {
    const innerVariable = "I am from inner function";
    function innerFunction() {
        console.log(outerVariable, innerVariable); // Output: I am from outer function I am from inner function
    }
    innerFunction();
}   
outerFunction();

// HOISTING

// var variables are hoisted to the top of their scope and initialized with undefined, while let and const variables are hoisted but not initialized. This means that accessing a var variable before its declaration will return undefined, while accessing a let or const variable before its declaration will throw a ReferenceError.
console.log(x); // Output: undefined
var x = 5;
console.log(x);


// let and const

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;
console.log(y);

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 5;
console.log(z); // ReferenceError: Cannot access 'z' before initialization


// funtion declarations are hoisted to the top of their scope, while function expressions are not. This means that you can call a function declared with a function declaration before its definition, but you cannot call a function declared with a function expression before its definition

// closure

function outerFunction() {  
    let money = 100;
    function innerFunction() {
        money += 50;
        console.log(money);
    }   
    return innerFunction;
}   
let closureFunction = outerFunction();
closureFunction(); // Output: 150
closureFunction(); // Output: 200

function Bank() {
    let balance = 0;
    function acc()  {
        balance += 100;
        console.log(balance);
    }
    return acc;
}   

let karthikAccount = Bank();
let monishaAccount = Bank();
karthikAccount(); // Output: 100
karthikAccount(); // Output: 200
monishaAccount(); // Output: 100
monishaAccount(); // Output: 200    

// funtion and funtion expression
// function declaration
console.log(add(2, 3)); // Output: 5
function add(a, b) {
    return a + b;
}

// function expression
// console.log(subtract(5, 2)); // Output: TypeError: Cannot access 'subtract' before initialization
const subtract = function(a, b) {
    return a - b;
}
console.log(subtract(5, 2)); // Output: 3 