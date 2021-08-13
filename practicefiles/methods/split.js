//splits a string and puts the pieces into an array

var tags = "ham, salami, pork, chicken"
//to split the string so each meat is in its own little pocket in an array

var tagArray = tags.split(",")
//this will split the string at each comma and put the items separated by a comma into an ARRAY

console.log(tagArray)
//produces [ 'ham', ' salami', ' pork', ' chicken' ]