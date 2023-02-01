
import {dogs} from '/modules/data.js'
import Dog from '/modules/Dog.js'
import {render} from '/modules/utils.js'

const nopeBtn = document.getElementsByClassName("nope-button")[0];
const likeBtn = document.getElementsByClassName("like-button")[0];

const nopeImageMessage = document.getElementById("nopeImageMessage");
const likeImageMessage = document.getElementById("likeImageMessage");
const section2 = document.getElementsByClassName("section-2")[0]

const displayMsg = msgId => {
  document.getElementById(msgId).style.display = "block";
 
}


nopeBtn.addEventListener("click", function() {
  displayMsg("nopeImageMessage");

  setTimeout( () => {
    render();
  }, 2000)
  

})

likeBtn.addEventListener("click", () => {
  displayMsg("likeImageMessage");

  setTimeout( () => {
    render();
  }, 2000)

})

export {section2}


render()