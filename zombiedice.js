	let brainsCounter = 0;
	let shotCounter = 0;
	let footCounter = 0;
	let carriedBrains = 0;
	let clicks=0;
	

function getRoll(){
	if(confirm("Click for your roll.")){
		if(clicks <= 9){
			rollAllDice();
			console.log("Your total Brains after this round is " +carriedBrains)
			let numberOfTurns = countTurns();
			console.log("Round" +numberOfTurns);
			if(carriedBrains >= 5 && clicks===10){
				console.log("You win")		
			}
			else if(carriedBrains < 5 && clicks ===10){
				console.log("you lose")
			}
		}
		}
	else{
		
		alert("you didn't roll!")
		}
	}

function rollAllDice(){
		counterBrains(rollSingleDice(3));
		counterBrains(rollSingleDice(4));
		counterBrains(rollSingleDice(6));
		counterBrains(rollSingleDice(8));
		counterBrains (rollSingleDice(10));
		counterBrains(rollSingleDice(12));
		console.log("your shots for this round is "+shotCounter)
		console.log("your brains for this round is "+brainsCounter)
		console.log("your feet for this round is "+footCounter)
		carriedBrains = brainsCounter - shotCounter
		return carriedBrains
}

function counterBrains(diceRoll){

	if(diceRoll === 2){
		return	++brainsCounter;
	}
	else if(diceRoll === 5){
		return ++brainsCounter;
	}
	else if (diceRoll === 8){
		return ++brainsCounter;
	}
	else if (diceRoll === 11){
		return ++brainsCounter;
	}
	else if (diceRoll === 3) {
		return ++shotCounter;
	}
	else if (diceRoll === 6){
		return ++shotCounter;
	}
	else if (diceRoll === 9){
		return ++shotCounter;
		}
	else if (diceRoll === 12){
		return ++shotCounter;
		}
	else{
		return ++footCounter;
	}
}
function rollSingleDice(sides){
	let roll = Math.ceil(Math.random()*sides);
	return roll;
}

function countTurns(){
	let counting = clicks +=1
	return counting
	
}
function winOrLose(){
		if(carriedBrains == 5){
		console.log("You Win!");
	}
	else {
			console.log("You lose!")
		}
}
function addEmUp(){
	
}