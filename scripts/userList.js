
export const info = (infos) =>
{
    return `
    <div class="infosDisplay">
    <img class="images" src=${infos.results[0].picture.large}>
    <li>Name: <span class="color">${infos.results[0].name.title}. ${infos.results[0].name.first} ${infos.results[0].name.last}</span></li>
    <li>Country: <span class="color">${infos.results[0].location.country}</span></li>
    <li>DOB: <span class="color">${new Date(infos.results[0].dob.date).toLocaleString()}</span></li>
    <li>Age: <span class="color">${infos.results[0].dob.age}</span></li>
    <li>Phone: <span class="color">${infos.results[0].cell}</span></li>
    <li>Email:<span class="color"> ${infos.results[0].email}</span></li>
    
    </div>
    
    `
}
