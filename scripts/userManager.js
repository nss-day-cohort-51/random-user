export const getUser = () => {

    return fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(parsedResponse => {
         console.log(parsedResponse);
        return parsedResponse
    })
}
