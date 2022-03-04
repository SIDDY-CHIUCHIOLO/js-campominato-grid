
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
