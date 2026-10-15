// Type conversion

console.log(Number("2") + 3);
console.log(String("2") + 3);

// Type coercion
console.log(Boolean(0));
console.log("2" + 3);
console.log("6" - 3);

// Combining condition 

let age = 19;
let seats = 5;

if (age >= 18 && seats > 0) {
    console.log("You can Register")
} else {
    console.log("Registration un avialable")
}

let number = "22"; // string
let n = 22; // number 

console.log(number == n); // true 
console.log(number === n); // false

//switch case
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    default:
        console.log('It is other day of week');
}

// ternary operator
let num = 3;
console.log((n % 2 == 0) ? "Even" : "odd");

// for loop 

for(let i = 0; i <= 5; i++){
    console.log(i); 
}

// while loop 

// let j = 10;
// while(j > 0){
//     console.log(j);
//     j++;
// }

// for of 

const nums = [1, 2, 3, 4];
for(const j of nums){
    console.log(j);
}

//task 1 print your name,course and a number using console.log
console.log('Name: SathishKumar N');
console.log('Course: Javascript Training');
console.log('Number: 42');

//task 2 create variables for an evbent name ,ticket price and seats left,print them
let eventName = 'Javascript Training';
let ticketPrice = 50;
let seatsLeft = 10;
console.log('Event Name: ' + eventName);
console.log('Ticket Price: $' + ticketPrice);
console.log('Seats Left: ' + seatsLeft);

//task 3 calculate the total price for 3 tickets and check whether it exceeds 500
let totalTickets = 3;
let totalPrice = totalTickets * ticketPrice;
if (totalPrice > 500) {
    console.log('The total price exceeds $500.');
} else {
    console.log('The total price does not exceed $500.');
}
//task 4 use if else to check whether a number is positive,negative or zero
let numberss = -5;    
if (numberss > 0) {
    console.log('The number is positive.');
}   
else if (numberss < 0) {
    console.log('The number is negative.');
}   
else {
    console.log('The number is zero.');
}

//task 5 use a loop to print even numbers from 2 to 20
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}