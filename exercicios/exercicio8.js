export function executarExercicio() {
  alert("Funções e Estruturas Avançadas");
  let execiseNum = parseInt(
    prompt(
      "Digite um numero e execute um dos exercicios:\n1 =Função Recursiva (Fatorial)\n2 =  Use map() para dobrar os valores de um array de números.\n3 = Crie uma função que recebe um objeto { nome, idade } e imprime Nome: X, Idade: Y."
    )
  );
  switch (execiseNum) {
    case 1:
      let num = parseInt(prompt("Digite um numero para calcular o fatorial: "));

      let resultado;

      function fatorialRecursivo(num) {
        if (num == 0 || num == 1) {
          resultado = 1;
        } else {
          resultado = num * fatorialRecursivo(num - 1);
        }
        return resultado;
      }
      fatorialRecursivo(num);
      alert(`O fatorial de ${num} é: ${resultado}`);
      break;
    case 2:
      let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      console.log(
        numeros.map((numeros) => {
          return numeros * 2;
        })
      );
      break;
    case 3:
      function exibirInformacoes({ nome, idade }) {
        console.log(`Nome: ${nome}, Idade: ${idade}`);
      }

      // Exemplo de uso:
      const pessoa = { nome: "Alex", idade: 25 };
      exibirInformacoes(pessoa);
      break;
  }
}
