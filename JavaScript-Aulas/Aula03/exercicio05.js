window.alert(`Olá, bom dia amigo!`)
let idade = Number(prompt(`Qual é a sua idade?`))

if (idade >= 18 && idade < 60) {
    window.alert(`Você é adulto!`)
} else if (idade >= 60) {
    window.alert(`Você é idoso!`)
}else{
    window.alert(`Você é um menor de idade!`)
}
