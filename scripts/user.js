const newDate = (date) => {
    var d = new Date(date);
    var n = d.toLocaleDateString();
    return n
  }
export const User = (userObject) => {
    return `
    <section class="userHead">
	<ul>
    <h2>${userObject.name.title}. ${userObject.name.first} ${userObject.name.last} </h2>
    <div class=profileImage>
    <img src="${userObject.picture.large}"/>
    </div>
    <ul>
    <li>${userObject.gender}</li>
    <li>${userObject.dob.age} years old</li>
    <li>dob: ${newDate(userObject.dob.date)}</li>
    <li>address: ${userObject.location.street.number} ${userObject.location.street.name} ${userObject.location.city}, ${userObject.location.state}, ${userObject.location.country} ${userObject.location.postcode}</li>
    <li>latitude: ${userObject.location.coordinates.latitude} longitude: ${userObject.location.coordinates.longitude}</li>
    <li>registered date: ${newDate(userObject.registered.date)} years active: ${userObject.registered.age}</li>
    <li>${userObject.email}</li>
    <li>phone: ${userObject.phone} cell: ${userObject.cell}</li>
    </ul>
    </section>
    `
  }



  


//   <li>latitude: ${userObject.coordinates.latitude} longitude: ${userObject.coordinates.longitude}</li>
  
 