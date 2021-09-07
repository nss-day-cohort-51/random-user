export const userHTML = (userObj) => {
  console.log(userObj);
  return `<div id="userClass">
                <ul class="randomUser">${userObj.email}</ul>
            </div>`;
};
