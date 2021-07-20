
/*In a new JS file, try to write code that outputs:

VT is short for Vermont
CA is short for California
MA is short for Massachusetts
NY is short for New York
*/

let states = {
    VT: 'Vermont',
    CA: 'California',
    MA: 'Massachusetts',
    NY: 'New York',
}

for (let state in states) {
    console.log(state)
}

//or

for (let state in states) {

    if (states.hasOwnProperty(state)) { //looks at only this property of the object not other properties flying around in the code -- properties you didn't expect-- that can screw up for in loop
        //if there were other properties added this guards

        console.log(state + " is short for", states[state])

        console.log(`${state} is short for: ${states[state]}`)
    }
}

//or object.keys takes in object and get out object's keys see file 13a


