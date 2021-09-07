export const User = (userObj) => {
    return `<article class="userCard">
                <div><img class="user-image" src="${userObj.picture.large}" /></div>
                <h3 class="username">${userObj.name.title} ${userObj.name.first} ${userObj.name.last}</h3>
                <p class="userDetail">gender: ${userObj.gender}</p>
                <p class="userDetail">address: ${userObj.location.street.number} ${userObj.location.street.name}</p>
            </article>`
}