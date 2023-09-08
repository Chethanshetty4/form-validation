'use strict';

//Form Validation

var getId = (id)=>{
    return document.getElementById(id);
}

var getClasses = (classes)=>{
    return document.getElementsByClassName(classes);
}

var firstname = getId('firstname'),
lastname = getId('lastname'),
email = getId('email'),
password = getId('password'),
form = getId('myform'),
button = getId('btn'),
errMsg = getClasses('error'),
sts = getId('status');

form.style.backgroundColor = "#D0FECB";

// console.log(errMsg);  //returns HTMLCollection(4) [div.error, div.error, div.error, div.error]

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    var fnameValid = customValidator(firstname, 0, 'First name is mandatory.')
    var lnameValid = customValidator(lastname, 1, 'Last name is mandatory.')
    var emailValid = customValidator(email, 2, 'Email is mandatory.')
    var passwordValid = customValidator(password, 3, 'Password is mandatory.')

    // console.log(fnameValid + " " + lnameValid + " " + emailValid + " " + passwordValid);

    if(fnameValid==true && lnameValid==true && emailValid==true && passwordValid==true){
        var finalObject = {};
        finalObject['firstname'] = firstname.value;
        finalObject['lastname'] = lastname.value;
        finalObject['email'] = email.value;
        finalObject['password'] = password.value;

        localStorage.setItem('userinfo', JSON.stringify(finalObject))

        sts.textContent = "Submitting the from. Please wait!!";

        setTimeout(() => {
            sts.textContent = "Form submitted successfully";
        }, 3000);
    }
})

function customValidator(documentRef, classId, errorMessage){
    if (documentRef.value.trim() == '') {
        documentRef.style.border = "1px solid red";
        errMsg[classId].textContent = errorMessage;
        errMsg[classId].style.color = "red";
        return false;
    }
    else{
        documentRef.style.border = "1px solid green";
        errMsg[classId].textContent = '';
        return true;
    }
}
