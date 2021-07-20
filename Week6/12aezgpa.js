let grades = {
    'midterm': 3.3,
    'project': 4.0,
    'final': 3.2
}

function gpa(object) {

    return (object.midterm + object.project + object.final) / 3

}

console.log('The GPA is ' + gpa(grades));
