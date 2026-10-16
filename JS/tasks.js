// Tasks 

// Task 1
const calculate = (price, quantity) => {
    return price * quantity;
}
console.log(calculate(10, 3));

// Task 2
function greet(name){
    console.log("Hello", name);
}
greet("Karthik!")

// Task 3 
let arr = [1,2,3,4,5];
console.log(arr.length);

// Task 4
let arr3 = [1,2,3,4,5,6];
let ans = arr3.filter(num => num % 2 == 0);
console.log(ans);

// Task 5
let arr2 = [1,2,3,4,5,6];
let result = arr2.map(num => num * 3);
// console.log(arr2);
console.log(result);

// Task 6
let arr4 = [1,2,3,4,5,6];
let result1 = arr4.reduce((sum, num) => {
        return sum + num
}, 0);
console.log(result1);

// Task 7
const book = {
  title: "JavaScript Basics",
  author: "John Smith",
  price: 500
};

console.log("Before update:", book);

book.price = 650;

console.log("After update:", book);
console.log("Updated Price:", book.price);

// Task 8

const user = {
  name: "Karthik",
  age: 21,
  address: {
    city: "Chennai",
    country: "India"
  }
};

console.log(user.address.city);

// Task 9

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Headphones", price: 1500 }
];

products.forEach(function (product) {
  console.log(product.name);
});

// Task 10

const student = {
  name: "Karthik",
  age: 21,
  department: "CSE"
};

const { name, age } = student;

console.log(name);
console.log(age);

// Task 11
const numbers = [10, 20, 30];

const copiedNumbers = [...numbers];

console.log("Copied array:", copiedNumbers);

const moreNumbers = [40, 50, 60];

const combinedArray = [...numbers, ...moreNumbers];

console.log("Combined array:", combinedArray);

// Task 12

function addNumbers(...numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(10, 20, 30, 40, 50));

// Task 13

const users = {
  name: "Karthik",
  address: {
    city: "Chennai"
  }
};

const city = users?.address?.city ?? "City not available";

console.log(city);

const anotherUser = {
  name: "Rahul"
};

const anotherCity = anotherUser?.address?.city ?? "City not available";

console.log(anotherCity);