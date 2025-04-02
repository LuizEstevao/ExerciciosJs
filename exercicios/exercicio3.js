export function executarExercicio() {
  alert("executando exercicio");

  // Contagem de Vogais
  // Crie uma função contarVogais(texto) que retorna o número de vogais em uma string.

  let palavra = String(
    prompt("Digite uma palvra qualquer para se detectar suas vogais:")
  );
  let vogais = "AEIOUaeiou";

  function DetectorDeVogais(palavra, vogais) {
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) {
        contador++;
      }
    }    
    return contador;
  }

  alert(
    `A palavra ${palavra} tem ${DetectorDeVogais(palavra, vogais)} vogais`
  );
}
