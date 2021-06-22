/*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
  
  Rewrite using ? or || so it's one line*/

function checkAge(age) {
  return (age > 18 ? 'old enough, come on in' : 'did parents allow you');
}

console.log(checkAge(100))

function checkAge(age) {
  return (age > 18) || 'Did parents allow you?';
}


console.log(checkAge(10))