//class inheritance utilizes "extends" to give a class another classes properties!

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

//here we'll create an Admin class that has the user class properties and adds a delete user method only available to the admin

class Admin extends User {

    deleteUser(user) {

        users = users.filter(u => {
            return u.email != user.email;
        })

        //“filter” is a function that cycles through all items in the array and removes them if one of those items returns false. 
        //UserTwo will be examined through all the users in the array of users and if UserTwo matches with UserTwo, it will return FALSE and Filter function deletes UserTwo. 
        //Others users don’t match (u.email not equal to user.email is TRUE) so they are kept.

    }
}

let userOne = new User("Ziggy", "ziggy@email.com");

let userTwo = new User("finny", "finny@email.com");
let admin = new Admin('Terri@email.com', 'Terri');

let users = [userOne, userTwo, admin];

//using new kw to construct a new admin user
admin.deleteUser(userTwo);//deletes userTwo

console.log(users);//shows deletion of userTwo so just ziggy and admin objects appear in the array.