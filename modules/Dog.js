



class Dog {

    constructor(data) {
      // Properties
      Object.assign(this, data)
      
    }


    // Methods
    getProfileHtml() {
      const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
      

      return `
      <div class ="div-msg">
        <img src="images/nope-image.png" alt="nope image" class="img-msg" id="img-nope-msg">
        <img src="images/like-image.png" alt="like image" class="img-msg" id="img-like-msg">
        
      </div>

      <img src="${avatar}" alt="profile picture" class="profile-image">

      <div class="profile-meta-data">
        <h3>${this.name}, ${age}</h3>
        <p>${bio}</p>
      </div>
      `
    }

}

export default Dog;


        // <div class ="div-msg">
        //   <img src="images/nope-image.png" alt="nope image" class="img-msg" id="img-nope-msg">
        //   <img src="images/like-image.png" alt="like image" class="img-msg" id="img-like-msg">
          
        // </div>

        // <img src="${avatar}" alt="profile picture" class="profile-image">

        // <div class="profile-meta-data">
        //   <h3>${this.name}, ${age}</h3>
        //   <p>${bio}</p>
        // </div>