let titulo = document.getElementById("titulo")
titulo.innerHTML = "GRIPADINHO!"
titulo.style.color = "purple"

let lista = document.getElementsByClassName("item")
// lista.style.color = "red"
for(let i = 0; i < lista.length; i++) {
    lista[i].style.color = "blue"
}

let paragrafo = document.getElementsByTagName("p")
paragrafo[4].style.color = "yellow"