export const getRandomUser = () => {
    return fetch('https://randomuser.me/api/?exc=login'
        )
        .then(response => response.json())
        

}