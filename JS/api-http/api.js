// api 

const API_URL = "https://jsonplaceholder.typicod`e.com/posts/";

async function fetchData(){
    const response = await fetch(`${API_URL}1`);
    const data = await response.json();
    console.log("GET Resposive :", data);
}



