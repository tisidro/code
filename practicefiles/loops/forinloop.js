const names = ["Facebook", "Youtube", "Instagram"]

for (const eName of names) {
    console.log(eName);//for of logs const values in array facebook youtube instagram
}

const symbols = {
    yt: "Youtube",
    fb: "Facebook",
    ig: "Instagram",
}

for (const eName in symbols) {
    console.log(eName)//for in logs abbreviations yt fb ig
}


for (const eName in symbols) {
    console.log(symbols[eName])//for in logs values (youtube facebook instagram) if you wrap the key indicator ename in the object name symbols
}

for (const eName in symbols) {
    console.log(`key is ${eName} and value is ${symbols[eName]}`)//logs keys and values using template literal
}