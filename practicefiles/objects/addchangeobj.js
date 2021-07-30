//adding and changing properties and values in an object
//property = key value pair
//value is the value of a specific key in the object

states = {
    VT: "Vermont",
    NY: "New York",
    OH: "Ohio"
}
//add states to object
states.WY = "Wyoming"
states.ME = "Maine"
states['FL'] = "Florida"  //don't forget to add quotes in brackets!!

console.log(states)

states.WY = "Just some state"//changes WY value
states['FL'] = "The sunshine state"

console.log(states)
