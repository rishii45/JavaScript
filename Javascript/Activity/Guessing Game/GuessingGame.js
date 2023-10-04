//User enters a max number & then tries to guess a random generated number between 1 to max.

const max = prompt("Enter the Max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit") {
        console.log("user quits.Correct number was ",random);
        break;
    }

    if(guess == random) {
        console.log("You are right. Congrats! random number was ", random);
        break;
    }  else if(guess < random) {
        guess = prompt("Hint: Your guess was too small. please try again");
    } else {
        guess = prompt("Hint: Your guess was too large. please try again");
    }
}