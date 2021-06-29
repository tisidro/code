//Showing how var is scoped to function not the for loop. It is NOT block scoped!It is scoped to a function or global scope!

function greet() {
    for (var i = 0; i < 3; i++) {
        console.log("hey");//logs hey 3x
    }
    console.log(i);//logs 3
}
greet()

//const IS block scoped. It is also not immutable but its variable reference can't change

if (true) {
    const pet = "pig";
    //pet = "dog" 
    //can't put this here or you get this error: TypeError: Assignment to constant variable.
    console.log(pet);//this must be inside--block scoped
}

//if you did this w/ Var it would work


if (true) {
    var pet = "pig";
    // pet = "dog"

    console.log(pet);//it logs "dog"

}

const people = ["mary", "bob"]
//it's ok to push on to a const
people.push("terri")
console.log(people)

//when you declare a var in the global scope it is added to the window object.


//what would be the output here??
//I said undefined if var name = "John" is below console.log b/c it hasn't seen it yet. But for the 2nd console log it will log "changed name John" because it's looking at what's in the function and that's all defined

var name = "Simran";

function changeName() {
    var name = "John";
    console.log("name", name);
    //var name = "John"; **if this var goes here it will be undefined, must go above console.log

    console.log("Changed name", name);
}

changeName()

