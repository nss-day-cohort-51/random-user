import { getUser } from "./userManager.js";
import { userList } from "./userList.js";

getUser()
.then(data => {
    console.log(data);
    userList(data.results);
})

//const randomButton = document.querySelector(".randomButton")

//randomButton.addEventListener("click", (event) => {
//     if (event.target.id === "randomUser") {
//         getUser()
// .then(data => {
//     console.log(data);
//     userList(data.results);
// })
//     }
// })