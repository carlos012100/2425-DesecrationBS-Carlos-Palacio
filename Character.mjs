export default class Character {

    constructor (name, intelligence, strength, speed, durability, power, combat)
    {
        this.name = name;
        this.intelligence = intelligence
        this.strength = strength
        this.speed = speed;
        this.durability = durability;
        this.power = power;
        this.combat = combat;


        if(strength * 10  >= 666){
            this.hp = 666
        }
        else{
            this.hp = strength * 10

        }

    }
    attack()
    {

    }
}