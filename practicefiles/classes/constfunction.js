//code showing how we can emulate classes with the constructor function...how it was done before class keyword (and relying on JS prototypes)

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function () {
        console.log(this.email, 'has logged in');
    }
}

let userOne = new User('me@gmail.com', 'me');
let userTwo = new User('you@gmail.com', 'you');

console.log(userOne);
userTwo.login();