// class User {
//     constructor(data) {
//         Object.assign(this, data)

//     }


//         //methods go here
        

//         getProfileHtml() {
//             const { firstNameValue, lastNameValue, emailValue, genderValue, dateOfBirthValue } = this;
//             return `
//                 <div>
//                     <h1>This is the profile page</h1> 
//                     <p>${firstNameValue} ${lastNameValue} ${emailValue} ${genderValue} ${dateOfBirthValue}</p>
//                 </div>`
                
//         }
// }



function User(data) {
    Object.assign(this, data)

    this.numberOfFriends;

    this.getProfileHtml = () => {
        const { firstNameValue, lastNameValue, emailValue, genderValue, dateOfBirthValue } = this;
        return `
            <div>
                <h1>This is the profile page</h1> 
                <p>${firstNameValue} ${lastNameValue} ${emailValue} ${genderValue} ${dateOfBirthValue}</p>
            </div>`
    }
}

export default User;