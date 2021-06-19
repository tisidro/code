let hash = "#"
let num = 1

while (num < 8) {

    console.log(hash);

    num = num + 1;

    //why does it infinite loop when you change this to num ++? I thought that would continue to increment 1 just like typing +1

    hash = hash + "#";
}
