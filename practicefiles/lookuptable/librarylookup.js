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

function search(item) {

    let result = library.filter(word => {
        return word.tags.includes(item);
    });

    console.log(result);

};

console.log("these are fantasy results: ");

search("fantasy");

console.log("these are science results: ");

search("science");