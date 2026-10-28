//Avaliação de Atendimento

//1. Ótimo
//2. Bom
//3. Regular
//4. Ruim
//5. Péssimo

let avaliacao = 13

switch (avaliacao) {
    case 1:
        console.log(`Obrigado pela Avaliação Ótimo!`)
        break;
    case 2:
        console.log(`Obrigado pela Avaliação Bom!`)
        break;
    case 3:
        console.log(`Obrigado pela Avaliação Regular!`)
        break;
    case 4:
        console.log(`Obrigado pela Avaliação Ruim!`)
        break;
    case 5:
        console.log(`Obrigado pela Avaliação Péssimo!`)
        break;
    default:
        console.log(`Valor Invalido!`)
        break;
}