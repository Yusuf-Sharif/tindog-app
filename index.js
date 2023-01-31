
import {dogs} from '/modules/data.js'
import Dog from '/modules/Dog.js'
import {render} from '/modules/utils.js'


render()

const divCrossBtn = document.getElementById("div-cross-btn");
const divHeartBtn = document.getElementById("div-heart-btn");

const imgNopeMsg = document.getElementById("img-nope-msg");
const imgLikeMsg = document.getElementById("img-like-msg");

const section2 = document.getElementsByClassName("section-2")[0]


let isWaiting = false;


const displayMsg = msgId => {
  document.getElementById(msgId).style.display = "block";
 
}


divCrossBtn.addEventListener("click", function() {
  displayMsg("img-nope-msg");

  setTimeout( () => {
    render();
  }, 2000)
  

})

divHeartBtn.addEventListener("click", () => {
  displayMsg("img-like-msg");

  setTimeout( () => {
    render();
  }, 2000)

})




const Rex = new Dog(dogs[0]);
const Bella = new Dog(dogs[1]);
const Teddy = new Dog(dogs[2]);




export {section2, Rex, Bella, Teddy}

section2.innerHTML = Rex.getProfileHtml();

// console.log(Rex.getProfileHtml())