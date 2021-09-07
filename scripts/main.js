import {getRandomUser} from "./data.js"
import { User } from "./user.js";
import { UserList } from "./userlist.js";

// getRandomUser()
// .then(response => console.log(response)) 
// console.log("You look marvelous!")

const showUserList = () => {
    const userElement = document.querySelector(".userlist");
    getRandomUser().then(userPosts => {
        userElement.innerHTML = UserList(userPosts.results);
    })
}

showUserList()