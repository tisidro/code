//code to calculate gpa
//create grades object
let newGrades = {
    'midterm': 3.3,
    'project': 4.0,
    'final': 3.2,
    'summer': 4.0
}


//fat arrow function accepts grades
let gpa = (grades) => {
    //object.keys creates an array with the values from the object
    //array is term
    let term = Object.keys(grades);

    let total = 0;

    //for of loop to loop through array
    for (value of term) {
        //create variable to accept value the key holds in array
        let grade = grades[value];
        //update total with the running value of the for loop
        total = total + grade;
    }
    //update total to divide the total by the length of the array 
    //where the keys are being held
    total = total / term.length;
    //return total
    return total;
}



console.log('The GPA is ' + gpa(newGrades));