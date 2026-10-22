// Task 1: Callback function example

console.log("One");
setTimeout(() => {
    console.log("Two");
}, 1000);
console.log("Three");


// Task C SetTimeout

console.log("Registration recieved");
setTimeout(() => {
    console.log("Processing registration...");
},750)
setTimeout(() => {
    console.log("Registration Confirmed");
}, 2000);

// Task D SetInterval
let count = 0;
const id = setInterval(() => {
    count++;
    console.log("Count: " + count);
},1000)
setTimeout(() => {
    clearInterval(id);
    console.log("Interval Stoped");
}, 5050);