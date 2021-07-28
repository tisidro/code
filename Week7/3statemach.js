let states = {
    "green": { canChangeTo: ["yellow"] },
    "yellow": { canChangeTo: ["red"] },
    "red": { canChangeTo: ["green"] }
}

let currentState = "green";

function enterState(newState) {
    let validTransitions = states[currentState].canChangeTo; //look up current state and see what it can change to
    if (validTransitions.includes(newState)) {
        currentState = newState;
    } else {
        throw "Invalid state transition attempted - from " + currentState + " to " + newState;
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


//prevents us from misusing program