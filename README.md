# Desafio da semana #3

## //Declararr uma variável qualquer, que receba um objeto vazio.
var qqer = {};

## Declarar uma variável `pessoa`, que receba suas informações pessoais.
## As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
## `nome` - String
## `sobrenome` - String
## `idade` - Number
## `altura` - Number
## `peso` - Number
## `andando` - Boolean
## `camihouQuantosMetros` - Number - recebe "zero" por padrão.
const pessoa = {
  nome: "Alex",
  sobrenome: "Silva",
  sexo: "masculino",
  idade: 24,
  ltura: 1.78,
  peso: 90.35,
  andando: false,
  camihouQuantosMetros: 0
};

## Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método
## deve alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que for chamado. 
pessoa.aniversario = function() {
  pessoa.idade++;
};

## Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguntes características:
## - Esse método deve receber por parâmetro um valor que representará a quantidade de metros camihados;
## - Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao valor dessa propriedade a quantidade
## de metros caminhados, e modificar a propriedade `andando` para boolean verdadeiro.
pessoa.andar = function(x) {
  pessoa.andando = true;
  camihouQuantosMetros += x;
  return `${pessoa.nome} caminhou ${x} metros`; 
};

## Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor da propriedade `andando` para falso.
pessoa.parar = function() {
  pessoa.andando = false;
  return `${pessoa.nome} parou de camihar`
};

## Crie um método chamado `nomeCompleto`, que retorne a frase: 
## "Olá! meu nome é `NOME` `SOBRENOME`!.
pessoa.nomeCompleto = function() {
  return `Olá! meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`
}

## Crie um método chamado `mostrarIdade`, que retorne a frase:
## - "Olá, eu tenho [IDADE] anos!"
pessoa.mostrarIdade = function() {
  return `Olá, eu tenho ${pessoa.idade} anos!`
}

## Crie um método chamado `mostrarPeso`, que retorne a frase:
## - "Eu peso [PESO]Kg."
pessoa.mostrarPeso = function() {
  return `Eu Peso ${pessoa.peso}Kg.`
}

## Crie um método chamado `mostrarAltura` que retorne a frase:
## - "Minha altura é [ALTURA]m."
pesoa.mostrarAltura = function () {
  return `Minha altura é ${pessoa.altura}m.`
}

## Agora vamos brincar um pouco com o objeto criado:
## Qual o nome completo da pessoa? (Use a instrução para responder e comentários
## inline ao lado da instrução para mostrar qual foi a resposta retornada)
pessoa.nomeCompleto() // "Olá meu nome é Alex Silva!"
 
## Qual o peso da pessoa? (Use a instrução para responder e comentários
## inline ao lado da instrução para mostrar qual foi a resposta retornada)
pessoa.mostrarPeso() // "Eu peso 90.35Kg."

## Qual a altura da pessoa? (Use a instrução para responder e comentários
## inline ao lado da instrução para mostrar qual foi a resposta retornada)
pessoa.mostrarAtura() // "Minha altura é 1.78m"

## Faça a `pessoa` fazer 3 aniversários.
pessoa.aniversario() // 26
pessoa.aniversario() // 27
pessoa.aniversario() // 28

## Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
## comentários inline ao lado da instrução para mostrar qual foi a resposta
## retornada)
pessoa.idade // 28

## Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
## com metragens diferentes passadas por parâmetro.
pessoa.andar(2)
pessoa.andar(3)
pessoa.andar(4)

## A pessoa ainda está andando? (Use a instrução para responder e comentários
## inline ao lado da instrução para mostrar qual foi a resposta retornada)
pessoa.andando // true

## Se a pessoa ainda está andando, faça-a parar.
pessoa.parar() // "Alex parou de andar".

## E agora: a pessoa ainda está andando? (Use uma instrução para responder e
## comentários inline ao lado da instrução para mostrar a resposta retornada)
pessoa.andando // false

## Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
## inline ao lado da instrução para mostrar a resposta retornada)
pessoa.caminhouQuantosMetros() //9

## Agora vamos deixar a brincadeira um pouco mais divertida! :D
## Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
## retornar a string:
## - "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
pessoa.apresentacao = function() {
  apresentacaoSexo = pessoa.sexo == "masculino" ? "Olá, eu sou o" : "Olá, eu sou o";
  apresentacaoIdade = pessoa.idade == 1 ? "ano" : "anos";
  apresentacaoMetros = pessoa.caminhouQuantosMetros == 1 ? "metro" : "metros";
  return `${apresentacaoSexo} ${pessoa.nome}, eu tenho ${pessoa.idade} ${apresentacaoIdade}, e hoje caminhei ${pessoa.caminhouQuantosMetros} ${apresentacaoMetros}`
};
