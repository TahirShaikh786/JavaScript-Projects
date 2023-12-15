let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const comch = document.querySelector("#comp-img");

const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);

  if(randIdx === 0){
    comch.src = './images/rock.webp';
  }else if(randIdx === 1){
    comch.src = './images/paper.avif';
  }else{
    comch.src = './images/paper.avif'; 
  }

  return options[randIdx]
}

const drawGame = () => {
  msg.innerText = 'Game Was Draw. Play Again!';
  msg.style.backgroundColor = "black";
  console.log("Game Draw");
}

const showWinner = (userWin) => {
  if(userWin){
    userScore++;
    userPoint.innerText = userScore;
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compPoint.innerText = compScore;
    msg.innerText = "You Lose";
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("User Choice = ",userChoice);
  //Generate Computer Choice -> Modular
  const compChoice = genCompChoice();
  console.log("Comp Choice : ",compChoice);

  if(userChoice === compChoice){
    //Draw Game
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === 'rock'){
      //Scissor,Paper
      userWin = compChoice === 'paper' ? false : true;
    }else if (userChoice === 'paper'){
      //rock,scissors
      userWin = compChoice === 'scissors' ? false : true
    }else{
      //paper,rock
      userWin = compChoice === 'rock' ? false : true;
    }
    showWinner(userWin);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    console.log("Choice has Been Chosen.", userChoice);
    playGame(userChoice);
  })
})