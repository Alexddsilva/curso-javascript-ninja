# Challenge-05

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const arr = [1, 21, 15, 9, 2]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunc = function(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myfunc()[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var myFuncReturnParam = function (first, second) {
  return first[second];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const arrDif = [1, '1', true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 
myFuncReturnParam(arrDif, 0)
myFuncReturnParam(arrDif, 1)
myFuncReturnParam(arrDif, 2)
myFuncReturnParam(arrDif, 3)
myFuncReturnParam(arrDif, 4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// const book = function (livro) {
    var colecao = {
        prop1: {
            quantidadePaginas: 25,
            autor: 'Emersan',
            editora: 'beFree'
        },
        prop2: {
            quantidadePaginas: 35,
            autor: 'Nasreme',
            editora: 'Freebe'
        },
        prop3: {
            quantidadePaginas: 45,
            autor: 'Sanemer',
            editora: 'beFF'
        }
    }
    switch (livro) {
        case 1:
            return colecao.prop1;
        case 2:
            return colecao.prop2;
        case 3:
            return colecao.prop3;
        default:
            return colecao;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
