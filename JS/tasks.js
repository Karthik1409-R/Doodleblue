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
