console.log(`Jovem Pode votar?`);

const VOTO = 16;
let idade = 80
if (idade >= VOTO && idade < 70) {
    console.log(`Ja pode votar!`);
}else if (idade >= 70) {
    console.log(`Voto é opcional!`);
}else{
    console.log(`Você não pode votar!`);
}
console.log(`Fim`);
