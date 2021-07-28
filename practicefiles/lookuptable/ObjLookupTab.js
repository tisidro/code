//here we will take a switch statement and convert it into a lookup table by creating an object and then we can return its keys
/*
switch (val) {
    case "alpha":
        result = "Apple";
        break;
        case "beta":
        result = "Banana";
        break;
        case "cat":
        result = "Cherry";
        break;
        case "delta":
        result = "Dragonfruit";
        break;
} */

var lookup = {
    "alpha": "apple",
    "beta": "banana",
    "cat": "cherry",
    "delta": "dragonfruit"
}

console.log(lookup["alpha"]);
console.log(lookup["beta"]);

var value = "cat";
console.log(lookup[value]);



