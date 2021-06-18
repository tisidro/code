/*let triResult = 1;
for (let counter = 0; counter < 7; counter = counter++)
    console.log(triResult)*/


/*function triangle(n) {
    for (x = 1; x <= n; x++) {
        let hash = "";
    }
    for (let y = 1; y <= n; y++) {

    }

    console.log(hash)
}
triangle(7)*/

/*let n = 25;

let triangle = "";

for (let x = 1; x <= n; x++) {
    for (let y = 0; y <= x; y++) {
        triangle += "#";
    }
    triangle += "\n";
}
console.log(triangle);*/



//solo attempt:

/*let num = 1
let hash = "#"

while (num < 8) {

    console.log(hash);

    num = num + 1;//why does it infinite loop when you change this to num ++? I thought that would continue to increment 1 just like typing +1

    hash = hash + "#";
}


console.log("finished");*?*/


let hash = "#"

while (hash.length <= 7) {

    console.log(hash);

    hash = hash + "#";

}

console.log("all done")
