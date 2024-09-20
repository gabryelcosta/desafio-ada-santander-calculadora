const prompt = require('prompt-sync')();

function adicionar(a, b) {
  return a + b;
}

function calculadora() {
  const operacao = prompt('Escolha a operação (adicionar): ');
  const num1 = parseFloat(prompt('Digite o primeiro número: '));
  const num2 = parseFloat(prompt('Digite o segundo número: '));

  let resultado;
  switch (operacao) {
      case 'adicionar':
          resultado = adicionar(num1, num2);
          break;
      default:
          console.log('Operação inválida!');
          return;
  }

  console.log(`O resultado é: ${resultado}`);
}

calculadora();