//Operador Unario | usa 1 elemento
let nome = "Carlos Daniel" // String
let idade = 24 // Number
let matriculado = true //Boolean
let nota = 8

// typeof - Testa o tipo de dado que esta sendo utilizado
console.log(`===================================`);
console.log(`Nome: ${nome}`);
console.log(`Tipo de dado: ${typeof nome}`);
console.log(`===================================`);

console.log(`===================================`);
console.log(`Idade: ${idade}`);
console.log(`Tipo de dado: ${typeof idade}`);
console.log(`===================================`);

console.log(`===================================`);
console.log(`Matricula: ${matriculado}`);
console.log(`Tipo de dado: ${typeof matriculado}`);
console.log(`===================================`);


//Operador Binario | usa 2 elemento
let curso = idade >= 15 && nota>=6
console.log(`Aluno apto a fazer o curso: ${curso}`);


//Operador Ternario | usa 3 elemento
let valor = 2500
//Regra do operador: TESTE ? "VERDADEIRO" : "FALSO"
let resposta = valor >= 2000 ? "Vou pra praia!" : "Fico em casa!"
console.log(resposta);

