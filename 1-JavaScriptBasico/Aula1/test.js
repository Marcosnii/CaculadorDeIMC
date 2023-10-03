function gerarSequencia(limite) {
    const sequencia = [1296, 4];
    
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
