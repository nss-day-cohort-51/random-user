import { data } from "./data.js"

export const dataList = (allData) => {
    let dataHTML = "";
    for (const dataObject of allData){
        dataHTML += data(dataObject)
    }
    return dataHTML;
}