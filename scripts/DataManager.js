export const getRandomUser = () => {
    fetch('https://randomuser.me/api') 
    .then((response) => { 
      return response.json()})
    .then(dataResponse => 
    console.log(dataResponse))   
}