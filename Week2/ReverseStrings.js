function reverseString(str) {

    var splitString = str.split(""); //splits word into array of letters 

    var reverseArray = splitString.reverse(""); // reverses the array


    var joinArray = reverseArray.join(""); // joins the letters back together


    return joinArray;
}

console.log(reverseString("whatever"));

console.log("1" + 2)


