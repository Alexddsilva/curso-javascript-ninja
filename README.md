# Challenge-06
/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// var championship = 'bundesliga'
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// var teams = ['corinthians', 'palmeiras', 'ponte preta', 'bragantino', 'sao paulo']
console.log('Times que estao participando do campeonato', teams)

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// var showTeamPosition = function (pos) {
    if (pos <= 5) {
        return `O time que está em ${pos}º é o ${teams[pos - 1]}`
    }
    if (pos > 5 || pos < 1) {
        return `Não temos informações sobre a posição escolhida`
    }
}


/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// var convertToHex = function (cor) {
    var hexa;
    switch (cor) {
        case 'red':
            hexa = '#FF0000'
            break;
        case 'blue':
            hexa = '#0000FF'
            break;
        case 'green':
            hexa = '#00FF00'
            break;
        case 'white':
            hexa = '#FFFFFF'
            break;
        case 'black':
            hexa = '#000000'
            break;
        case 'azure':
            hexa = '#F0FFFF'
            break;
        case 'cyan':
            hexa = '#00FFFF'
            break;
        case 'purple':
            hexa = '#A020F0'
            break;
        case 'gold':
            hexa = '#FFD700'
            break;
        default:
            if (hexa === undefined) {
                return `Você não passou uma cor para converter.`
            }
            return `Não temos o equivalente a hexadecimal para ${cor}.`
    }
    return `O hexadecimal para a cor ${cor} é ${hexa}.`
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// console.log(convertToHex('red'))
console.log(convertToHex('blue'))
console.log(convertToHex('green'))
console.log(convertToHex('white'))
console.log(convertToHex('black'))
console.log(convertToHex('azure'))
console.log(convertToHex('purple'))
console.log(convertToHex('golden'))

