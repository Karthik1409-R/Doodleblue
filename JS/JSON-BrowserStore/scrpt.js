// json 
// json text , server and client side json data store
// when do we use json ? // api response, api request, browser storage, local storage, session storage, cookies, etc
// stringify is used to convert js object to json string 
// parse is used to convert json string to js object


// stringify 
const student = {
    name: "John",
    age: 30,
    city: "New York"
};
const jsonText = JSON.stringify(student);
console.log(" JSON Text: ",jsonText); // Output: {"name":"John","age":30,"city":"New York"}

// parse
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const jsObject = JSON.parse(jsonString);
console.log(" JS Object: ", jsObject); // Output: { name: 'John', age: 30, city: 'New York' }

// browser storage
// local storage, session storage, cookies 
// local storage is used to store data in the browser with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
// session storage is used to store data in the browser for a single session. The data will be deleted when the browser is closed.
// cookies are used to store data in the browser with an expiration date. The data will be deleted when the expiration date is reached.

// local storage
localStorage.setItem("theme", "light");
const savedTheme = localStorage.getItem("theme");
console.log("Saved Theme: ", savedTheme);

// session storage
sessionStorage.setItem("step", "1");
const savedStep = sessionStorage.getItem("step");

// save an arr using JSON
const arr = [1, 2, 3, 4, 5];
localStorage.setItem("arr", JSON.stringify(arr));

const savedText = localStorage.getItem("arr");
const savedTasks = JSON.parse(savedText);
console.log(savedTasks[0]);


