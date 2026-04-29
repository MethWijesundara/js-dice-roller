document.getElementById("rollBtn").addEventListener("click" , rollDice)

function rollDice() {
    const numOfDice = Number(document.getElementById("numOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];
    const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

    for(let i=0;i<numOfDice;i++){
        const value = Math.floor(Math.random()*6)+ 1 ;
        values.push(value);
    }

    diceResult.textContent = `dice: ${values.join(" , ")}`;
    diceImages.textContent = values.map(v=>diceFaces[v-1]).join(" ");

}