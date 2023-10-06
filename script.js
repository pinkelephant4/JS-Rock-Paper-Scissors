function getComputerChoice() {
  let compCh=Math.ceil(Math.random()*3)
  if(compCh==1){
    return 'Rock'
  }
  else if(compCh==2){
    return 'Paper'
  }
  else{
    return 'Scissors'
  }
}

let totalScore=0
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice){
    score=0
  }

  else if((playerChoice=='Rock' && computerChoice=='Scissors')||
         (playerChoice=='Paper' && computerChoice=='Rock')||
         (playerChoice=='Scissors' && computerChoice=='Paper')){
    				score=1
    				totalScore++
      		}

  
  else {
    score=-1
    totalScore--
  }
  return score
}

function showResult(score, playerChoice, computerChoice) {
  let resultDiv=document.getElementById('result')
  if (score==0){
    resultDiv.innerText='Its a Draw!'
  }
  else if (score==1){
    resultDiv.innerText='You won!'
  }
  else{
    resultDiv.innerText='You lose!'
  }
  let scoreDiv = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  scoreDiv.innerText=totalScore
  handsDiv.innerText=`👦 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
  let computerChoice=getComputerChoice()
  let score=getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
}


function playGame() {
  let rpsBtn=document.querySelectorAll('.rpsButton')
  let endBtn=document.getElementById('endGameButton')
  for (let i = 0; i < 3; i++) {
    rpsBtn[i].onclick=function(){
      
      onClickRPS(rpsBtn[i].value)
    }    
  }
  
 
 endBtn.onclick=function(){endGame()} //this works but i dunno why
  //endBtn.onclick=endGame() //this doesnt work
}

function endGame() {
  let resultDiv=document.getElementById('result')
  let scoreDiv = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  resultDiv.innerText=''
  scoreDiv.innerText=''
  handsDiv.innerText=''
  totalScore=0
    
}

playGame()
