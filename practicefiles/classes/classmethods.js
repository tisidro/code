//You can also add methods when you construct objects using class

class User {


    constructor(email, name) {

        this.email = email;
        this.name = name;
    }
    //add methods OUTSIDE constructor and do NOT need to separate with commas!

    login() {
        console.log(this.email, 'just logged in');
    }

    logout() {
        console.log(this.email, 'just logged out');
    }

}

let userOne = new User("terri", "terri@email.com");

let userTwo = new User("tina", "tina@email.com");

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.login();

userOne.logout();
userTwo.logout();