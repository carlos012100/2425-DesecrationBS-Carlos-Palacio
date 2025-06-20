
import Die from "./Die.mjs"
import TrainingGround from "./TrainingGround.mjs";
import Combat from "./Combat.mjs";

let allCharacterArray = [];


const values = new Die()


async function LoadData() {

    const result = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
    const data = await result.json()
    // console.log(data); 

    return data;
  }
  
  allCharacterArray = await LoadData();
  

//   values.createD3()
//   values.createD5()
//   values.createD20()
//   values.createD100();


const characterFactory = new TrainingGround(allCharacterArray)

const hero = characterFactory.createSuperHero();
const Villain = characterFactory.createVillain();
const fighters = [hero,Villain]
const combat = new Combat(fighters, values)
