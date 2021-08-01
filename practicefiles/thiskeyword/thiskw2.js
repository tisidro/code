let stringCaps = {
    phrase: "i love pizza!",

    capitalize: function () {
        return (
            this.phrase.charAt(0).toUpperCase() + this.phrase.slice(1).toLowerCase()
        );
    },

    rant: function () {
        return this.phrase.toUpperCase() + "!!!";
    },
};

let loudPhrase = stringCaps.capitalize();
let shoutedPhrase = stringCaps.rant();

console.log(loudPhrase);
console.log(shoutedPhrase);