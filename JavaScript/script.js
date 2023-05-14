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


//Aqui é usado REGEX para formatar o número de telefone para o padrão requisitado.
var numero = "5(1)9-876-543-21";
let numeros = numero.replace(/\D/g,'');
let numero_formatado = numeros.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1)_$2_$3-$4');
console.log(numero_formatado);


//Descontrução dos nomes para separalos e puxar por partes
for (i in clientes) {
    // console.log(clientes[i].nome)
    var divisao = clientes[i].nome.split(' ')
    var sobrenome = divisao[2]
    var nome = divisao[0]

    let dados = `ultimoSobrenome ${sobrenome}, primeiroNome ${nome}`

    console.log(dados)


}


// Bônus 1)

// A função é: c
// A função é: d

// Bônus 2)

// Não existe nenhum erro no código, porém a função b() contém um return antes de alertUser('b'), o que significa que a função será encerrada antes de exibir a mensagem de alerta.
// Na função c, retorna uma promessa, mas chama resolve() antes de exibir a mensagem de alerta. O que faz com que a promisse vai ser resolvida antes do alerta. 
// Na função d, retorna a promessa mas ela nunca vai ser resolvida.