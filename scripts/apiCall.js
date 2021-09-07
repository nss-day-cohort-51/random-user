export const apiCall = () =>
{
    return fetch('https://randomuser.me/api/',
    {
        dataType: 'json',
     success: function(data) {
    console.log(data);
}

})
.then(response => response.json())
.then(data => 
    {
        return data
    })
    
}