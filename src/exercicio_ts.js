"use strict";
const somaDoisValores = (primeiroValor, segundoValor) => primeiroValor + segundoValor;
console.log(somaDoisValores(20, 30));
const funcaoSaudacao = (nome) => {
    nome = "Gabriel";
    return `Olá ${nome}`;
};
const mensagem = funcaoSaudacao('Gabriel');
console.log(mensagem);
