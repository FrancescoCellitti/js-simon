const buttonEl = document.querySelector(".btn")
const formEl = document.getElementById("answers-form")
const numeriUtente = document.querySelectorAll(".form-control")
let ulEl = document.getElementById("numbers-list")
let input = document.getElementById("input-group")
let numeri = []
const message = document.getElementById("message")

for (i = 0; i < 5; i++) {
    let liEl = document.createElement("li")
    let numero = Math.floor(Math.random() * 50) + 1
    liEl.innerText = numero
    numeri.push(numero)
    ulEl.appendChild(liEl)

}

setTimeout(() => {
    ulEl.classList.add('d-none')
    formEl.classList.remove("d-none")
    formEl.addEventListener('submit', (e) => {
        e.preventDefault()
        let numeriInseriti = []
        let numeriIndovinati = ''

        let count = 0
        for (i = 0; i < numeriUtente.length; i++) {
            let valoreInput = Number(numeriUtente[i].value)





            if (numeri.includes(valoreInput) && !numeriInseriti.includes(valoreInput)) {
                count++
                numeriIndovinati = numeriIndovinati +"," + valoreInput.toString()
            }
            numeriInseriti.push(valoreInput)

        }

        if (count != 0) {
            message.innerText = `${count} ${numeriIndovinati} `

        } else {
            message.innerText = "ritenta"
        }
    })

}, 3000)



