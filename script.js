let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
	let n = Math.floor(Math.random()*3);
	if (n===0){
		return "Rock";
	}
	else if (n===1){
		return "Paper";
	}
	else {
		return "Scissors";
	}
}

function getHumanChoice(){
	return prompt("Enter your choice");
}

function playRound(humanChoice=prompt("Enter your choice"), computerChoice=getComputerChoice()){
	if (humanChoice.toLowerCase()===computerChoice.toLowerCase()){
		console.log("it's tie'");
		humanScore+=0.5;
		computerScore+=0.5;
	}
	else if (humanChoice.toLowerCase()==="paper" && computerChoice.toLowerCase()==="rock"){
		console.log("you win paper beats rock");
		humanScore++;
	}
	else if (computerChoice.toLowerCase()==="paper" && humanChoice.toLowerCase()==="rock"){
		console.log("you lose paper beats rock");
		computerScore++;
	}
	else if (computerChoice.toLowerCase()==="scissors" && humanChoice.toLowerCase()==="paper"){
		console.log("you lose scissors beats paper");
		computerScore++;
	}
	else if (computerChoice.toLowerCase()==="paper" && humanChoice.toLowerCase()==="scissors"){
		console.log("you win scissors beats paper");
		humanScore++;
	}
	else if (computerChoice.toLowerCase()==="rock" && humanChoice.toLowerCase()==="scissors"){
		console.log("you lose rock beats scissors");
		computerScore++;
	}
	else if (humanChoice.toLowerCase()==="rock" && computerChoice.toLowerCase()==="scissors"){
		console.log("you win rock beats scissors");
		humanScore++;
	}
	else {
		console.log("invalid choice");
		return playRound();
	}
}

function playGame(){
	for (let i=0;i<5;i++){
		playRound();
	}
	if (computerScore>humanScore){
		console.log("computer wins witha score of "+computerScore);
	}
	else if (computerScore<humanScore){
		console.log("you win with a score of "+humanScore);
	}
	else {
		console.log("it\'s a tie"+humanScore);
	}
}
