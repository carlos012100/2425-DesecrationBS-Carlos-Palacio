
let allCharacterArray = [];


async function LoadData() {
    const result = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
    const data = await result.json()
    console.log(data); 
    return data;
  }
  
  allCharacterArray = LoadData();

  
