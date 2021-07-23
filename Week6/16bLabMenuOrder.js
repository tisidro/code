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

    console.log(`You entered: ${myOrder}`);

    let menu = {
        burger: 5.00,
        fries: 3.50,
        shake: 1.11,
        salad: 4.25
    };

    var total = 0;


    for (var cost in menu) {
        total = myOrder.forEach + menu[cost];
    }
    console.log(`Your order comes to ${total}, please pull up to the first window to pay`);

}
 //calculate total here, I know I might have to add object.hasOwnProperty but where do I add it?





