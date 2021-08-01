class Place {
    constructor(location, description, canChangeTo) {
        this.location = location;
        this.description = description;
        this.canChangeTo = canChangeTo;
    }
}

//object
let home = new Place("home", "You are home where your dogs are hungry.", [
    "walkway",
]);
let walkway = new Place("walkway", "Walking down a sidewalk.", [
    "home",
    "store",
]);
let store = new Place(
    "store",
    "You are at the store and already know you forgot something.",
    ["walkway"]
);
let bar = new Place("bar", "Where everyone knows your name.", ["walkway"]);
//create state object
let currentLocation = {
    home: { canChangeTo: ["walkway"] },
    walkway: { canChangeTo: ["home", "store"] },
    store: { canChangeTo: ["walkway"] },
};

let currentState = home;

function moveLocation(newLocation) {
    let validTransitions = currentState.canChangeTo;
    if (validTransitions.includes(newLocation.location)) {
        console.log(
            `Moving from ${currentState.location} to ${newLocation.location}`
        );
        currentState = newLocation;
    } else {
        throw (
            "Invalid state transition attempted - from " +
            currentState.location +
            " to " +
            newLocation.location
        );
    }
    console.log(currentState.description);
}

moveLocation(walkway);
moveLocation(store);
moveLocation(walkway);
moveLocation(home);
moveLocation(bar);

//will throw an error b/c you can't go straight from home to bar