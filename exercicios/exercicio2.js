export function executarExercicio() {
  alert("Executando exercicio 2");

  // Fatorial de um Número
  // Crie uma função fatorial(n) que retorna o fatorial de n (exemplo: fatorial(5) = 120).

  let n = Number(
    prompt("Por favor digite o numero que vc gostaria de saber o fatorial:")
  );

  let resultado = 0;
  function calcularFatorial(n) {
    return n == 0 || n == 1
      ? (resultado = 1)
      : (resultado = n * calcularFatorial(n - 1));
  }

  alert(`O fatorial de ${n} é: ${calcularFatorial(n)}`);
}
