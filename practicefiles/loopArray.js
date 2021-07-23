
const myData = [
    "vermont",
    "iowa",
    "ohio",
    1950,
    "Terri",
];

let i = 0;

while (i < myData.length) {
    console.log(myData[i])
    i++
}
//prints out everything inside the array

for (let i = 0; i < myData.length; i++) {
    if (typeof myData[i] !== "string") break;
    console.log(myData[i]);

}

//prints out what's in the array but stops when it encounters a non-string

