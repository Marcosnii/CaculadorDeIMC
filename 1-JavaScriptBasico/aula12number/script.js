/*const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML= '';
texto.innerHTML += `<p>Sua Raiz Quadrada é: <strong>${numero **0.5}<strong>.</p>`;
texto.innerHTML += `<p>Esse número é NaN: <strong>${Number.isNaN(numero)}<strong>.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}<strong>.</p>`;
texto.innerHTML += `<p>Arredondando para Baixo: <strong>${Math.floor(numero)}<strong>.</p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}<strong>.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}<strong>.</p>`;*/

function gerarSequencia(limite) {
    const sequencia = [1296, 4,];
    
    while (true) {
        const ultimoNumero = sequencia[sequencia.length - 1];
        const proximoNumero = sequencia.length % 2 === 0 ? ultimoNumero + 1 : ultimoNumero * 2;
        
        if (proximoNumero <= limite) {
            sequencia.push(proximoNumero);
        } else {
            break;
        }
    }
    
    return sequencia;
}

const limiteSuperior = prompt("Digite o limite superior da sequência: ");
const sequencia = gerarSequencia(Number(limiteSuperior));

console.log("Sequência:");
for (const numero of sequencia) {
    console.log(numero);
}