/*
Now write the gpa function, and run node gpa!
Assume that all grades carry equal weight toward the GPA.
The answer is 3.5 ... but don't just return 3.5, make it work for real
*/

let grades = {
    'midterm': 3.3,
    'project': 4.0,
    'final': 3.2
}

function gpa() {
    let total = 0;
    for (let score in grades) {
        total = total + grades / grades.length
    }

    return total;
}


console.log('The GPA is ' + gpa());

