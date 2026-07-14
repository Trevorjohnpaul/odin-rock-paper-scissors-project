// ROCK PAPER SCISSORS GAME BUILT WITH JAVASCRIPT BY :TREVOR JOHNPAUL #TJ
  const computerScore=0;
  const userScore=0;

  // Function to get The Computer's Choice
   function getComputerChoice(){
    const computerChoice=['rock','paper','scissors'];
    const randomIndex=Math.random()*computerChoice.length;
    return computerChoice[Math.floor(randomIndex)];
   }

   // Function to get The User's Choice
   function getUserChoice(){
    const userChoice=prompt("Enter Your Choice:rock,paper,scissors:");
    return userChoice.charAt(0).toUpperCase()+userChoice.slice(1).toLowerCase();
   }
 
  //Function to Determine the winner of the game
  function playRound(userChoice,computerChoice){
    if (userChoice===computerChoice){
        return "It's a tie!";
    }
    if(userChoice==="Rock" && computerChoice==="Scissors" || userChoice==="Paper"  && computerChoice==="Rock"|| userChoice==="Scissors" && computerChoice==="Paper"){
        return "You Win!";
    }
    return "You Lose!";
  }
  const userChoice=getUserChoice();
  const computerChoice=getComputerChoice();
  const result=playRound(userChoice,computerChoice);


   console.log("Computer's Choice:"+computerChoice);
   console.log("User's Choice:"+userChoice);
   console.log("Result:"+result);
