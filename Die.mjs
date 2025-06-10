export default class Die {

    constructor(){

        this.values = [];

    }

    createD3()
    {
        const dValue = []
        dValue[0] = 1
        
        for(let i = 1; i < 3; i++)
        {
            dValue[i] = i + 1;
        }
        this.values.push(dValue)
        console.log(dValue)
        console.log(this.values)
        
    }
    createD5()
    {
        const dValue = []
        dValue[0] = 1
        
        for(let i = 1; i < 5; i++)
        {
            dValue[i] = i + 1;
        }
        this.values.push(dValue)
        console.log(dValue)
        
    }
    createD20()
    {
        const dValue = []
        dValue[0] = 1
        
        for(let i = 1; i < 20; i++)
        {
            dValue[i] = i + 1;
        }
        this.values.push(dValue)
        console.log(dValue)
        
    }
    createD100()
    {
        const dValue = []
        dValue[0] = 1
        
        for(let i = 1; i < 100; i++)
        {
            dValue[i] = i + 1;
        }
        this.values.push(dValue)
        console.log(dValue)
        

    }
    roll(diceArray)
    {
      const result =  Math.floor(Math.random()*diceArray.length)

      return result;
    }
}