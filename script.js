
document.getElementById("play").addEventListener("click", function () {
    creaNuovaGrigia()
})

function creaNuovaGrigia(){
    document.getElementById("grid").innerHTML = "";
    const livelloDifficolta = parseInt(document.getElementById("livello-difficolta").value);

    let numeroCelleRiga;
    let numeroCelle;

    switch (livelloDifficolta) {
        case 1:
        default:
            numeroCelle = 100;
            numeroCelleRiga = 10;
            break;
        case 2:
            numeroCelle = 81;
            numeroCelleRiga = 9;
            break;
        case 3:
            numeroCelle = 49;
            numeroCelleRiga = 7;
            break;
    }

    for (let i = 1; i <= numeroCelle; i++) {
        const nuovoSquare = creaSquare(i, numeroCelleRiga);
        nuovoSquare.addEventListener("click", function () {
            nuovoSquare.classList.add("my-color-active")
        })
        document.getElementById("grid").appendChild(nuovoSquare);
    }
}

function creaSquare(numero, numeroCelleRiga) {
    let nuovoSquare = document.createElement("div");
    nuovoSquare.classList.add("my-square", "border", "border-1", "border-dark", "d-flex", "justify-content-center", "align-items-center");
    nuovoSquare.style.width = `calc(100% / ${numeroCelleRiga})`
    nuovoSquare.style.height = nuovoSquare.style.width;
    nuovoSquare.innerHTML = `<span>${numero}</span>`;
    return nuovoSquare;
}

