//testing switch statements--WHY does this code not work?????
//FIXED: I had a answer: "first" instead of answer = "first"--d'oh!

function myTestSwitch(num) {
    var answer = "";
    switch (num) {
        case 1:
            answer = "first";
            break;
        case 2:
            answer = "second";
            break;
        case 3:
            answer = "third";
            break;
    }

    return answer;
}


console.log(myTestSwitch(1))



