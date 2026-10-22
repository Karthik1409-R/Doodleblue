// const names = document.getElementById("name");
// names.textContent = "Hello World";
// names.innerHTML = "<strong>Hello World</strong>";

// const cities = document.querySelectorAll(".event-card");
// cities.forEach((city) => {
//     console.log(city.textContent);
// })

// const inputField = document.getElementById("input-name");
// console.log(inputField.value); 
// inputField.value = "Sathish";
// console.log(inputField.value); 

// event bubbling
const eventList = document.getElementById("event-list");
const message = document.getElementById("message");

eventList.addEventListener("click", (e) => {
    if(e.target.classList.contains("join-button")) {
        console.log(e.target.previousElementSibling);
        const eventName = e.target.previousElementSibling.textContent;
        message.textContent = `You have joined the event: ${eventName}`;
    }
})


