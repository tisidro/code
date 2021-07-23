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

    for (score in grades) {
        grades[score] / Object.keys(grades).length
    }

}

return console.log('The GPA is ' + gpa(grades));


