
import { apiCall } from "./apiCall.js";
import { info } from "./userList.js";

const btn = document.querySelector('main')


export function clicked(){
btn.addEventListener('click', (event) =>

{
    event.preventDefault()
    if(event.target.id === 'random')
    {
        const randomDisplay = document.querySelector('.random-display')

        let displayData = ""
        apiCall()
        .then(data =>
            {
            
            displayData +=info(data)
            
            randomDisplay.innerHTML = displayData

            } )
    }
}
)

}