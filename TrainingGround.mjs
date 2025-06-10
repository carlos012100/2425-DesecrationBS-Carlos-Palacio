import Superhero from "./Superhero.mjs";
import Villain from "./Villain.mjs";

export default class TrainingGround
{
    constructor (data)
    {
        this.data = data;
        this.randomHeroIndex = null;
        this.selectedHero = null;
        this.selectedVillain = null;
    
    }
    getData ()
    {
        return this.data
    }
    createSuperHero()
    {
         this.randomHeroIndex = Math.floor(Math.random()*this.getData().length)

        
     
        if (!this.getData()[this.randomHeroIndex].name.includes("Junkpile") || !this.getData()[this.randomHeroIndex].name.includes("VillainZarate")){
            this.selectedHero = this.getData()[this.randomHeroIndex]
        }
        else{
            this.randomHeroIndex = Math.floor(Math.random()*this.getData().length)
        }
        const intelligence = this.selectedHero.powerstats.intelligence
        const strength = this.selectedHero.powerstats.strength
        const speed = this.selectedHero.powerstats.speed
        const durability = this.selectedHero.powerstats.durability
        const power = this.selectedHero.powerstats.power
        const combat = this.selectedHero.powerstats.combat


        const newHero = new Superhero(this.selectedHero.name, intelligence,strength,speed,durability,power,combat)
        
        return newHero
        
        
    }
    createVillain()
    {
   

        for(let i = 0; i < this.getData().length; i++)
        {         
        if (this.getData()[i].name.includes("Junkpile") || this.getData()[i].name.includes("VillainZarate")){

            this.selectedVillain = this.getData()[i]

        }
        }
        const intelligence = this.selectedVillain.powerstats.intelligence
        const strength = this.selectedVillain.powerstats.strength
        const speed = this.selectedVillain.powerstats.speed
        const durability = this.selectedVillain.powerstats.durability
        const power = this.selectedVillain.powerstats.power
        const combat = this.selectedVillain.powerstats.combat

        const newVillain = new Villain (this.selectedVillain.name, intelligence, strength, speed, durability,power,combat)
        console.log(newVillain)

        return newVillain

    }
}