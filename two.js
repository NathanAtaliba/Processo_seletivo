const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
  console.log('Você digitou o número:', numero);

numero = parseInt(numero);
function isFibonacci(num) {
    let a = 0;
    let b = 1;
    let fibonacci = false;

    while (a <= num) {
        if (a === num) {
            fibonacci = true;
            break;
        }
        let temp = a;
        a = b;
        b = temp + b;   
    }

    return fibonacci;
    }

  if (isFibonacci(numero)) {
    console.log(`Pertence à sequência de Fibonacci`);
  } else {
    console.log(`Não pertence à sequência de Fibonacci`);
  }

  rl.close();
});