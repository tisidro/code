
var i = 0;

for (; ;) {
    if (i > 3) break;
    console.log(i);
    i++;
}

//not suggested in practice but it works! Otherwise just do...

for (i = 0; i < 4; i++) {
    console.log(i);
}
