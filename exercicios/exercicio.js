export function executarExercicio  () {
  alert("Executando exercicio 1!");

  //   Maior entre Dois Números
  //   Crie uma função maiorNumero(a, b)
  // que retorna o maior entre os dois números passados.

  let numeroA = Number(prompt("Por favor, Digite o primeiro numero:"));
  let numeroB = Number(prompt("Por favor, Digite o segundo numero:"));

  function verificarNumeroMaior(numeroA,numeroB) {
    numeroA >= numeroB
      ? alert(`O maior número é ${numeroA}`)
      : alert(`O maior número é ${numeroB}`);
  }

  verificarNumeroMaior(numeroA,numeroB)
}
