export function executarExercicio() {
  alert("Estruturas de Dados e Algoritmos");

  let algortimos = Number(
    prompt(
      "Digite um numero e escolha um exercicio:\n1 =Implemente o algoritmo de ordenação Bubble Sort para ordenar um array de números.\n2 = Implemente um algoritmo que recebe um array ordenado e um número-alvo e retorna sua posição.\n3 = Crie uma função que recebe um array e retorna um novo array sem elementos duplicados.\n4 = O exercicio anterior sem usar Set"
    )
  );

  switch (algortimos) {
    case 1:
      function BubbleSort(array) {
        let trocafeita;

        do {
          trocafeita = false;
          for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
              let armazenarTroca = array[i];
              array[i] = array[i + 1];
              array[i + 1] = armazenarTroca;
              armazenarTroca = true;

              trocafeita = true;
            }
          }
        } while (trocafeita);
        console.log("O array ordenado fica:", array);
      }

      let array = [5, 3, 8, 1, 2];
      BubbleSort(array);
      break;
    case 2:
      function buscaBinaria(array, esquerda, direita, valor) {
        let meio = Math.floor((esquerda + direita) / 2);

        if (esquerda > direita) {
          return -1;
        }

        if (array[meio] === valor) {
          return meio;
        } else if (array[meio] > valor) {
          return buscaBinaria(array, meio - 1, esquerda, valor);
        } else {
          return buscaBinaria(array, meio + 1, direita, valor);
        }
      }
      console.log(buscaBinaria([10, 20, 40, 60, 90, 120], 0, 5, 120));
      break;
    case 3:
      const numeros = [10, 20, 30, 40, 30, 50];

      function removerDuplicatas(numeros) {
        return [...new Set(numeros)];
      }
      console.log(removerDuplicatas(numeros));
      break;
    case 4:
      function removerDuplicatasSemSet(arrayDeNumeros) {
        let unicos = arrayDeNumeros.filter(
          (valor, indice, arrayDeNumeros) =>
            arrayDeNumeros.indexOf(valor) === indice
         
        );
        console.log(unicos)
      }
      let arrayDeNumeros = [1, 2, 3,3, 4, 5, 6,6, 7, 8, 10];
      removerDuplicatasSemSet(arrayDeNumeros);

      break;
  }
}
