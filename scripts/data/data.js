export const userHTML = (userObj) => {
  console.log(userObj);
  return `<div id="userClass">
                <img class="userPic" src="${userObj.picture.large}">
                <li class="userList">
                    <ul class="randomUser">Name: ${userObj.name.title} ${userObj.name.first} ${userObj.name.last}</ul>
                    <ul class="randomUser">Gender: ${userObj.gender}</ul>
                    <ul class="randomUser">DOB: ${userObj.dob.date} / Age: ${userObj.dob.age}</ul>
                    <ul class="randomUser">Telephone: ${userObj.cell}</ul>
                </li>    
            </div>`;
};
