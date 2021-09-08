import { User } from "./user.js";

export const userList = (Users) => {

    const contentElement = document.querySelector(".userInfo")

    let userHTML = "";

    for (const oneUser of Users) {

        userHTML += User(oneUser);
    }
    contentElement.innerHTML = userHTML
}