

let dinnerFood = ["salad", "soup", "burger"];


let breakfastFood = ["eggs", "cereal", "fruit"];

console.log(`From array: ${breakfastFood}`);
console.log(`To array: ${dinnerFood}`);

function moveItem(itemToMove, fromArray, toArray) {
    //check to see if item in array and if not move it


    if (fromArray.includes(itemToMove) && !toArray.includes(itemToMove)) {
        // array only move it if first array contains it and 2nd one does not otherwise skip it
        function extractItem() {
            function isItem(currentItem) {
                //if the two items are the same 
                //then return the item to the caller
                return itemToMove === currentItem;
            }

            let theItem = fromArray.find {
                function isItem(currentArrayItem) {
                    return item === currentArrayItem;
                    //if the two items are the same
                    //then return the item to the caller

                }
            //find returns true if finds item, otherwise undefined

        };
        let theItem = fromArray.find(isItem);
        //item is in array so..
        let index = fromArray.indexOf(itemToMove);//gives index of the item so we can pluck it out
        //say we want to remove "soup"["salad", "soup", "burger"]--can use slice
        //let end =dinnerFood.slice(2)would give us just casserole
        //let start = innerFood.slice(0,1) would give us just salad
        //to put these together you can use .concat and you have array minus item in middle
        let start = fromArray.slice(0, index);//items before what we want to move
        let end = fromArray.slice(index + 1); //items after what we want to move


        fromArray = start.concat(end);//from array has been changed
        return theItem;
    }
    toArray.push(theItem);//to array has been changed

    console.log(`From array: ${fromArray}`);
    console.log(`To array: ${toArray}`);

    return true; //(see if it works)
} else if (fromArray.includes(itemToMove)) {


}
return false;
}

moveItem('eggs', breakfastFood, dinnerFood);

console.log(`From Array: ${breakfastFood}`);

