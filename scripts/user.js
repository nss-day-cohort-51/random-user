export const User = (userObj) => {
    return `<article> class="userCard">
                <div><img class="user-image" src="${userObj.picture}" /><div>
                <h3 class="username">${userObj.name}
            </article>`
}