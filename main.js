class Character {
    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }


 receiveDamage(damage) {

    let realDamage = damage - this.defense;
    if (realDamage < 0) realDamage = 0;

    this.health = this.health - realDamage;
    console.log(`${this.name} recibe ${realDamage} de daño y ahora tiene ${this.health} de vida! `)
    
    if (this.health <=0) {
        console.log(`${this.name} ha muerto!`)
    }
 }   

attackTarget (targetCharacter) {
    console.log (`${this.name} está atacando a ${targetCharacter.name}`);

    targetCharacter.receiveDamage(this.attack);
    
}

}

class Warrior extends Character {
    attackTarget (targetCharacter) {
        const skills = [
            {name:"Golpe Directo", type:"attack", damage: this.attack * 1.5},
            {name:"Estocada Veloz",type:"attack", damage: this.attack * 2},
            {name:"Escudo Protector", type: "heal", healAmount: 10},
        ];
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        
        if (randomSkill.type === "heal") {
            this.health += randomSkill.healAmount;
            console.log(`¡${this.name} usa ${randomSkill.name} y recupera ${randomSkill.healAmount} de vida! (Vida actual: ${this.health})`);
        } else {
            console.log (`${this.name} usa ${randomSkill.name} contra ${targetCharacter.name}!`);
            targetCharacter.receiveDamage(randomSkill.damage);
        }
    }

}
class Wizard extends Character {attackTarget (targetCharacter) {
        const skills = [
            {name:"Encantamiento Venenoso", type:"attack", damage: this.attack * 1.3},
            {name:"Hechizo de Ceguera",type:"attack", damage: this.attack * 1.8},
            {name:"Poción Regenerativa", type: "heal", healAmount: 8},
        ];
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        
        if (randomSkill.type === "heal") {
            this.health += randomSkill.healAmount;
            console.log(`¡${this.name} usa ${randomSkill.name} y recupera ${randomSkill.healAmount} de vida! (Vida actual: ${this.health})`);
        } else {
            console.log (`${this.name} usa ${randomSkill.name} contra ${targetCharacter.name}!`);
            targetCharacter.receiveDamage(randomSkill.damage);
        }
    }
}
class Archer extends Character {attackTarget (targetCharacter) {
        const skills = [
            {name:"Flechazo Certero", type:"attack", damage: this.attack * 1},
            {name:"Lanza Explosiva",type:"attack", damage: this.attack * 2.2},
            {name:"Carga de Adrenalina", type: "heal", healAmount: 9},
        ];
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        
        if (randomSkill.type === "heal") {
            this.health += randomSkill.healAmount;
            console.log(`¡${this.name} usa ${randomSkill.name} y recupera ${randomSkill.healAmount} de vida! (Vida actual: ${this.health})`);
        } else {
            console.log (`${this.name} usa ${randomSkill.name} contra ${targetCharacter.name}!`);
            targetCharacter.receiveDamage(randomSkill.damage);
        }
    }
}
class Golem extends Character {attackTarget (targetCharacter) {
        const skills = [
            {name:"Piedra Aplastante", type:"attack", damage: this.attack * 2},
            {name:"Mini Golems",type:"attack", damage: this.attack * 1.9},
            {name:"Union Gratitativa", type: "heal", healAmount: 7},
        ];
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        
        if (randomSkill.type === "heal") {
            this.health += randomSkill.healAmount;
            console.log(`¡${this.name} usa ${randomSkill.name} y recupera ${randomSkill.healAmount} de vida! (Vida actual: ${this.health})`);
        } else {
            console.log (`${this.name} usa ${randomSkill.name} contra ${targetCharacter.name}!`);
            targetCharacter.receiveDamage(randomSkill.damage);
        }
    }
}


const warrior = new Warrior ("Agaroth", 100, 20, 10)
const wizard = new Wizard ("Albudore", 90, 30, 5)
const archer = new Archer ("Eagle", 80, 35, 4)
const golem = new Golem ("Aors", 100, 25, 15)

const characters = [warrior, wizard, archer, golem];
const randomIndex = Math.floor (Math.random() * characters.length);

while (characters.filter(char=>char.health >0).length > 1) {
    const attackerIndex = Math.floor(Math.random() * characters.length);
    const attacker = characters [attackerIndex];

    if(attacker.health > 0) {
        let defenderIndex = Math.floor(Math.random() * characters.length);
        while (defenderIndex === attackerIndex || characters[defenderIndex].health <= 0) {
            defenderIndex = Math.floor(Math.random() * characters.length);
        }
        const defender = characters[defenderIndex];

        attacker.attackTarget(defender);
    }

}

const winner = characters.find (char => char.health > 0);
    console.log (`¡El ganador de la batalla es ${winner.name}!`)

    console.log("\n--- Estado final de los personajes ---");
characters.forEach(char => {
    console.log(`- ${char.name}: ${char.health > 0 ? char.health + " de vida restante" : "Muerto"}`);
});
