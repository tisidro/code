class Place {
    constructor(location, description, canChangeTo) {
        this.location = location;
        this.description = description;
        this.canChangeTo = canChangeTo;
    }
}

//object
let home = new Place("home", "at home with the kitties.",
    ["walkway"]);

let walkway = new Place("walkway", "Walking on a sidewalk.", ["home", "store"]);

let CVS = new Place("CVS",
    "You are at the CVS getting chocolate.", ["walkway"]
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
moveLocation(CVS);
moveLocation(walkway);
moveLocation(home);
moveLocation(bar);