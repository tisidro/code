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

const names = [];

for (person of people) {
    names.push(`${person.fName} ${person.lName}`)
}
console.log(names)