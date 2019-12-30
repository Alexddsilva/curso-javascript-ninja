/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, 'bola', null, function () { return `hello world` }, true]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = function (item) {
    arr.push(item);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

arr2 = [2, false, 'Nice'];
arr.push(arr2);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é o elemento ${arr[5][1]}`)

/*`
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O primeiro array tem ${arr.length} itens`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[5].length} itens`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var soPares = 10;
while (soPares <= 20) {
    if (soPares % 2 == 0) {
        console.log(soPares)
        soPares += 2;
    }
}
console.log('-----------------------');
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var soImpares = 10;
while (soImpares <= 20) {
    if (soImpares % 2 == 1) {
        console.log(soImpares)
    }
    soImpares++;
}
console.log('-----------------------');
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var soParesAlto = 100
while (soParesAlto <= 120) {
    if (soParesAlto % 2 == 0) {
        console.log(soParesAlto)
    }
    soParesAlto++;
}
console.log('-----------------------');
// ?

var soImparesAlto = 111;
while (soImparesAlto <= 125) {
    if (soImparesAlto % 2 == 1) {
        console.log(soImparesAlto)
    }
    soImparesAlto++;
}
console.log('-----------------------');
// ?