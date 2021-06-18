let hash = "#"

while (num < 8) {

    console.log(hash);

    num++;

    //why does it infinite loop when you change this to num ++? I thought that would continue to increment 1 just like typing +1

    hash = hash + "#";
}
