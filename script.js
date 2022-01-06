var userScore = 0;
var computerScore = 0;
$(".play").on({
  click:function(){
  var userChoice = $(".input").val();
  userChoice = userChoice.toLowerCase();
  var computerChoice = "";
  var random = (Math.random()*10);
  console.log(random);
  $(".userChoice").text(userChoice);
  
  if (random >0 && random < (10/3)){
    $(".computerChoice").text("rock");
    computerChoice = "rock";
  }else if(random > (10/3) && random < 2*(10/3)){
    $(".computerChoice").text("paper");
    computerChoice = "paper";
  }else if(random > 2*(10/3) && random < 10){
    $(".computerChoice").text("scissors");
    computerChoice = "scissors";
  }
  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !=="scissors"){
    $(".result").text("");
    $(".userChoice").text("");
    $(".computerChoice").text("");
    alert("Your input is invalid, please look at the directions");
  }else if(userChoice === computerChoice){
    $(".result").text("TIE");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='tie-box'>TIE</p>");
  }else if(userChoice === "rock" && computerChoice === "scissors"){
    userScore = userScore + 1;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "paper"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }else if(userChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "rock"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }
    
    
},
  mouseenter:function(){
    $(".play").css("background","green");
  },
  mouseleave:function(){
    $(".play").css("background","red");
  }
  
  //NEW IDEA: Add stream of history of who wins and who loses useing the .append()
  //jquery function

  
});
/////////////This event listener allows you to use rock button to play////////////////////////////////////////////////////////////////////////

  $(".rock-button").click(function(){
  
  var userChoice = "rock";
  var computerChoice = "";
  var random = (Math.random()*10);
  console.log(random);
  $(".userChoice").text(userChoice);
  
  if (random >0 && random < (10/3)){
    $(".computerChoice").text("rock");
    computerChoice = "rock";
  }else if(random > (10/3) && random < 2*(10/3)){
    $(".computerChoice").text("paper");
    computerChoice = "paper";
  }else if(random > 2*(10/3) && random < 10){
    $(".computerChoice").text("scissors");
    computerChoice = "scissors";
  }
  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !=="scissors"){
    $(".result").text("");
    $(".userChoice").text("");
    $(".computerChoice").text("");
    alert("Your input is invalid, please look at the directions");
  }else if(userChoice === computerChoice){
    $(".result").text("TIE");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='tie-box'>TIE</p>");
  }else if(userChoice === "rock" && computerChoice === "scissors"){
    userScore = userScore + 1;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "paper"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }else if(userChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "rock"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }
    
  
});
/////////////This event listener allows you to use paper button to play////////////////////////////////////////////////////////////////////////
$(".paper-button").click(function(){
  
  var userChoice = "paper";
  var computerChoice = "";
  var random = (Math.random()*10);
  console.log(random);
  $(".userChoice").text(userChoice);
  
  if (random >0 && random < (10/3)){
    $(".computerChoice").text("rock");
    computerChoice = "rock";
  }else if(random > (10/3) && random < 2*(10/3)){
    $(".computerChoice").text("paper");
    computerChoice = "paper";
  }else if(random > 2*(10/3) && random < 10){
    $(".computerChoice").text("scissors");
    computerChoice = "scissors";
  }
  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !=="scissors"){
    $(".result").text("");
    $(".userChoice").text("");
    $(".computerChoice").text("");
    alert("Your input is invalid, please look at the directions");
  }else if(userChoice === computerChoice){
    $(".result").text("TIE");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='tie-box'>TIE</p>");
  }else if(userChoice === "rock" && computerChoice === "scissors"){
    userScore = userScore + 1;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "paper"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }else if(userChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "rock"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }
    
  
});

/////////////This event listener allows you to use scissors button to play////////////////////////////////////////////////////////////////////////
$(".scissors-button").click(function(){
  
  var userChoice = "scissors";
  var computerChoice = "";
  var random = (Math.random()*10);
  console.log(random);
  $(".userChoice").text(userChoice);
  
  if (random >0 && random < (10/3)){
    $(".computerChoice").text("rock");
    computerChoice = "rock";
  }else if(random > (10/3) && random < 2*(10/3)){
    $(".computerChoice").text("paper");
    computerChoice = "paper";
  }else if(random > 2*(10/3) && random < 10){
    $(".computerChoice").text("scissors");
    computerChoice = "scissors";
  }
  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !=="scissors"){
    $(".result").text("");
    $(".userChoice").text("");
    $(".computerChoice").text("");
    alert("Your input is invalid, please look at the directions");
  }else if(userChoice === computerChoice){
    $(".result").text("TIE");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='tie-box'>TIE</p>");
  }else if(userChoice === "rock" && computerChoice === "scissors"){
    userScore = userScore + 1;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "scissors" && computerChoice === "paper"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }else if(userChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    console.log(computerScore);
    $(".computer-score").text(computerScore);
    $(".result").text("Computer wins");
    $(".result").css("color","red");
    $(".stream").prepend("<p class='computer-box'>Computer wins</p>");
  }else if(userChoice === "paper" && computerChoice === "rock"){
    userScore++;
    $(".user-score").text(userScore);
    $(".result").text("User wins");
    $(".result").css("color","green");
    $(".stream").prepend("<p class='user-box'>User wins</p>");
    userScore++;
    $(".user-score").text(userScore);
  }
    
  
});