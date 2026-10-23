// save a favorite color in local storage and read it after refreshing the page

let favouriteColor = "blue";
localStorage.setItem("favouriteColor", favouriteColor);
const savedColor = localStorage.getItem("favouriteColor");
console.log("Saved Color: ", savedColor);

// save a temparary step number in session storage

let stepNumber = "1";
sessionStorage.setItem("stepNumber", stepNumber);
const savedStepNumber = sessionStorage.getItem("stepNumber");
console.log("Saved Step Number: ", savedStepNumber);    

