//here are several useful array  methods in action: join(), indexOf(), concat(),push(), and pop()

let string = ["terri", "tina", "finny"];

let result = string.join(","); //joins the array elements into a string separated by a comma. you can also do "-" or " " (space). whatever you want to separate the elements!

console.log(result); //terri, tina, finny



let result2 = string.indexOf("finny");//indexOf method tells you the index location of an element in the array

console.log(result2); //2 -- finny is located as element #2



let array = [1, 2, 3];

let combined = array.concat([4, 5]); //concat method adds the specified array in parentheses to the existing array

console.log(combined); //1,2,3,4,5



let array2 = [1, 2, 3];
let push = array2.push(4);//push() method adds the specified element to the end of the existing array and returns the **LENGTH** of the new array

//if you log the array though you will get the new array w/ the element added to the end

console.log(push); // 4
console.log(array2); //[1,2,3,4]

//Push() is a destructive method because it changes the value of the original element



let array3 = [1, 2, 3];
let pop = array3.pop();//pop() method removes the the last element from end of the existing array and returns the value of the element that was removed (in this case, "3")

//if you log the array though you will get the new array w/ the element removed from the end

console.log(pop); // 3
console.log(array3); //[1,2]

//Pop() is a destructive method because it changes the value of the original element