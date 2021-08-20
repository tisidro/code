let content = document.getElementById("content");
let button = document.getElementById("show-more")

button.onclick = function () {

    if (content.className == "open") {
        //shrink text box

        content.className = "";
        button.innerHTML = "Show More";

    } else {
        //expand text box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};

let myMessage = document.getElementById("message");

function showMessage() {
    myMessage.className = "show";
}

//timer to call function after certain time using setTimeout

setTimeout(showMessage, 2000);

let colorChanger = document.getElementById("color-changer");

let colors = ["blue", "yellow", "purple"];
let counter = 0;//counts position  you are in when in the array 0=blue, 1=yellow, 2= purple

function changeColor() {

    if (counter >= colors.length) {

        counter = 0; //resets counter to zero after it goes thru length of array
    }

    colorChanger.style.background = colors[counter];
    counter++;
}

setInterval(changeColor, 2000)//calls the changeColor function every 3000 ms or 3 sec

