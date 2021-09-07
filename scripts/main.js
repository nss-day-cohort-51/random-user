console.log("You look marvelous!")

import { getRandomUser } from "./data/DataManager.js";
import { dataList } from "./data/dataList.js";


const getUser = () => {
    const dataElement = document.querySelector(".userList");
    getRandomUser().then((allData) => {
        dataElement.innerHTML = dataList(allData.results);
    })
}

getRandomUser();


getUser();


