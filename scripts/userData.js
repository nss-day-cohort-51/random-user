export const userDetail = (results) => {
    return         `<div>
                    <div><img src="https://randomuser.me/api/portraits/men/36.jpg"></div>
                    <h3>Name:${getRandomUsers(results.first)}</h3>
                    <p>Gender:${getRandomUsers(results.gender)}</p>    
                </div>`
}