//this time we will rebuild using an object that acts like a state machine --an object that can manage its own state
//constructor and 3 methods

class StopLight {
    constructor(color) {

        let validColors = ["red", "green", "yellow"];

        if (validColors.includes(color)) {
            this.color = color;

        }
        else {
            this.color = "green";
        }

        //this.color = color || "green"; code above makes it more robust

    }

    enterState(newColor) {
        if (this.canChangeTo(newColor)) {
            this.color = newColor;
        } else {
            console.log(`Invalid state transition attempted - from  ${this.color} to ${newColor}`)
            //alternative - throw "Invalid state transition attempted - from " + this.color + " to " + newColor;
        }
    }


    canChangeTo(newColor) {
        let validTransitions = {
            green: ["yellow"],
            yellow: ["red"],
            red: ["green"]
        }
        let allowed = validTransitions[this.color];
        if (allowed.includes(newColor)) {
            return true;
        }
        else {
            /*throw {
                "invalid State transition attempted from " + this.color + " to " + newColor*/
            return false;
        }
    }
}

let myLight = new StopLight("green");


console.log("State is: ", myLight.color);
myLight.enterState("yellow");

console.log("State is: ", myLight.color);
myLight.enterState("red");

console.log("State is: ", myLight.color);
myLight.enterState("green");

console.log("State is: ", myLight.color);
myLight.enterState("blue");

console.log("state is now: ", myLight.color);

console.log("Now the program is done!");