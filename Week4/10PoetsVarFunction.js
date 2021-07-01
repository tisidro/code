let poet = 'Robert Frost';

function famousPoem(poet) {
    let poemAuthors = {
        'Robert Frost': 'Stopping by Woods on a Snowy Evening',
        'Walt Whitman': 'Leaves of Grass',
        undefined: 'The Lanyard', // Billy Collins
    };

    function findAuthor(poet) {
        // looks up the poem by author
        return poemAuthors[poet];
    }

    return findAuthor(poet);
}


console.log(famousPoem('Walt Whitman')); // Which Poem?

console.log(famousPoem(poet)); // Which Poem?

poet = 'Maya Angelou';
console.log(famousPoem()); // Which Poem?