var clientes = [
    {
      'id': 1,
      'nome': 'Luis Santos Silveira',
      'idade': 18
    },
    {
      'id': 2,
      'nome': 'Ricardo Lopes Alves',
      'idade': 30
    },
    {
      'id': 3,
      'nome': 'Gustavo Silva Junior',
      'idade': 26
    }
];

var numero = '5(1)9-876-543-21';

for (i in clientes) {
    // console.log(clientes[i].nome)
    var divisao = clientes[i].nome.split(' ')
    var sobrenome = divisao[2]
    var nome = divisao[0]

    let dados = `ultimoSobrenome ${sobrenome}, primeiroNome ${nome}`

    console.log(dados)


}
