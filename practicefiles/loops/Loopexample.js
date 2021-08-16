
//practical example using loop to cycle through elements (links) on a page

let links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {

    links[i].className = "link-" + i;

    //each time you iterate through the loop, give the link a class name based on their link number

    //<a href= "a" class="link-1"> ,etc.

}