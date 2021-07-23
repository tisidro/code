
let stringUtils = {
    //capitalize is a property on the object but instead of like a word it's = to a function
    phrase: 'i love pizza!',//property of string utils


    capitalize: function () {
        return this.phrase.charAt(0).toUpperCase + word.slice(1).toLowerCase();
    },

    rant: function (opinion) {
        return this.phrase.toUpperCase() + word.slice(1).toLowerCase()
    },
};

let loudPhrase = stringUtils.capitalize();
let shoutedPhrase = stringUtils.rant;

console.log(loudPhrase);
console.log(shoutedPhrase);