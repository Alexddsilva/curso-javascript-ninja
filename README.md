# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = funtion (x){
  return x ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0)
isTruthy('')
isTruthy(null)
isTruthy(undefined)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1)
isTruthy('1')
isTruthy(0+1)
isTruthy(null + 1)
isTruthy(true)
isTruthy(!false)
isTruthy(!!true)
isTruthy('Alex')
isTruthy(!null)



/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const carro = {
    marca: 'GM',
    modelo: '2.0',
    placa: 'ASD1234',
    ano: 2010,
    cor: 'vermelho',
    numPortas: 4,
    assentos: 5,
    quantPessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
mudaCor = function (novaCor){
  carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
obterCor = function(){
  return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
obterModelo = function(){
  return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
obterMarca = function(){
  return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
obterMarcaModelo = function (){
  return `Esse carro é um ${carro.marca} ${carro.modelo}`
}

/*

Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function (Pessoas) {
    if (carro.quantPessoas === 5) {
        return 'O carro está lotado.'
    }
    if (carro.quantPessoas < 5) {
        if (carro.quantPessoas + Pessoas <= 5) {
            carro.quantPessoas += Pessoas;
            return `Já temos ${carro.quantPessoas} Pessoas`
        } else {
            return `Não é possivel adicionar ${Pessoas} ${5 - carro.quantPessoas > 1 ? 'pessoas' : 'pessoa'}, temos apenas ${5 - carro.quantPessoas} ${5 - carro.quantPessoas > 1 ? 'vagas' : 'vaga'}`
        }
    } else {
        return `Não é possivel adicionar ${Pessoas} ${5 - carro.quantPessoas > 1 ? 'pessoas' : 'pessoa'}, temos apenas ${5 - carro.quantPessoas} ${5 - carro.quantPessoas > 1 ? 'vagas' : 'vaga'}`
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor // 'vermelho'

// Mude a cor do carro para vermelho.
carro.mudarCor(vermelho)

// E agora, qual a cor do carro?
carro.cor // 'vermelho'

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')

// E agora, qual a cor do carro?
carro.cor // 'verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo // 'Esse é um GM 2.0'

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2) // 'Já temos 2 Pessoas'

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4) // 'Não é possível adicionar 4 pessoas, temos apenas 3 vagas'

// Faça o carro encher.
carro.adicionarPessoas(3) // 'Já temos 5 pessoas'

// Tire 4 pessoas do carro.
carro.removerpessoas = function (x){
  if (x <= carro.quantPessoas){
    carro.quantPessoas -= x;
    return `Sairam ${x} ${x > 1 ? 'pessoas':'pessoa'} do carro`
   }
}

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10) // 'Não é possível adicionar 10 pessoas, temos apenas 9 vagas'

// Quantas pessoas temos no carro?
carro.quantPessoas // 1
```
