let count = 1;

function taterLoop() {
    if (count === 4) {
        console.log(count + "!")
    }
    else if (count === 8) {
        console.log(count + "!")
    }
    else {
        console.log(count + "potato")
    }
    return taterLoop;
}

for (let line = 1; line <= 8; line++) {

    console.log(taterLoop())
}


console.log(taterLoop())