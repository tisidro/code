//this kw with different objects on same function produce different values

function myIntro() {
    return `Hi, I'm ${this.name}`
}

const me = {
    name: "Terri",
    myIntro
}

const you = {
    name: "Tina",
    myIntro
}

console.log(me.myIntro());

console.log(you.myIntro());