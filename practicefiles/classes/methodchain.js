//You can also chain methods together instead of listing them all out when you call them but you need to use "return this;" after your function
//we're also adding a score keeper here

class User {


    constructor(email, name) {

        this.email = email;
        this.name = name;
        this.score = 0; //initialize first score to zero
    }


    login() {
        console.log(this.email, 'just logged in');

        return this;
    }

    logout() {
        console.log(this.email, 'just logged out');

        return this;

    }

    updateScore() {
        this.score++;
        console.log(this.name, "score is now", this.score);
        return this;
    }

}

let userOne = new User("terri", "terri@email.com");

let userTwo = new User("tina", "tina@email.com");


userOne.login().updateScore().updateScore().logout();
userTwo.login().updateScore().updateScore().updateScore().logout();