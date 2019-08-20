let rollCounter = 0;
let shotCounter = 0;
let brainsCounter = 0;
let footCounter = 0;
function getRoll(){
	if(confirm("Click for your roll?")){
		let rollOne = counterBrains(rollDieOne());
		let rollTwo = counterBrains(rollDieTwo());
		let rollThree = counterBrains(rollDieThree());
		let rollFour = counterBrains(rollDieFour());
		let rollFive = counterBrains (rollDieFive());
		let rollSix = counterBrains(rollDieSix());
		let carriedBrains = brainsCounter - shotCounter;
		console.log("You got shot " +shotCounter);
		console.log("Your total brains from the round is " +carriedBrains);
	}
	else{
		alert("you didn't roll!")
	}
}


function rollDieOne(){
	let threeSidedDice = Math.ceil(Math.random()*3);
	return threeSidedDice;
} 
function rollDieTwo(){
	let fourSidedDice = Math.ceil(Math.random()*4);
	return fourSidedDice;
		}
function rollDieThree(){
 	let sixSidedDice = Math.ceil(Math.random()*6);
	return	sixSidedDice;
}
function rollDieFour(){
	let eightSidedDice = Math.ceil(Math.random()*8);
	return eightSidedDice;
}
function rollDieFive(){
	let tenSidedDice = Math.ceil(Math.random()*10);
	return tenSidedDice;
}
function rollDieSix(){
	let twelveSidedDice = Math.ceil(Math.random()*12);
	return twelveSidedDice;
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
}
let diceRoll = 
switch(rollDieSix()){
		case 1:
		return ++footCounter;
		break;
		case 2:
		return ++brainsCounter;
		break;
		case 3:
		return ++shotCounter;
		break;
		case 4:
		return ++footCounter;
		break;
		case 5:
		return ++ brainsCounter
		break;
		case 6:
		return ++shotCounter
		break;
		case 7:
		console.log("foot");
		break;
		case 8:
		return ++brainsCounter;
		break;
		case 9:
		return ++ shotCounter;
		break;
		case 9:
		console.log("foot");
		break;
		case 10:
		return ++ brainsCounter;
		break;
		case 11:
		return ++ shotCounter;
		break;
		case 12:
		return ++ brainsCounter;
		break;
		default:
		console.log("Oh no something went wrong");
		break;
	}