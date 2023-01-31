import {dogsArray} from '/data.js'
import {section2} from '/index.js'
import Dog from '/Dog.js'
import {Rex} from '/index.js'
import {Bella} from '/index.js'
import {Teddy} from '/index.js'
import {dogs} from '/data.js'


const render = () => {
    dogsArray.shift();

    if (dogsArray.length === 3) {
        section2.innerHTML = Rex.getProfileHtml()


}
    else if(dogsArray.length === 2) {
        section2.innerHTML = Bella.getProfileHtml()
    }

     else if (dogsArray.length === 1) {

        section2.innerHTML = Teddy.getProfileHtml()
     }
    }

    
export {render}