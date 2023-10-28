const inquirer = require('inquirer')

const question = {
    type: 'list',
    name: 'Action',
    message: 'Will you attack or defend?',
    choices: ['Attack', 'Defend']
};


class Stats {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
};

const enemy = new Stats('Thug', 20, 5);
const player = new Stats('Player', 100, 10);

//starts the game
function gameStart() {
    console.log('You encountered an enemy')
    console.log('Prepare for battle')
    playerTurn();
};

//displays player and enemy status
function displayStatus() {
    console.log(`your name is ${player.name} and your health is ${player.health}, your attack power is ${player.attack}`)
    console.log(`The enemy name is ${enemy.name} and its health is ${enemy.health}, its attack power is ${enemy.attack}}`)
};

//player turn to attack or defend
function playerTurn() {
    displayStatus();
    let playerAttack = Math.floor(Math.random() * player.attack);
    inquirer.prompt(question).then(answers => {
        if (answers.Action === 'Attack') {
            enemy.health -= playerAttack;
        } else {
            player.health += 2;
        }
        if (enemy.health > 0) {
            enemyTurn()
        } else {
            console.log('You won!')
        }
    })
};

//enemy turn after player turn
function enemyTurn() {
    let enemyAttack = Math.floor(Math.random() * enemy.attack)
    player.health -= enemyAttack
    if (player.health <= 0) {
        console.log('You died!')
    } else {
        playerTurn();
    }
}
gameStart();