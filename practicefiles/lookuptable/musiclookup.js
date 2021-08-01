let music = [{

    title: "The Sheltering Sky",
    tags: ['eclectic', 'King Crimson']

},
{
    title: "Le Femme D'Argent",
    tags: ['electronic', 'Air']
},
{
    title: "I Put a Spell On You",
    tags: ['blues', 'Screaming Jay Hawkins']
},

{
    title: "Machine Gun",
    tags: ['sixties', 'Jimi Hendrix']
}
];

function search(item) {
    //function to look up an item based on its tags

    let result = music.filter(word => {
        return word.tags.includes(item);
    })



    console.log(result);

};

search("Jimi Hendrix")

search("Air")