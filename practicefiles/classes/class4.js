class WalkPath {
    constructor() {
        this.currentLocation = "home"
        this.home = {
            canChangeTo: ["walkway"],
            description: "my house on 2012 Hortonville Rd.",
        }
        this.walkway = {
            canChangeTo: ["store", "home"],
            description: "the lonely streets of Mount Holly",
        }
        this.store = {
            canChangeTo: ["walkway"],
            description: "the walmart 30 miles away from my house",
        }
    }

    moveLocation(location) {
        let validTransitions = this[this.currentLocation].canChangeTo;
        if (validTransitions.includes(location)) {
            console.log(`\nMoving from ${this.currentLocation} to ${location}`);
            this.currentLocation = location;
            console.log(`${this[this.currentLocation].description}`);
        } else {
            throw "Invalid pathway enter:" + currentLocation + "to" + location;
        }
    }
};

let walkPath = new WalkPath();

walkPath.moveLocation("walkway");
walkPath.moveLocation("store");
walkPath.moveLocation("walkway");
walkPath.moveLocation("home");