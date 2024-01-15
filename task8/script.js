let userName = 'hind';
// Ternary expression to decide what to do based on user input
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball
let userQuestion ='what s the question?';

// Write a console.log() for the userQuestion, stating what was asked. You can include the user's name in the console.log() statement if you wish!
console.log(`The question posed by ${userName} is: ${userQuestion}`);

// We need to generate a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

// Create one more variable named eightBall and set it equal to an empty string.
let eightBall = '';

// We need to create a control flow that takes in the randomNumber we made in step 4, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = '';
}

// Write a console.log() to print the Magic Eight Ball's answer, the value of the eightBall variable.
console.log(`The Magic Eight Ball's answer is: ${eightBall}`);
