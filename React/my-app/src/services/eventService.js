const API_URL = "http://localhost:3000/events";

// GET ALL
export async function getAllEvents(){
    const response = await fetch(API_URL);
    return response.json();
}

