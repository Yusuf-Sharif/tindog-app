
import {dogs} from '/modules/data.js'
import Dog from '/modules/Dog.js'
import {render} from '/modules/utils.js'

const nopeBtn = document.getElementsByClassName("nope-button")[0];
const likeBtn = document.getElementsByClassName("like-button")[0];
const imgNopeMsg = document.getElementById("img-nope-msg");
const imgLikeMsg = document.getElementById("img-like-msg");
const section2 = document.getElementsByClassName("section-2")[0]

const displayMsg = msgId => {
  document.getElementById(msgId).style.display = "block";
 
}


nopeBtn.addEventListener("click", function() {
  displayMsg("img-nope-msg");

  setTimeout( () => {
    render();
  }, 2000)
  

})

likeBtn.addEventListener("click", () => {
  displayMsg("img-like-msg");

  setTimeout( () => {
    render();
  }, 2000)

})

export {section2}


render()