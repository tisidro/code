//accessing items inside each array -- it's an array w two arrays in it


let fruits = [
    ["apple", "cherry", "banana"],
    ["kiwi", "pear", "peach"]
]

for (let arrs of fruits) {
    arrs.forEach(item => {
        console.log(item)
    })

    console.log(' ') //inserts space break between each array
}
//Prints out
/*apple
cherry
banana

kiwi
pear
peach*/