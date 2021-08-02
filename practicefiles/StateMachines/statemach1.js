//state machine using a function and a valid state table

let states = {
    green: { canChangeTo: ["yellow"] },
    yellow: { canChangeTo: ["red"] },
    red: { canChangeTo: ["green"] },
};

let currentState = "green";

function enterState(newState) {
    let validTransitions = states[currentState].canChangeTo;
    if (validTransitions.includes(newState)) {
        currentState = newState;
    } else {
        throw (
            "Invalid state transition attempted - from " +
            currentState +
            " to " +
            newState
        );
    }
}

console.log("State is: ", currentState);
enterState("yellow");
console.log("State is: ", currentState);
enterState("red");
console.log("State is: ", currentState);
enterState("green");
console.log("State is: ", currentState);
enterState("blue");