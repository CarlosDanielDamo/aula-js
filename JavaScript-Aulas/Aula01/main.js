//Escopo Global
//Pode ser redeclarado
//Forma não utilizada mais
var nomeAluno = "Carlos Daniel" //string
//var idade = 23 //int

//Escopo de Bloco
//Não pode ser redeclarado
let nomeAluno2 = "Carol Paixão" //String
let idade2 = 20

//Constante com valor imutavel
const BEBIDA = 18
const MEDIA = 7

let recreio30m = true

/** Tipos de Dados
 * String - "Textos"
 * Int(Inteiro) - 12, -9
 * Float - 7.5, 0.1
 * Boolean - True e False
 */

/** Declaração de variavel
 * var - Escopo global
 * let - Escopo Local
 * const - Contante imutavel
 */

let nome = "Carlos Daniel"
let jogo = "Persona"
let idade = 23
let jogaBem = true

//console.log('Olá, meu nome é ' + nome +' e tenho ' + idade +' anos de idade, meu jogo favorito é ' + jogo +' e eu sou bom no jogo: ' + jogaBem);
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos de idade, Meu jogo favorito é ${jogo} e eu jogo muito bem: ${jogaBem}`);

let nota1 = 10
let nota2 = 4.5
let media = (nota1 + nota2) /2

console.log(`A media do aluno com as notas ${nota1} e ${nota2} é de: ${media}`);

