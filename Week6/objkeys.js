
let states = {

    'VT': 'Vermont',
    'CA': 'California',
    'MA': 'Massachusetts',
    'NY': 'New York',
}

states.WY = "Wyoming"
states["FL"] = "Florida"
states.VT = "The Green Mountain State"

let stateKeys = Object.keys(states); //this returns an array containing the keys in the object "states"



console.log(stateKeys)