import Dog from '/modules/Dog.js';
import {dogs} from '/modules/data.js'
import { section2 } from '/index.js';


let counter = 0;

const render = () => { 
    section2.innerHTML = new Dog( dogs[counter] ).getProfileHtml()
    counter++
}

export {render}

