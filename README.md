## Desafio da semana #2
Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! 😄

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function ret2(x, y) {
  return x+y;
  }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const varFunc = ret2(2, 5) + 5

// Qual o valor atualizado dessa variável?
13

// Declare uma nova variável, sem valor.
var qqer;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function fraseNum(x) {
  qqer = x;
  return (y = `O valor da variavel é ${x}`);
}

// Invoque a função criada acima.
console.log(fraseNum(5));

// Qual o retorno da função? (Use comentários de bloco).
/*
O retorno da variável é o valor escolhido sempre pelo X.
/*

Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multi3(a, b, c) {
  if (!a || !b || !c) {
    console.log("Preencha todos os valores corretamente");
    return;
  } else {
    return (xis = a * b * c);
  }
}


// Invoque a função criada acima, passando só dois números como argumento.
console.log(multi3(1, 3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
"Preencha todos os valores corretamente"
"undefined"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multi3(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//6

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function recebe3(a, b, c) {
  if (a && !b && !c) {
    return a;
  } else if (a && b && !c) {
    return a + b;
  } else if (a && b && c) {
    return (a + b) / c;
  } else if (!a && !b && !c) {
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
recebe3(1); //1
recebe3(1,2); //3
recebe3(1,2,3)//1,5
recebe()//false
