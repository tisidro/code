let states = {
    'VT': 'Vermont',
    'CA': 'California',
    'MA': 'Massachusetts',
    'NY': 'New York',
    'WY': 'Wyoming'
}

for (let shortName in states) {
    if (states.hasOwnProperty(shortName)) {
        let longName = states[shortName];
        console.log(`${shortName} is short for ${longName}`);
    }
}
//EXPLANATION
  //shortname refers to abbreviation
  //if in the object states there is a property shortName
  //let the key for longName equal the value of shortname in states
  //log "shortName is short for (value which is gonna be the long name"