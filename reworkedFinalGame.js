	let clicks=0;
	let brainsCounter = 0;
	let shotCounter = 0;
	let footCounter = 0;
	let carriedBrains = 0;
function runGame(){



getRoll();

}

function clearIt(){
	console.clear();
}
function getRoll(){

		if(clicks <= 7){
			let numberOfTurns = countTurns();
			console.log("Round" +numberOfTurns);
			rollAllDice();
			if(shotCounter===0){
				console.log("Sweet you evaided the attack and collected " +shotCounter +" shots!");
			}
			else{
			console.log("OW! You've been shot! Collected shots is now "+shotCounter);
			}
			if(brainsCounter===0){
				console.log("WOOOOOW. Those humans got the best of you "+brainsCounter+" for you!");
			}
			else{
			console.log("Sweet you are a killing machine! Your collected brains is now at  "+brainsCounter);
			}
			if(footCounter===0){
				conosle.log("Well you got " +footCounter +" walk aways. Better luck next time. Remember go for the brains!")
			}
			else{
				console.log("whew! Well you don't get to eat but you also didn't get shot! " +footCounter +" total walk aways.");
			}
			if(carriedBrains <=0){
				console.log("What the?! Are you even trying? You know you need brains to live right?! More brains. Less getting shot. Your health is in the negative. Click to try again to survive!")
			}
			else{
				console.log("Well after all of that you now have " +carriedBrains +" total health.");
			}
			if(clicks===1){
			alert("Do it. Roll again you filthy zombie, you!");
			}	
			else if (clicks ===2){
				alert("Come on! You can do better than that. SURVIVE!");
			}
			else if (clicks === 3){
				alert("You're not even trying, are you.");
			}
			else if (clicks === 4){
				alert("So it looks like you're giving up.");
			}
			else if(clicks === 5){
				alert("Are you even a zombie?");
			}
			else if(clicks === 6){
				alert("Only two more rounds. You better make this count!");
			}
			else if(clicks === 7){
				alert("Who's the zombie? Yeah you da zombie! I honestly was worried that you forgot.");
			}
			else{
				alert("Well would you look at that!")
			}
			if(carriedBrains >= 5 && clicks===8){
				console.log("Well I never thought you would have done it but you did. You win! You get to live to eat another brain!");		
			}
			else if(carriedBrains < 5 && clicks ===8){
				console.log("Ah better luck next time. Maybe next time try to actually win!");
			}
			
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
