let size = 8;
let column = 0;
let row = 0;
let output = "";

while (row < size) {

    row = row + 1;

    while (column < size) {
        column = column + 1;
        if ((column + row) % 2 !== 0)//Not understanding the logic here. Is there another way? i.e.--I would not have intuitively thought to do this. Worried about getting stumped on questions like this under pressure. Any suggestions for alternative ways to look at this?
        {
            output = output + "#";

        }
        else {
            output = output + " ";
        }
    }
    column = 0;
    output = output + "\n";
}

console.log(output);


