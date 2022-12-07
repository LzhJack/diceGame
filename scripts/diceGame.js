const player = document.getElementById('playerSection');
const playerSection = document.getElementById('pDiceSection');
const playerScore = document.getElementById('playerCurrentScore');
const playerTotalScore = document.getElementById('playerTotalScore');
const computer = document.getElementById('computerSection');
const computerSection = document.getElementById('cDiceSection');
const computerScore = document.getElementById('computerCurrentScore');
const computerTotalScore = document.getElementById('computerTotalScore');
const result = document.getElementById('resultMessage');
const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');
const diceImageFolder = "img/";

//Define A Dice Object
class Dice {
    constructor(value) {
        this.value = value;
    }

    describeSelf() {
        let img = `<img id="${this.value}" src="${diceImageFolder}dice-${this.value}.png" alt="${this.value}" width="100px" height="100px"</img>`;
        return img;
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.roll = [];
    }

    addValueToPlayer(dice) {
        this.roll.push(dice);
    }

    sumToPlayer(roll) {
        let sum;
        for (let i = 0; i < this.roll.length; i++) {
            sum += roll[i];
        }
        return sum;
    }

    describeSelf() {
        let html = "";
        html += `<img id="${this.name}" src="${diceImageFolder}knight.gif" alt="${this.name}">`;
        html += ` <b>${this.name}'s hand:</b>`;
        html += "<ul>";
        for (let i = 0; i < this.hand.length; i++) {
            html += `<li><img src="${diceImageFolder}dice-six-faces-${this.roll[i].value}.png" alt="${this.roll[i].value}"></li>`;
        }
        html += "</ul>";
        return html;
    }
}

let playerTotalValue = [];
let computerTotalValue = [];
let counter = 0;
//Trigger event to happens
startBtn.addEventListener("click", () => {
    if (counter < 3) {
        let playerDice = [];
        let computerDice = [];
        for (let i = 0; i < 2; i++) {
            let number = rollDice();
            let number2 = rollDice();
            let dice = new Dice(number);
            playerDice.push(dice.value);
            let dice2 = new Dice(number2);
            computerDice.push(dice2.value);
        }
        currentDice = playerDice[0];
        currentDice2 = playerDice[1];
        console.log(currentDice);
        playerValue = checkDiceValue(playerDice);  //checking player current value;
        computerValue = checkDiceValue(computerDice); //checking computer current value;
        playerTotalValue.push(playerValue); //adding current value to player total value;
        computerTotalValue.push(computerValue); //adding current value to computer total value;
        playerTotal = checkTotalValue(playerTotalValue);
        computerTotal = checkTotalValue(computerTotalValue);
        playerSection.innerHTML += `<img id="${playerDice[0]}" src="${diceImageFolder}dice-${playerDice[0]}.png" alt="${playerDice[0]}" width="100px" height="100px"</img>`;
        playerSection.innerHTML += `<img id="${playerDice[1]}" src="${diceImageFolder}dice-${playerDice[1]}.png" alt="${playerDice[1]}" width="100px" height="100px"</img>`;
        computerSection.innerHTML += `<img id="${computerDice[0]}" src="${diceImageFolder}dice-${computerDice[0]}.png" alt="${computerDice[0]}" width="100px" height="100px"</img>`;
        computerSection.innerHTML += `<img id="${computerDice[1]}" src="${diceImageFolder}dice-${computerDice[1]}.png" alt="${computerDice[1]}" width="100px" height="100px"</img>`;
        playerScore.innerHTML =`Player's current score: ${playerValue}`; 
        playerTotalScore.innerHTML =`Player's total score: ${playerTotal}`;
        computerScore.innerHTML =`Computer's current score: ${computerValue}`;
        computerTotalScore.innerHTML =`Computer's total score: ${computerTotal}`;
        counter++;
    }
    else{
        if (playerTotalValue > computerTotalValue) {
            result.innerHTML+=`Player Won`;
        }
        else {
            result.innerHTML+=`Computer Won`;
        }
    }
});

restartBtn.addEventListener("click", () => {
    window.location.reload();
});

//Roll the dices
function rollDice() {
    number = Math.floor(Math.random() * 6 + 1);
    return number;
}

//Check values in arraylist to determine their values
function checkDiceValue(diceList) {
    if (diceList.includes(1)) {
        diceValue = 0;
    }
    else if (diceList[0] == diceList[1]) {
        diceValue = (diceList[0] + diceList[1]) * 2;
    }
    else {
        diceValue = diceList.reduce((a, b) => a + b, 0)
    }
    return diceValue;
}

//Check total value 
function checkTotalValue(arraylist) {
    let sum = 0;
    for (let i = 0; i < arraylist.length; i++) {
        sum += arraylist[i];
    }
    return sum;
}