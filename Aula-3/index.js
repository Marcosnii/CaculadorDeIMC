/*const hora = 12;

if (hora <= 12) {
    console.log('Bom dia');
}
else if(hora >= 12) {
    console.log('Boa noite');
}
Se a hora for menor que 12 horas falar bom dia, mas se a hora for maior que 12 horas falar boa noite. 
Primeiro se usa o if, depois for dando mais condiçoes se usar else if...*/


// *Outro exemplo pratico://
// Entre 00 - 11 falar 'Bom dia'
// Entre 12 - 17 falar 'Boa tarde'
// Entre 18 - 23 falar 'Boa noite'

const hora = 200;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}
else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}
else if(hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}
// o ELSE é uma ultima condição, se acontecer alguma coisa diferente do eu pedi para fazer vai entrar a mensagem ELSE.
else{
    console.log('ajustar seu relogio')  
}

// Conclusão // 
// if pode ser usado sozinho
// O Else if sempre utilizo depois de um if, não da para usar sem antes ter usado um if.
// Posso usar quantos Else if eu quiser, posso ter varios na condição.
// Já o Else sozinho só posso usar ele uma vez na minha checagem. Ele é usado por ultima numa checagem.
// QUANDO ELE CHEGA E ENCONTRA UMA CONDIÇÃO ELSE IF VERDADEIRA OU A CORRESPONDENDO, SERÁ EXIBIDO A PRIMEIRA...
// ... QUE ENCONTRAR, SENDO ASSIM TODAS AS OUTRAS CONDIÇOES NÃO APARECEREÇÃO.