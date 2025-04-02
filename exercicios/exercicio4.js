export function executarExercicio() {
  alert("Executando a lista 1 de exercicios");
  alert("Digite um numero e escolha o tema a executar:");

  let escolhaDeTema = Number(
    prompt(
      "\n1 = Variáveis e Tipos de Dados.\n2 = Operadores Aritméticos e Lógicos.\n3 = Estruturas Condicionais.\n4 = Estruturas de Repetição.\n5 = Funções (function)\n6 = Arrays e Métodos de Arrays\n7 = Manipulação de Strings"
    )
  );

  switch (escolhaDeTema) {
    case 1:
      alert("Variáveis e Tipos de Dados");

      let caseVariavelEtiposDeDados = Number(
        prompt(
          "escolha um dos três exercicios:\n1 = Declare uma variável nome e armazene seu nome nela. Em seguida, exiba no console.\n2 = Peça ao usuário um número e exiba o dobro desse número\n3 = Declare duas variáveis a e b, atribua valores a elas e troque os valores sem criar uma terceira variável."
        )
      );
      switch (caseVariavelEtiposDeDados) {
        case 1:
          let nome = prompt("Digite seu nome:");
          alert(nome);
          break;
        case 2:
          let numero = Number(prompt("Digite um número:"));
          alert(numero * 2);
          break;
        case 3:
          let a = 10;
          let b = 20;
          alert("Antes de trocar os valores: a = " + a + " b =" + b);
          let a2 = a;
          a = b;
          b = a2;
          alert("Depois de trocar os valores: a = " + a + " b =" + b);
      }
      break;
    case 2:
      alert("Operadores Aritméticos e Lógicos");
      let caseOperadoresAritmeticosELogicos = Number(
        prompt(
          "escolha um dos três exercicios:\n1 = Peça ao usuário sua idade e diga se ele é maior de idade (18 anos ou mais).\n2 =Peça ao usuário um número e diga se ele é par ou ímpar.\n3 = Verifique se um número está entre 10 e 50 (inclusive)."
        )
      );

      switch (caseOperadoresAritmeticosELogicos) {
        case 1:
          let idade = Number(prompt("Digite sua idade:"));
          if (idade >= 18) {
            alert("Você é maior de idade");
          } else {
            alert("Você é menor de idade");
          }
          break;
        case 2:
          let numeroParOuImpar = Number(prompt("Digite um número:"));
          if (numeroParOuImpar % 2 == 0) {
            alert("O número é par");
          } else {
            alert("O número é ímpar");
          }
          break;
        case 3:
          let numeroEntreDezeEcinquenta = Number(prompt("Digite um número:"));
          if (
            numeroEntreDezeEcinquenta >= 10 &&
            numeroEntreDezeEcinquenta <= 50
          ) {
            alert("O número está entre 10 e 50");
          } else {
            alert("O número não está entre 10 e 50");
          }
          break;
      }
    case 3:
      alert("Operadores de Comparação");
      let caseOperadoresComparacao = Number(
        prompt(
          "escolha um dos exercicios:\n1 = Peça dois números e uma operação (+, -, *, /) ao usuário e exiba o resultado.\n2 = Peça uma nota (0 a 10) e exiba: Aprovado se for 7 ou mais.Recuperação se for entre 5 e 6.9.Reprovado se for menor que 5."
        )
      );

      switch (caseOperadoresComparacao) {
        case 1:
          let num1 = Number(prompt("Digite o primeiro número:"));
          let num2 = Number(prompt("Digite o segundo número:"));
          let operacao = prompt("Digite a operação (+, -, *, /):");
          switch (operacao) {
            case "+":
              alert(num1 + num2);
              break;
            case "-":
              alert(num1 - num2);
              break;
            case "*":
              alert(num1 * num2);
              break;
            case "/":
              if (num2 != 0) {
                alert(num1 / num2);
                break;
              } else {
                alert("Não é possível dividir por zero");
              }
              break;
          }
        case 2:
          let nota = parseFloat(prompt("Digite sua nota:"));
          nota >= 7
            ? alert("Aprovado")
            : nota >= 5 && nota <= 6.9
            ? alert("Recuperação")
            : alert("Reprovado");
          break;
      }
    case 4:
      alert("Estruturas de Repetição (for, while, do while)");
      let caseEstruturasRepeticao = Number(
        prompt(
          "escolha um dos exercicios:\n1 = Exiba a tabuada do número 5 usando for.\n2 = Exiba uma contagem regressiva de 10 até 1 usando while.\n3 = Peça números ao usuário até que ele digite um número negativo, então exiba a soma dos números positivos digitados."
        )
      );
      switch (caseEstruturasRepeticao) {
        case 1:
          for (let i = 0; i <= 10; i++) {
            console.log(`5 X ${i} = ${5 * i}`);
          }
          break;
        case 2:
          let i = 10;
          while (i > 0) {
            console.log(i);
            i--;
          }
          break;
        case 3:
          let soma = 0;
          let numero;
          do {
            numero = parseInt(
              prompt(
                "Digite um numero positivo para continuar a acrescentar(para parar e somar os numeros adicionados insira um numero negativo)"
              )
            );
            if (numero >= 0) {
              soma += numero;
            }
          } while (numero >= 0);
          alert(`A soma dos números positivos digitados é: ${soma}`);
      }
    case 5:
      alert("Funções");
      let casoFuncoes = Number(
        prompt(
          "escolha um numero para selecionar o exercicio:\n1 =Crie uma função que recebe dois números e retorna a soma deles.\n2 = Crie uma função que recebe uma string e retorna a string invertida.\n3 = Crie uma função que calcula o fatorial de um número recebido como parâmetro."
        )
      );
      switch (casoFuncoes) {
        case 1:
          let num1 = parseFloat(prompt("Digite o primeiro numero:"));
          let num2 = parseFloat(prompt("Digite o segundo numero:"));
          function soma(num1, num2) {
            return num1 + num2;
          }
          alert(soma(num1, num2));
          break;
        case 2:
          let string = String(prompt("Digite uma string:"));

          function inverterString(string) {
            let invertida = "";
            for (let i = string.length - 1; i >= 0; i--) {
              invertida += string[i];
            }
            return invertida;
          }
          alert(`${string} invertido fica: ${inverterString(string)}`);
          break;

        case 3:
          let num = parseInt(
            prompt("Digite um numero para calcular o fatorial:")
          );
          function fatorial(num) {
            let resultado = 0;
            return num == 0 || num == 1
              ? (resultado = 1)
              : (resultado = num * fatorial(num - 1));
          }
          alert(`O fatorial de ${num} é: ${fatorial(num)} `);
      }
    case 6:
      alert("Arrays!!");
      let caseArrays = Number(
        prompt(
          "Escolha o exercicio:\n1 = Crie um array de números e exiba a soma de seus elementos.\n2 = Crie um array com números de 1 a 10 e use filter() para exibir apenas os pares.\n 3 =  Use map() para criar um novo array onde cada número do array original seja multiplicado por 2."
        )
      );
      switch (caseArrays) {
        case 1:
          let array = [1, 2, 3, 4, 5];
          let somaArray = array.reduce((acumulador, atual) => {
            return acumulador + atual;
          });
          alert(`A soma dos numeros do array resulta em : ${somaArray}`);
          break;

        case 2:
          let arrayExDois = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          let numerosPares = arrayExDois.filter((numero) => {
            return numero % 2 == 0;
          });
          alert(`Os numeros pares do array são: ${numerosPares}`);
          break;
        case 3:
          let arrayExTres = [1, 2, 3, 4, 5];
          let numeroDobrados = arrayExTres.map((dobros) => {
            return dobros * 2;
          });
          alert(`Os numeros do array dobrados são: ${numeroDobrados}`);
      }
    case 7:
      alert("Manipulação de strings!!");
      let caseString = Number(
        prompt(
          "Escolha um dos Exercicios:\n1 = Peça ao usuário uma palavra e exiba quantos caracteres ela tem.\n2 = Peça ao usuário uma frase e exiba a versão toda em maiúsculas e toda em minúsculas\n3 = Peça ao usuário uma frase e uma palavra a ser substituída, depois peça a nova palavra e exiba a frase modificada."
        )
      );
      switch (caseString) {
        case 1:
          let palavra = String(prompt("Digite uma palavra:"));
          let tamanhoPalavra = palavra.length;
          alert(`A palavra ${palavra} tem ${tamanhoPalavra} caracteres`);
          break;
        case 2:
          let frase = String(prompt("Digite uma frase:"));
          let palavraMaiuscula = frase.toUpperCase();
          let palavraMinuscula = frase.toLowerCase();
          alert(
            `A frase ${frase} em maiuscula é: ${palavraMaiuscula}\n e em minuscula é: ${palavraMinuscula}`
          );
          break;
        case 3:
          let fraseAmodificar = String(prompt("Digite uma frase:"));
          let palavraSubstituir = String(
            prompt("Digite uma palavra para substituir:")
          );
          let novaPalavra = String(prompt("Digite a nova palavra:"));

          let FraseModificada = fraseAmodificar.replace(
            palavraSubstituir,
            novaPalavra
          );
          alert(`A frase modificada é: ${FraseModificada}`);
      }
  }
}
