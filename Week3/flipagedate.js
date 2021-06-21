/*Can you write the inverse function; one that takes a number of seconds and tells you the exact age?

You can get the current date by calling Date.now() which will give you a time in milliseconds, and the date you were born by creating a new Date object. 

You can then figure out the time that's elapsed in milliseconds by subtracting the date you were born from the current date

let date = new Date(1992, 05, 12, 3, 14)

/new Date(year, month, day, hour, minute)

let ageInMilliSec = Date.now() - date

console.log(date)

let ageInMilliSec = (date)

let ageCalc = (age) => age * 365 * 24 * 60 * 60;*/



function ageCalc(num) {
    let secondsInMin = 60
    let minInHour = 60
    let hrInDay = 24
    let dayInYr = 365.25
    let secInYr = secondsInMin * minInHour * hrInDay * dayInYr
    let ageInSec = (num * secInYr) / ageInSec

    return ageInSec

}

console.log(ageCalc(57)) //To flip it you could simply divide the`num` variable by`secInYr`

//console.log(ageCalc(57))