export function executarExercicio() {
  alert("Fundamentos da Lógica de programção");
  let numeroQuestao = Number(
    prompt(
      "Escolha o exercicio que queira executar:\n1 = Crie uma função que recebe um número e retorna Par ou Ímpar\n2 = Crie uma função que recebe um número e retorna seu fatorial.\n 3 = Crie uma função que recebe uma string e retorna o número de vogais nela. "
    )
  );
  switch (numeroQuestao) {
    case 1:
      let numParOuImpar = parseInt(
        prompt("Digite um numero para verificar se ele é impar ou par:")
      );
      function parOuImpar() {
        if (numParOuImpar % 2 == 0) {
          alert("O numero digitado é par");
        } else {
          alert("O numero digitado é impar");
        }
      }
      parOuImpar();
      break;
    case 2:
      let numFatorial = parseInt(
        prompt("Digite um numero para calcular seu fatorial:")
      );
      let resultado;
      function fatorial(numFatorial) {
        if (numFatorial == 0 || numFatorial == 1) {
          resultado = 1;
        } else {
          resultado = numFatorial * fatorial(numFatorial - 1);
        }
        return resultado;
      }
      alert(`O fatorial e ${numFatorial} é ${fatorial(numFatorial)}`);
      break;
    case 3:
      let palavra = String(
        prompt("Digite uma palavra para calcular o numero de vogais")
      );
      let vogais = "aeiouAEIOU";
      let resultadoVogais = 0;
      function contarVogais(palavra, vogais) {
        for (let scanner = 0; scanner < palavra.length; scanner++) {
              if(vogais.includes(palavra[scanner])){
                resultadoVogais++;
              }
              
        }
       return resultadoVogais
      }
      alert(`A palavra ${palavra} tem ${contarVogais(palavra, vogais)} vogais`);
  }
}
