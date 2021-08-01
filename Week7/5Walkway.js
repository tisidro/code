let walkPath = {
    home: {
        canChangeTo: ["walkway"],
        description: "my apartment on 123 Python Ave",
    },
    walkway: {
        canChangeTo: ["store", "home"],
        description: "the lonely streets of Kansas",
    },
    store: {
        canChangeTo: ["walkway"],
        description: "the walmart 15 miles away from my house",
    },
};

let currentLocation = "home";

function moveLocation(location) {
    let validTransitions = walkPath[currentLocation].canChangeTo;
    if (validTransitions.includes(location)) {
        console.log(`\nMoving from ${currentLocation} to ${location}`);
        currentLocation = location;
        console.log(`${walkPath[currentLocation].description}`);
    } else {
        throw "Invalid pathway enter:" + currentLocation + "to" + location;
    }
}

moveLocation("walkway");
moveLocation("store");
moveLocation("walkway");
moveLocation("home");
