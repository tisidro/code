
//practical example using loop to cycle through elements (links) on a page

let links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {

    links[i].className = "link-" + i;

    //each time you iterate through the loop, give the link a class name

}