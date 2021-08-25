//classes are used with constructor functions and the new keyword to create multiple objects with properties more easily--automates it!

//this creates the class, notice that the name of the class is Capitalized!

class User {

    //constructor function which creates our objects

    constructor(email, name) {

        this.email = email;
        this.name = name;
    }

}

let userOne = new User("terri", "terri@email.com");

let userTwo = new User("tina", "tina@email.com");

console.log(userOne);
console.log(userTwo);