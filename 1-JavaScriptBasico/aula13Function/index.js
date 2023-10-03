//function ela retorna um valor

//exemplos
function soma(x, y) {
    const resultado = x + y;
    return resultado;
    //tudo que tiver a abaixo de return não executado
}

//console.log(soma(2, 50));

//exemplos
//const raiz = function (n) {
    //return n **0.5;
//}
//FORMA SIMPLIFICADA DE FAZER - a FUNCTION pode ser simplificada por esse sinal => 
const raiz = n => n ** 0.5;

console.log(raiz(25));