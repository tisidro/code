//interactive version of the library lookup!

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

let library = [
    {
        title: "A Wizard of Earthsea",
        tags: ['fantasy', 'ursula k. le guin']
    },
    {
        title: "Thing Explainer",
        tags: ["science", "technology", "humor", "randal munro"]
    },
    {
        title: "The Fellowship of the Ring",
        tags: ["fantasy", "jrr tolkien"]
    },
    {
        title: "A Brief History of Time",
        tags: ["history", "science", "stephen hawking"]
    },
    {
        title: "The Great Fairy Tale Tradition",
        tags: ["fairy tale", "history", "jack zipes"]
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        tags: ["science fiction", "humor", "douglas adams"]
    },
    {
        title: "The Silmarillion",
        tags: ["fantasy", "mythology", "jrr tolkien"]
    },
    {
        title: "Eloquent JavaScript",
        tags: ["programming", "technology", "marijn haverbeke"]
    }
];


async function search() {
    let tag = await ask("What are you filtering for? ");

    function tagPrinter(obj) {
        let objTags = obj.tags;
        let objTitles = obj.title;

        if (objTags.includes(tag)) {
            return objTitles;
        }
    }

    let booksTagged = library.filter(tagPrinter).map(tagPrinter);

    console.log(booksTagged)
    process.exit()
}

search();