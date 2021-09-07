export const getUsers = () => {

    return fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(parsedResponse => {
        console.log(parsedResponse)
        //return parsedResponse;
    })
}
//The console displayed a random user but the web page did not.