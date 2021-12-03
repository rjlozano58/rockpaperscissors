$(".play").click(function(){
  var userChoice = $(".input").val();
  userChoice = userChoice.toLowerCase();
  var computerChoice = $("computerChoice").val();
  var random = (Math.random()*10);
  console.log(random);
  $(".userChoice").text(userChoice);
  
  if (random >=0 && random < (10/3)){
    $(".computerChoice").text("rock");
    computerChoice = "rock";
  }else if(random >= (10/3) && random <= 2*(10/3)){
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
  }else {
    if(userChoice === computerChoice){
    $(".result").text("TIE");
      $(".result").css("color","red");
  }else if(userChoice === "rock" && computerChoice === "scissors"){
    $(".result").text("User wins");
    $(".result").css("color","green");
  }else if(userChoice === "scissors" && computerChoice === "rock"){
    $(".result").text("Computer wins");
    $(".result").css("color","red");
  }else if(userChoice === "paper" && computerChoice === "scissors"){
    $(".result").text("Computer wins");
    $(".result").css("color","red");
  }else if(userChoice === "scissors" && computerChoice === "paper"){
    $(".result").text("User wins");
    $(".result").css("color","green");
  }else if(userChoice === "rock" && computerChoice === "paper"){
    $(".result").text("Computer wins");
    $(".result").css("color","red");
  }else if(userChoice === "paper" && computerChoice === "rock"){
    $(".result").text("User wins");
    $(".result").css("color","green");
  }
    
  }
  
  // if(userChoice === computerChoice){
  //   $(".result").text("TIE");
  // }else if(userChoice === "rock" && computerChoice === "scissors"){
  //   $(".result").text("User wins");
  // }else if(userChoice === "scissors" && computerChoice === "rock"){
  //   $(".result").text("Computer wins");
  // }else if(userChoice === "paper" && computerChoice === "scissors"){
  //   $(".result").text("Computer wins");
  // }else if(userChoice === "scissors" && computerChoice === "paper"){
  //   $(".result").text("User wins");
  // }else if(userChoice === "rock" && computerChoice === "paper"){
  //   $(".result").text("Computer wins");
  // }else if(userChoice === "paper" && computerChoice === "rock"){
  //   $(".result").text("User wins");
  // }
  
});
