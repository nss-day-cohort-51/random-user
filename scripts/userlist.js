import {User} from "./user.js";

export const UserList = (userPosts) => {
    
    let userHTML = "";
    for (const userObject of userPosts) {
        userHTML += User(userObject)
    }
    return userHTML;
}