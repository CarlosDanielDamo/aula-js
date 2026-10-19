/** Operadores Logicos
 * && - Lógica "and" ou "e", que retorna verdadeiro se todos os operadores forem verdadeiros.
 * || - lógica "or" ou "ou", que retorna verdadeiro se pelo menos um operador for verdadeiro
 * ! - Lógica "not" ou "Não", que retorna verdadeiro se for falso, falso se for verdadeiro
 */

//Testando Operador &&
let dinheiros = 500//2000
let sol = false //sol
//let praia = dinheiros >= 2000 && sol == true //Ele precisa que os dois operadores sejam true para retornar true
//let praia = dinheiros >= 2000 || sol == true //Ele precisa que um dos dois operadores sejam true pra retornar true
let praia = dinheiros >= ! sol == true //Ele inverte o valor do operador 
console.log(`Vamos para a praia? ${praia}`);
