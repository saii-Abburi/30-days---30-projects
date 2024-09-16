var nameError = document.getElementById("name-error");
var PhoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");




function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write Full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhone(){

    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        PhoneError.innerHTML = "Phone no is required";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML = "Only digits";
        return false;
    }

    if(phone.length !== 10){
        PhoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }

    PhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}



function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    if(message.length == 0){
        messageError.innerHTML = "Message is required";
        return false;
    }
    var left = required- message.length;
    if(left>0){
        messageError.innerHTML = `${left}Characters are required!`;
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


// function validateSubmit(){
//     if(!validateName() || !validatePhone() || !validateEmail()|| !validateMessage()){
//         submitError.innerHTML = "Please Fix the Error to submit";
//         return false;
//     }
//     setTimeout(() => {
//         submitError.innerHTML = '';
//     }, 3000);
//     return true;

// }


function validateSubmit(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        
        submitError.innerHTML = "Please fix the errors to submit";
        
        setTimeout(() => {
            submitError.innerHTML = "";
        }, 3000);
        return false;
    }

    return true;
}
