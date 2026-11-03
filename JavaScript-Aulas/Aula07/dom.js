let titulo = document.getElementById("titulo")
let texto = window.document.getElementById("texto") // Window sempre esta presente nos dom
let lista = document.getElementsByClassName("item")

titulo.style.color = "pink"
texto.innerHTML = "Meu deus, eu estou alterando esse elemento com o JS!!!!"

lista[2].style.color = "red"