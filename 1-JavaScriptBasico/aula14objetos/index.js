// quando eu crio as chaves { } isso é um objeto
//criando uma informaçoes de uma pessoa

/*const pessoa1 = {
    nome: 'antonio',
    apelido: 'tonho',
    idade: 59
};
console.log(pessoa1.apelido)*/

//forma mais facil de fazer.

/*function criaPessoa (nome, apelido, idade) {
    return { nome, apelido, idade }
}

const pessoa1 = criaPessoa('antonio','tonho', 45);
const pessoa2= criaPessoa('meire','baixa', 34);
const pessoa4 = criaPessoa('bruce','lee', 23);
const pessoa5 = criaPessoa('joze','tunico', 10);

console.log(pessoa1.nome, pessoa4.apelido);*/

const pessoa1 = {
    nome: 'antonio',
    apelido:'tonho',
    idade: 45,

    fala() {
        console.log(`${this.nome} ${this.apelido} está falando oi...`);

    }
};

pessoa1.fala();

