// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// 1) crea griglia 

const grigliaWrapper  = document.querySelector(".my-grid-container");
console.log(grigliaWrapper);

const creazioneGrigliaQuadrati = () => {
    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("my-square", "border", "border-2", "border-dark")
    return nuovoDiv;
}

for (let i = 0; i < 100; i++ ){
    const quadrato = creazioneGrigliaQuadrati();

    quadrato.addEventListener("click", function () {
        quadrato.classList.toggle("my-color-active")
    })

    grigliaWrapper.appendChild(quadrato)
}
