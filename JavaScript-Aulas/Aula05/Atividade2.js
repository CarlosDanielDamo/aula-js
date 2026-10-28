let somador = 0
let escolhido
 do {
    escolhido = Number(prompt(`Escolha um numero, (0 encerra o programa):`))
    somador = somador + escolhido
    console.log(somador);
 } while (escolhido != 0);
 