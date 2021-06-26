

function aFun() {
    isVar = "a Var";
    var isVar;
    console.log(isVar);
}
aFun()

//method 2 below still works because variables and function declarations are hoisted to the top of their scope


var isVar;

function aFun() {
    isVar = "a Var";

    console.log(isVar);
}
aFun()

//hence we can access isFun() before it is declared in our code due to hoisting

isFunct();

function isFunct() {
    console.log("a function");
}

