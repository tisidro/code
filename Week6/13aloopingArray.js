let abbrevs = Object.keys(states)

//for ([someItem] of [someCollection])

for (shortName of abbrevs) {
    let longName = (states(shortName))

    console.log(shortName + ' is short for ' + longName);

    let message = `${shortName} is short for ${longName}`;

    console.log(message); //another way that also works
}







let states = {
    VT: 'Vermont',
    CA: 'California',
    MA: 'Massachusetts',
    NY: 'New York',
}
