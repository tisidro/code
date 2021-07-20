
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
    console.log(state + " is short for", states[state])
}

//or object.keys takes in object and get out object's keys see file 13a


