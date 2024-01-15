//the function of the userChoice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'||userInput==='bomb') {
      return userInput;
    } 
    
    else {
      console.log('Error: Invalid choice. Please choose rock, paper, or scissors.');
    }
  }

//creation of computerFunction
const getComputerChoice=()=>{
   const number=Math.floor(Math.random()*3)
   switch(number){
    case 0 :
        return 'rock'
        break
    case 1:
        return 'paper'
        break
    case 2 :
        return 'scissors'
    
   }
}
//the function of determining the winner
const determineWinner=(userChoice,computerChoice)=>{
 if(userChoice===computerChoice){
      return 'the games was a tie'
 }
  if(userChoice==='rock'){
        if(computerChoice==='paper')
         return 'the computer won'
        else 
        return 'the user won'
  }
  if(userChoice==='paper'){
      if(computerChoice==='scissors')
      return 'the computer won'
      else
      return 'the user won'
  }
  if(userChoice==='scissors'){
     if(computerChoice==='rock')
     return 'the computer won'
     else
     return 'the user won'
}
if(userChoice==='bomb')
  return 'the user  win! (Secret cheat code activated)';
}
// finally the function which detemine who is the winner 
const playGame=()=>{
    let userChoice=getUserChoice('paper');
    console.log(`the user choice is :${userChoice}`);
    let computerChoice=getComputerChoice();
    console.log(`the computer choice is : ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice))
    
}
//start the game  :
 playGame();