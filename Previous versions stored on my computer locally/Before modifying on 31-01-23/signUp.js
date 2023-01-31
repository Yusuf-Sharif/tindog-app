import User from '/User.js'



let userAges = [1, 7, 5];

console.log(userAges.reduce( (total, currentValue)  => {
    return total  + currentValue;
}))


const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)




const btnSignUp = document.getElementById("btn-sign-up")

const logInputValues = () => {

    const signUpSuccessful = () => {
        setTimeout( () => {
            alert("Sign up successful")
        }, 1000 )
    }

    const userAge = getAge(document.getElementById("dateOfBirth").value)
    console.log(userAge)

    userAge < 18 ? alert(`Sorry, you are not old enough to use this. You are 
    ${userAge} years old!`)
        : userAge > 65 ? alert(`You are not young enough to use this. You are ${userAge} years old!`) 

        : !userAge ? alert("Error: please enter your date of birth") 
        : signUpSuccessful();





    const data = {
        firstNameValue: document.getElementById("firstName").value,
        lastNameValue: document.getElementById("lastName").value,
        emailValue:  document.getElementById("email").value,
        genderValue: document.getElementById("gender").value,
        dateOfBirthValue: document.getElementById("dateOfBirth").value
        }

    const newUserProfile = new User(data);
    newUserProfile.numberOfFriends = 5;


    const friends = ["🙂", "😡", "😂", "😉", "😢"]

    const chats = new Array(newUserProfile.numberOfFriends).fill(0).map( friend => {
        
        
        return  `
        <div class="chat-container">
            <div class="f-row">
                <span class="emoji">${friends.shift()}</span>
                <p>Lori Ipsum</p>
            </div>    
        </div>`
    })

    console.log(chats)

    


    

    // document.body.innerHTML = newUserProfile.getProfileHtml()
    // document.body.innerHTML = chats;

}



btnSignUp.addEventListener("click", logInputValues)

export {logInputValues}








// const storeFormValuesInVariables = () => {
    
    
//     console.log("button clicked!");
    
    
//     firstNameValue = document.getElementById("firstName").value;
//     lastNameValue = document.getElementById("lastName").value;
//     emailValue = document.getElementById("email").value;
//     genderValue = document.getElementById("gender").value;
//     dateOfBirthValue = document.getElementById("dateOfBirth").value;
//     let valueArray = [firstNameValue, lastNameValue, emailValue, genderValue, dateOfBirthValue]

//     let user1 = {
//         firstName: firstNameValue,
//         lastName: lastNameValue,
//         email: emailValue,
//         gender: genderValue,
//         dateOfBirth: dateOfBirthValue
//     }

    
//     console.log(user1)
    

//     // valueArray.map( value => {
//     // console.log(value) 
//     // })

    
// }


