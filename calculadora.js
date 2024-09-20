const prompt = require('prompt-sync')();

function adicionar(a, b) {
  return a + b;
}

function subtrair(a, b){
  return a - b;
}

function multiplicar(a, b){
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

function calculadora() {
  const operacao = prompt('Escolha a operação (adicionar, subtrair): ');
  const num1 = parseFloat(prompt('Digite o primeiro número: '));
  const num2 = parseFloat(prompt('Digite o segundo número: '));

  let resultado;
  switch (operacao) {
      case 'adicionar':
          resultado = adicionar(num1, num2);
          break;
      case 'subtrair':
        resultado = subtrair(num1, num2);
        break;
      case'multiplicar':
        resultado = multiplicar(num1, num2);
        break;
      case 'dividir':
        resultado = dividir(num1, num2);
        break;
      default:
          console.log('Operação inválida!');
          return;
  }

  console.log(`O resultado é: ${resultado}`);
}

calculadora();