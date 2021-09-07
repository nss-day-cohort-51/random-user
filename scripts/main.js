import {getRandomUser} from "./data.js"
import { User } from "./user.js";
import { UserList } from "./userlist.js";


const showUserList = () => {
    const userElement = document.querySelector(".userlist");
    getRandomUser().then(userPosts => {
        userElement.innerHTML = UserList(userPosts.results);
    })


}
const applicationElement = document.querySelector("#newUser");

applicationElement.addEventListener("click", event => {
    showUserList()
   
})

// const startnewUser = () => {
showUserList()
// }