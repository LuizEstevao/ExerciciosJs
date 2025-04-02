export function executarExercicio() {
  alert("Executando a lista 2 de exercicios");

  let escolhaDeTema = Number(
    prompt(
      "Digite um numero e escolha um tema para executar:\n1 = Objetos e Manipulação de Objetos\n2 = Recursão\n3 = Programação Assíncrona (Básico) "
    )
  );

  switch (escolhaDeTema) {
    case 1:
      let caseObjetos = Number(
        prompt(
          "Agora escolha o exercicio a executar:\n1 = Crie um objeto pessoa com propriedades nome, idade e profissão, e exiba essas informações.\n2 = Adicione dinamicamente uma propriedade altura ao objeto do exercício anterior e exiba o objeto atualizado.\n3 = Crie uma função que recebe um objeto e exibe todas as suas chaves e valores."
        )
      );
      switch (caseObjetos) {
        case 1:
          let pessoa = {
            nome: "João",
            idade: 25,
            profissao: "Desenvolvedor",
          };
          alert(pessoa.nome);
          alert(pessoa.idade);
          alert(pessoa.profissao);
          break;
        case 2:
          let pessoa2 = {
            nome: "João",
            idade: 25,
            profissao: "Desenvolvedor",
          };

          pessoa2.altura = 1.8;
          alert(pessoa2.nome);
          alert(pessoa2.idade);
          alert(pessoa2.profissao);
          alert(pessoa2.altura);
          break;
        case 3:
          let pessoa3 = {
            nome: "João",
            idade: 25,
            profissao: "Desenvolvedor",
            altura: 1.8,
          };

          function exibirPropriedades(pessoa) {
            for (let chave in pessoa) {
              alert(chave + " = " + pessoa[chave]);
            }
          }

          // Chamando a função corretamente
          exibirPropriedades(pessoa3);

          break;
      }
    case 2:
      let caseRecursão = Number(
        prompt(
          "Escolha um dos exercicios:\n1 = Crie uma função recursiva que soma todos os números de 1 até um número dado.\n2 = Crie uma função recursiva que exibe uma contagem regressiva a partir de um número dado.\n3 = Crie uma função recursiva que retorna o n-ésimo número da sequência de Fibonacci."
        )
      );
      switch (caseRecursão) {
        case 1:
          let numero = Number(prompt("Digite um número:"));
          function somaRecursiva(numero) {
            if (numero == 0 || numero == 1) {
              return numero;
            } else {
              return numero + somaRecursiva(numero - 1); // Chamada recursiva
            }
          }
          alert(
            `A soma recursiva até ${numero} resulta em :${somaRecursiva(
              numero
            )}`
          );
          break;
        case 2:
          let numero2 = Number(prompt("Digite um número:"));
          function contagemRegressiva(numero2) {
            if (numero2 === 0) {
              return alert("Contagem encerrada!!");
            }
            console.log(`A contagem está em: ${numero2}`); // Exibe a contagem
            contagemRegressiva(numero2 - 1); // Chamada recursiva
          }
          contagemRegressiva(numero2);
          break;
        case 3:
          let n = parseInt(
            prompt(
              "Digite a quantidade de numeros que gostaria de ver da sequência:"
            )
          );

          for (let i = 0; i <= n; i++) {
            let fib = fibonacciRecursivo(i);
            console.log(`O ${i}º número da sequência de Fibonacci é: ${fib}
          `);
          }

          function fibonacciRecursivo(n) {
            if (n == 0 || n == 1) {
              return n;
            } else {
              return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
            }
          }
      }
    case 3:
      alert("Programação Assíncrona");
      let CaseProgramacaoAssincrona = Number(
        prompt(
          "Digite um numero e escolha o exercicio:\n1 = Crie uma função que exibe Olá, mundo! após 3 segundos.\n2 = Crie uma função que retorna uma Promise que resolve após 2 segundos e imprime Processo finalizado.\n3 = Crie uma função assíncrona que usa await para esperar 2 segundos antes de imprimir Executando operação...."
        )
      );
      switch (CaseProgramacaoAssincrona) {
        case 1:
          setTimeout(
            function () {
              alert("Olá mundo!");
            },

            3000
          );
        case 2:
          function processoAssincrono() {
            return new promisse((resolve) => {
              setTimeout(() => {
                resolve("Processo resolvido");
              }, 2000);
            });
          }
          processoAssincrono().then((resposta) => {
            console.log(resposta);
          });
          break;
        case 3:
          async function executarProcesso() {
            console.log("Iniciando");
            let resultado = await new Promise((resolve) => {
              setTimeout(() => {
                resolve("Processo finalizado");
              }, 2000);
            });
          }
          executarProcesso();
      }
  }
}
