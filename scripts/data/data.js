export const data = (dataObject) => {
    return `
    <section class="data">
    <header>
    <img class="" src="${dataObject.picture.large}" />
    <p> NAME: ${dataObject.name.first} ${dataObject.name.last}</p>
    <p> GENDER: ${dataObject.gender}</p>
    <p> ADDRESS: ${dataObject.location.street.number} ${dataObject.location.street.name}, ${dataObject.location.city}, ${dataObject.location.state}, ${dataObject.location.country} ${dataObject.location.postcode}</p>
    <p> DATE OF BIRTH: ${dataObject.dob.date}</p>
    <p> DATE REGISTERED: ${(dataObject.registered.date)}
    <p> PHONE NUMBER: ${dataObject.phone} <p>
    <p> EMAIL ADDRESS: ${dataObject.email}</p>
    </section>
    `   
}
    