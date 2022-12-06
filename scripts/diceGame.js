const player = document.getElementById('playerSection');
const computer = document.getElementById('computerSection');
const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');
const diceImageFolder = "img/";
let number;
//Define A Dice Object
class Dice {
    constructor(value) {
        this.value = value;
    }

    describeSelf() {
        let img = `<img id="${this.value}" src="${diceImageFolder}dice-six-faces-${this.value}.png" alt="${this.value}" width="100px" height="100px"</img>`;
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
    if(counter < 3)
    {
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
        console.log(playerDice); //player current dice;
        console.log(computerDice); // computer current dice;
        playerValue = checkDiceValue(playerDice);  //checking player current value;
        computerValue = checkDiceValue(computerDice); //checking computer current value;
        playerTotalValue.push(playerValue); //adding current value to player total value;
        computerTotalValue.push(computerValue); //adding current value to computer total value;
        console.log(playerValue); //display current player value;
        console.log(computerValue); // display current player value;
        playerTotal = checkTotalValue(playerTotalValue);
        console.log(playerTotal); //display current total player value;
        computerTotal = checkTotalValue(computerTotalValue);
        console.log(computerTotalValue); //display current total computer value;
        counter++;
    }
    else{
        if(playerTotalValue > computerTotalValue)
        {
            console.log("Player Won");
        }
        else{
            console.log("Computer Won");
        }
    }
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

function checkTotalValue(arraylist) {
    let sum = 0;
    for (let i = 0; i < arraylist.length; i++) {
        sum += arraylist[i];
    }
    return sum;
}