console.log(Math.floor((Math.random() * 10) + 1)
//returns random number between 1 and 10. whatever you multiply the math.random method by it will generate a random number that many times. 

//not at all sure what the + 1 is for when appended to this method


function randomInteger(min, max) {
        let range = max - min + 1;
        return min + Math.floor(Math.random() * range);
    }

console.log(randomInteger(5, 6));



//Need help understanding this by plugging in numbers. I have tried reasoning by plugging in numbers below:

/*Round a number downward to its nearest integer:

i.e., Math.floor(1.6) would yield 2 (is this correct??);

my translation of this whole function using 5, 6 as arguments:

range = 6-5 + 1 ==> 2

return 5 + *math.Floor ==>round the number in these parentheses* ( math.Random ==> no. bet 0 and 1 x 2==> 2 is our result from range)

==> this literally makes no sense because I do not see how there is any need to round what is in the parentheses!
