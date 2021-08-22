
//for some reason, it will not give the error message when I click submit!
//FIXED--I forgot to put ".value" after myForm.name!


let myForm = document.forms.myForm;
let message = document.getElementById("message");

myForm.onsubmit = function () {

    if (myForm.name.value == "") {

        message.innerHTML = "Please enter a name!";
        return false;
    } else {

        message.innerHTML = "";
        return true;
    }
};