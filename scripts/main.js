import { fetchRandomUser } from "./data/datamanager.js";
import { userHTML } from "./data/data.js";

const showUser = () => {
  //Get a reference to the location on the DOM where the nav will display
  const entryElement = document.querySelector(".userInfo");
  fetchRandomUser().then((apiUser) => {
    entryElement.innerHTML = userHTML(apiUser);
  });
};

showUser();
