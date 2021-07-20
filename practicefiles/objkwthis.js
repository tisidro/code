const user = {
    name: "Terri",
    age: 56,
    married: false,
    purchases: ["glasses", "notebook", "pens"],

    sayName: function () {
        console.log(this.name);
    }
}
user.sayName(); //return Terri

function sayAge() {
    console.log(`My age is ${this}`); //window object is invoked here by this

}

sayAge();//window object