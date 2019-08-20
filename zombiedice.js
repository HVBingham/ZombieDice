let rollCounter = 0;
let shotCounter = 0;
let brainsCounter = 0;
let footCounter = 0;
let carriedBrains = 0;
function getRoll(){
	if(confirm("Click for your roll?")){
	rollAllDice();
	console.log("Your total carried Brains for this round is " +carriedBrains)
	if (carriedBrains === 10){
			console.log("you Win!")
			}
	else if (carriedBrains < 10){
		console.log("you lose :( ")
	}	
	}
	else{
		alert("you didn't roll!")
	}
}

function rollAllDice(){
		let diceOne = counterBrains(rollSingleDice(3));
		let diceTwo = counterBrains(rollSingleDice(4));
		let diceThree = counterBrains(rollSingleDice(6));
		let diceFour = counterBrains(rollSingleDice(8));
		let diceFive = counterBrains (rollSingleDice(10));
		let diceSix = counterBrains(rollSingleDice(12));
		carriedBrains = brainsCounter - shotCounter;
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