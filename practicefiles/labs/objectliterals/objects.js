//encapsulating everything about this user in the object.
let userOne = {
    email: 'terri@gmail.com',
    name: 'Terri',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
userOne.logout();

