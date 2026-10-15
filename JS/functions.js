// funtion  

function greet(){
    console.log("Hello");
}
greet(); // Hello

// Parameters and Arguments

function add(a, b){
    return a + b; // 6
}
console.log(add(2, 4));

// function expression 

const expression = function (a, b){
    return a - b; // 2
}
console.log(expression(5, 3));

// Arrow  functions 

const mul = (a, b)  => {
    return a * b; // 10
}
console.log(mul(2, 5));

// Default Parameter 

function names(name = "Guest"){
    console.log("Hello", name);
}
names(); // Hello Guest
names("Karthik") // Hello Karthik 


//SCOPES
let course = 'Javascript Training'; // global variable
function printCourse() {
    const message = 'Welcome to the course!'; // local variable
    console.log(message);
    console.log(course); // accessible here
}
printCourse(); // Welcome to the course! Javascript Training
console.log(course); // accessible here
// console.log(message); // Uncaught ReferenceError: message is not defined 

//callbacks functions
function processname(name, callbac) {
    
    callbac(name);
}
function greet(name)
{
    console.log("Hello, " + name + "!");
}
processname("SathishKumar", greet); // Hello, SathishKumar!

//higher order functions
function calculate(a, b, operation) {
    return operation(a, b);
}   
function add(a, b) {
    return a + b;
}   
console.log(calculate(5, 10, add)); // 15


//Array...
const events=["talk","workshop"]
console.log(events[0]);
console.log(events.length);

//create and modify const array 


//add and remove elements from an array push pop shift unshift


//slice() vs splice()

//search array elements indexOf() includes() find() findIndex()
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(3));
console.log(numbers.includes(4));
console.log(numbers.find(num => num > 3));
console.log(numbers.findIndex(num => num > 3));

//forEach() map() filter() reduce()
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num * 2));
numbers1.map(num => num * 2);
const evenNumbers = numbers1.filter(num => num % 2 === 0);
const sum = numbers1.reduce((acc, num) => acc + num, 0);

