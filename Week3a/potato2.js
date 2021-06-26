
function taterLoop() {
    let count = 1;

    while (count <= 8) {
        if (count === 4) {
            console.log(count + "!");
        }
        else if (count === 8) {
            console.log("more!");
        }
        else {
            console.log(count + "potato");
        }

        count = count + 1;
    }
}
taterLoop()