var data = {
    cat1: "tina",

    cat2: "finny",

    cat3: "blackie",

    "adorable": true
}

console.log(data["adorable"])

for (var elem in data) {
    console.log(elem, data[elem]);
    console.log(elem);
    console.log(data[elem]);
}

console.log(elem)