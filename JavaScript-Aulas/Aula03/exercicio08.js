window.alert(`Bom dia, Camarada bora saber seu IMC!`)

let altura = Number(prompt(`Qual é a sua altura? ex: 1.75, 1.80 `))
let peso = Number(prompt(`Qual é o seu peso em kg?`))
let imc = peso / (altura ^ 2)
console.log(imc)

if (imc >= 18.5 && imc < 25) {
    window.alert(`Você esta no peso ideal!`)
} else if (imc >= 25 && imc < 30) {
    window.alert(`Você esta Sobrepeso!`)
}else if (imc >= 30 && imc < 35) {
    window.alert(`Você tem Obesidade Grau 1!`)
}else if (imc >= 35 && imc < 40) {
    window.alert(`Você tem Obesidade Grau 2!`)
}else if (imc >= 40) {
    window.alert(`Você tem Obesidade Grave!`)
}else {
    window.alert(`Você esta Abaixo do Peso!`)
}