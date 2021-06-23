function showStatus(isTerri) {
    return (isTerri ? 'Happy' : 'Angry');
}

console.log(showStatus(true));
// expected output: "Happy"

console.log(showStatus(false));
// expected output: "Angry"

console.log(showStatus(null));
  // expected output: "Angry"