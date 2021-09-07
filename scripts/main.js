import { getUser } from "./userdata.js";

// getUser();

const getRandomUser = () => {
    const userElement = document.querySelector(".getUser");
    userElement.innerHTML = getUser();
}

getRandomUser();


console.log("You look marvelous!")