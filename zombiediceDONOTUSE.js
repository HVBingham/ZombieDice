	let brainsCounter = 0;
	let shotCounter = 0;
	let footCounter = 0;
	let carriedBrains = 0;
	let clicks=0;
	

function getRoll(){
	if(confirm("Click ok to test your fates against this encounter!")){
		if(clicks <= 7){
			let numberOfTurns = countTurns();
			console.log("Round" +numberOfTurns);
			rollAllDice();
			console.log("OW! You've been shot! collected shots is now "+shotCounter);
			console.log("Sweet you were able to eat! collected brains are now at  "+brainsCounter);
			console.log("whew! Well at least your weren't shot you did have " +footCounter +" total walk aways");
			console.log("Well you now have " +carriedBrains +" total lives.");
			if(clicks===1){
			alert("roll again you filthy zombie, you!");
			}	
			else if (clicks ===2){
				alert("come on you can do better than that. SURVIVE!");
			}
			else if (clicks === 3){
				alert("Your not even trying, are you.");
			}
			else if (clicks === 4){
				alert("so it looks like your giving up");
			}
			else if(clicks === 5){
				alert("What's wrong with you.");
			}
			if(carriedBrains >= 5 && clicks===8){
				alert("You win");		
			}
			else if(carriedBrains < 5 && clicks ===8){
				alert("you lose");
			}
			
		}
		}
		
	else{
		
		alert("woah, What are you to scared to roll!")
		}
	}

function rollAllDice(){
		counterBrains(rollSingleDice(3));
		counterBrains(rollSingleDice(4));
		counterBrains(rollSingleDice(6));
		counterBrains(rollSingleDice(8));
		counterBrains (rollSingleDice(10));
		counterBrains(rollSingleDice(12));
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
