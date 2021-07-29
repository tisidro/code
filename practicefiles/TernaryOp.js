//sytax for ternary-- condition ? iftrue : ifFalse

let soup = "Tomato Bisque"

let customerOk = false;
//if = true you get 'we have tomato bisque for you today!'
//if false "No soup for you!"

let soupAccess = customerOk ? `We have ${soup} for you today!` : "No soup for you!";

console.log(soupAccess);
