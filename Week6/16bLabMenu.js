
let orderOne = ["burger", "burger", "fries"];

let restaurant = {
    menu: {
        'burger': 5.00,
        'fries': 3.50,
        'shake': 1.11,
        'salad': 4.25
    },

    totalOrder: function (order) {
        //method inside object
        let total = 0;//starting amount is zero, start adding

        let findItem = (item) => {
            let total = 0;

            let price = this.menu[item];//.this looks up that value inside the object

            total = total + price;//this code: only add price to total if total is NOT undefined

            return total;
        };

        order.forEach(findItem);//find price for each item:for each references findItem function which is arrow function that does not have its own each

        return this.format(total);
    },

    format: function (answer) {
        //method to set number of digits--method b/c now it' sin restaurant object
        return `$${answer.toFixed(2)}`;
    },
};

let resultOne = restaurant.totalOrder(orderOne);
//let resultTwo = restaurant.totalOrder(orderTwo);

console.log(resultOne);
//console.log(resultTwo);