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

    rollDice() {
        number = Math.floor(Math.random() * 6 + 1);
        return number;
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

    sumToPlayer(roll){
        let sum;
        for(let i = 0;i<this.roll.length;i++)
        {
            sum+=roll[i];
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

class Game{
    
}

//Trigger event to happens
startBtn.addEventListener("click", () => {
    let playerDice = [];
    let computerDice = [];
    for (let i = 0; i < 2; i++) {
        let number = rollDice();
        playerDice.push(number);
        let number1 = rollDice();
        computerDice.push(number1);
    }
    console.log(playerDice);
    console.log(computerDice);
    playerValue = checkDiceValue(playerDice);
    computerValue = checkDiceValue(computerDice);
    console.log(playerValue);
    console.log(computerValue);
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
