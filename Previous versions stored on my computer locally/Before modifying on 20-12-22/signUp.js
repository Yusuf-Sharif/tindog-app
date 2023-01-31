import userData from '/userData.js'


let firstNameValue;
let lastNameValue;
let emailValue;
let genderValue;
let dateOfBirthValue;





const storeFormValuesInVariables = () => {
    
    
    console.log("button clicked!");
    
    
    firstNameValue = document.getElementById("firstName").value;
    lastNameValue = document.getElementById("lastName").value;
    emailValue = document.getElementById("email").value;
    genderValue = document.getElementById("gender").value;
    dateOfBirthValue = document.getElementById("dateOfBirth").value;
    let valueArray = [firstNameValue, lastNameValue, emailValue, genderValue, dateOfBirthValue]

    let user1 = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        gender: genderValue,
        dateOfBirth: dateOfBirthValue
    }

    
    console.log(user1)
    

    // valueArray.map( value => {
    // console.log(value) 
    // })

    
}


