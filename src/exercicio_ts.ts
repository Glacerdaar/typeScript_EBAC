const somaDoisValores = (primeiroValor: number, segundoValor: number):number => primeiroValor + segundoValor;

console.log(somaDoisValores(20,30));



const funcaoSaudacao = (nome: string): string => {
    nome = "Gabriel"
    return `Olá ${nome}`
}

const mensagem = funcaoSaudacao('Gabriel');
console.log(mensagem);
    