const inquirer = require('inquirer')



class Stats {
    constructor ( name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    }
};

const enemy = new Stats('Thug', 100, 5);
const player = new Stats('Sal', 100, 10);

function gameStart() {
    console.log('You encountered an enemy')
    console.log('Prepare for battle')
    playerTurn();
};

function displayStatus() {
    console.log(`your name is ${player.name} and your health is ${player.health}, your attack power is ${player.attack}`)
    console.log(`The enemy name is ${enemy.name} and its health is ${enemy.health}, its attack power is ${enemy.attack}}`)
};

function playerTurn () {
    displayStatus();
    let playerAttack = Math.floor(Math.random() * player.attack);
    enemy.health -= playerAttack;

    if (enemy.health > 0) {
        enemyTurn()
    } else {
        console.log('You won!')
    } 
};

function enemyTurn() {

}
gameStart();