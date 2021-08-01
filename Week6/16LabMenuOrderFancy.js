/*async function start(){
    let order = [];
    let customerOrder = await ask("Welcome to the Good Burger.  Home of the Good Burger!! \n Can I take your order? ");
    order = customerOrder.split(" ");
    console.log(order);
    
}
*/
//gather answers from person, put them into separate variables and pass to object constructor, call new and object you want to make. Also can use an array and array destructuring (look it up)

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

start();

async function start() {
    console.log("Welcome to the drive up!")

    let myOrder = await ask("Please enter your order by typing the menu item. If you want more than one of anything, type it in that many times (i.e. - fries fries means 2 orders of fries)\n");
    console.log(`You entered: ${myOrder}, is that right?`);

    while (myOrder === "yes" || myOrder === "y") {

        menu = {
            burger: 5.00,
            fries: 3.50,
            shake: 1.11,
            salad: 4.25
        };

        var total = 0;

        for (var cost in menu) {
            total += menu[cost];
        }  //calculate total here, I know I might have to add object.hasOwnProperty but where do I add it?

        console.log(`Awesome! Your order comes to ${total}, please pull up to the first window to pay`);//insert total as template literal

        break;
    }


    if (myOrder === "no" || myOrder === "n") {

        let userRetry = await ask(`Sorry about that. Please re-enter your order.`);

        console.log(`You entered: ${userRetry}, is that right?`);

        if (userRetry === "yes" || userRetry === "y") {
            var total = 0;

            for (var cost in menu) {
                total += menu[cost];
            }  //calculate total here, I know I might have to add object.hasOwnProperty but where do I add it?

            console.log(`Awesome! Your order comes to ${total}, please pull up to the first window to pay`);//insert total as template literal

        }

        if (userRetry === "no" || userRetry === "n") {

            let userHiLow = await ask("I did not understand your input, please start over.");
            process.exit();

        }

        else if (userAnswer !== "no" || userAnswer !== "n" || userAnswer !== "yes" || userAnswer !== "y") {

            let userHiLow = await ask("I did not understand your input, please start over.");
            process.exit();
        }

    }
}
