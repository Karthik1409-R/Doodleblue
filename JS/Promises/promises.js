// pending, fullfilled, rejected 
// resolved, rejected 
// .then(), .catch(), .finally()
// .then() is used to handle the resolved state of a promise, 
// .catch() is used to handle the rejected state of a promise, and 
// .finally() is used to execute code after the promise is settled (either resolved or rejected).

const registration = new Promise((resolve, reject) => {
    let isRegistered = true;
    if (isRegistered) {
        resolve("Registration successful!");
    } else {
        reject("Registration failed!");
    }
});

registration.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Registration process completed.");
});

// Example of chaining promises
const fetchData = new Promise((resolve, reject) => {
    let dataFetched = true;
    if (dataFetched) {
        resolve("Data fetched successfully!");
    } else {
        reject("Data fetch failed!");
    }
});


fetchData.then((message) => {
    console.log(message);
    return "Processing data...";
}).then((processMessage) => {
    console.log(processMessage);
    return "Data processed successfully!";
}).then((finalMessage) => {
    console.log(finalMessage);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Data fetch and processing completed.");
});

