//use the .getTime() to compare two dates. If you don't, you will get that two dates are not the same even if they are! 
//using .getTime() compares them both to the reference date of 1/1/1970. If they are the same in reference to that, they will check out as being the same via Javascript.

let birthday = new Date(1965, 5, 30, 12, 30, 15);
let birthday2 = new Date(1965, 5, 30, 12, 30, 15);
if (birthday === birthday2) {
    console.log("birthdays are equal");

} else {
    console.log("birthdays are not equal");
}
//logs birthday are not equal!

let bday = new Date(1965, 5, 30, 12, 30, 15);
let bday2 = new Date(1965, 5, 30, 12, 30, 15);
if (bday.getTime() === bday2.getTime()) {
    console.log("birthdays are equal");

} else {
    console.log("birthdays are not equal");
}
//logs birthday are equal!