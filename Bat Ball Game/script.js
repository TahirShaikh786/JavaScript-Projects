let computerChoice = Math.random()*3;

function computerChoiceF(){
  
  if (computerChoice > 0 && computerChoice <= 1)
  {
    document.getElementById("computer-choice").src = "./images/tennis.png";
    let computerChoice = "Ball";
    return computerChoice;
  }
  else if (computerChoice > 2 && computerChoice <= 3)
  {
    document.getElementById("computer-choice").src = "./images/cricket-bat.png";
    let computerChoice = 'Bat';
    return computerChoice;
  }
  else
  {
    document.getElementById("computer-choice").src = "./images/wicket.png"; 
    let computerChoice = 'wicket';
    return computerChoice;
  }
}

function userChoice1(){
  let computerChoice = computerChoiceF();
  
  if (computerChoice === 'Ball')
  {
    document.getElementById('promt-text').innerHTML = 'User Win';
  }
  else if(computerChoice === 'Bat')
  {
    document.getElementById('promt-text').innerHTML = 'Match Tie';
  }
  else
  {
    document.getElementById('promt-text').innerHTML = 'Computer Win';
  }
}

function userChoice2(){
  let computerChoice = computerChoiceF();
  if (computerChoice == 'Bat')
  {
    document.getElementById('promt-text').innerHTML = 'Computer Win';
  }
  else if(computerChoice == 'Ball')
  {
    document.getElementById('promt-text').innerHTML = 'Match Tie';
  }
  else
  {
    document.getElementById('promt-text').innerHTML = 'User Win';
  }
}

function userChoice3(){
  let computerChoice = computerChoiceF();
  if (computerChoice == 'wicket')
  {
    document.getElementById('promt-text').innerHTML = 'Match tie';
  }
  else if (computerChoice == 'Bat')
  {
    document.getElementById('promt-text').innerHTML = 'Computer Win';
  }
  else
  {
    document.getElementById('promt-text').innerHTML = 'User Win';
  }
}