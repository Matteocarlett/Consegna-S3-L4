const tabella = document.getElementById("tabella")
const bottoneCasuale = document.getElementById("bottoneCasuale")
const numeri = []

// Crea la tabella con numeri da 1 a 76

for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div")
    cella.className = "celleTabella"
    cella.textContent = i
    tabella.appendChild(cella)
}

bottoneCasuale.addEventListener("click", function() {
    
    // Estrazione un numero casuale da 1 a 76

    let numeriEstratti
    do {
        numeriEstratti = Math.floor(Math.random() * 76) + 1
    } while (numeri.includes(numeriEstratti))

    numeri.push(numeriEstratti)

    // Evidenzia la cella del numero uscito + resta evidenziata numero gia uscito

    const cellaDaEvidenziare = document.querySelector(".celleTabella:nth-child(" + numeriEstratti + ")")
    cellaDaEvidenziare.classList.add("cellaEvidenziata")
})
