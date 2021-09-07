export const info = (infos) =>
{
    return `
    <img src=${infos.results[0].picture.large}>
    <li>Name: ${infos.results[0].name.title}. ${infos.results[0].name.first} ${infos.results[0].name.last}</li>
    <p>Country: ${infos.results[0].location.country}</p>
    <p>DOB: ${(infos.results[0].dob.date).split("T")[0]}</p>
    <p>Age: ${infos.results[0].dob.age}</p>
    <p>Phone: ${infos.results[0].cell}</p>
    <p>Email: ${infos.results[0].email}</p>
    
    
    `
}
