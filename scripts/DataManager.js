export const getRandomUser = () => {
    return fetch("https://randomuser.me/api/?exc=login")
    .then(login => login.json())
}