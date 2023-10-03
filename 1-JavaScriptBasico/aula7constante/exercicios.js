const nome = 'Marcos Vinicius';
const sobrenome = 'Silva';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade

//console.log(nome, sobrenome, 'tem', idade, 'anos', 'pesa', peso +'kg', 'tem', alturaEmM, ----> Continua..
//----> 'de altura e seu IMC é de', imc, 'e', nome, 'nasceu em', anoNascimento);

// Forma mais moderna e mais usada hoje de escrever.
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmM} de altura 
e seu IMC é de ${imc} e ${nome} nasceu em ${anoNascimento}.`);