import * as readlineSync from 'readline-sync';

class Player {
    name: string;
    health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
    }

    takeDamage(amount: number) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    isAlive(): boolean {
        return this.health > 0;
    }
}

class Enemy {
    name: string;
    damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    attack(player: Player) {
        player.takeDamage(this.damage);
        console.log(`${this.name} attacks! ${player.name} takes ${this.damage} damage.`);
    }
}

class Room {
    description: string;
    enemy?: Enemy;

    constructor(description: string, enemy?: Enemy) {
        this.description = description;
        this.enemy = enemy;
    }
}

function createGame(): Room[] {
    const room1 = new Room("You find yourself in a dark cave.");
    const room2 = new Room("You enter a room with a mysterious glow.", new Enemy("Goblin", 10));
    const room3 = new Room("You see a treasure chest.");
    const room4 = new Room("You encounter a fierce dragon!", new Enemy("Dragon", 20));

    return [room1, room2, room3, room4];
}

function playGame(player: Player, gameMap: Room[]) {
    for (const room of gameMap) {
        console.log(room.description);

        if (room.enemy) {
            while (room.enemy && player.isAlive()) {
                const action = readlineSync.keyInSelect(['Attack', 'Run'], 'What will you do?');

                if (action === 0) {
                    room.enemy.attack(player);
                    if (!player.isAlive()) {
                        console.log(`Game Over! ${player.name} has been defeated.`);
                        return;
                    }
                } else {
                    console.log(`${player.name} runs away from ${room.enemy.name}.`);
                    break;
                }
            }
        }

        console.log('-------------------------------------');
    }

    console.log('Congratulations! You completed the adventure!');
}

function startGame() {
    const playerName = readlineSync.question('Enter your name: ');
    const player = new Player(playerName);
    const gameMap = createGame();

    console.log(`Welcome, ${player.name}! Your adventure begins...`);

    playGame(player, gameMap);
}

// Start the game
startGame();
