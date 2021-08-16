//using indexOf to loop through an array and find a specific number

let myArray = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < myArray.length; i++) {
    if (myArray.indexOf(3) > 0) {
        console.log(myArray.indexOf(3));
        break;//don't forget the break or it will keep going!
    } else {

        console.log("sorry, no 3 in this array");
    }
}