//state machine with constructor

class StopLight {
    constructor(color) {
        let validColors = ["red", "green", "yellow"];
        if (validColors.includes(color)) {
            this.color = color;
        } else {
            this.color = "green";
        }
    }

    enterState(newColor) {
        if (this.canChangeTo(newColor)) {
            this.color = newColor;
        } else {
            console.log(
                "Invalid state transition attempted - from " +
                this.color +
                " to " +
                newColor
            );
            /* Alternative
             throw (
              "Invalid state transition attempted - from " +
              this.color +
              " to " +
              newColor
             )
            */
        }
    }

    canChangeTo(newColor) {
        let validTransitions = {
            green: ["yellow"],
            yellow: ["red"],
            red: ["green"],
        };

        let allowed = validTransitions[this.color];

        if (allowed.includes(newColor)) {
            return true;
        } else {
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
console.log("State is: ", myLight.color);

console.log("Now the program is DONE!")