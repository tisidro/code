const people = [
    {
        fName: 'John',
        lName: 'brown'
    },

    {
        fName: 'Tina',
        lName: 'gray'
    }
];

/*const names = people.map(function (currentElement, index, arr))
 {
return something
}
*/

const names = people.map(function (person) {
    return `${person.fName} ${person.lName}`
});

console.log(names)