let users = [];

export const userData = () => {
    return [users];
}
export const getRandomUser = () => {
    return fetch('https://randomuser.me/api') 
    .then(response => response.json())
    .then(dataResponse => {
        users = dataResponse.results
        return dataResponse;
    })} 