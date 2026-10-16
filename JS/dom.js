const names = document.getElementById("name");
names.textContent = "Hello World";
names.innerHTML = "<strong>Hello World</strong>";

const cities = document.querySelectorAll(".event-card");
cities.forEach((city) => {
    console.log(city.textContent);
})

const inputField = document.getElementById("input-name");
console.log(inputField.value); 
inputField.value = "Sathish";
console.log(inputField.value); 



