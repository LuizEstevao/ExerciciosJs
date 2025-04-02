export function executarExercicio() {
  alert("Programação Assíncrona");
  let exAssincrono = parseInt(
    prompt(
      "Digite um número para executar o exercício assíncrono:\n1 = Crie uma função que exibe Olá, mundo! após X segundos (passados como parâmetro).\n 2 = Crie uma Promise que resolve ou rejeita aleatoriamente após 3 segundos.\n3 = Async/Await com Fetch → Use fetch() para obter dados de uma API pública e exibir no console. "
    )
  );
  switch (exAssincrono) {
    case 1:
      setTimeout(() => {
        alert("Olá, Mundo!!!");
      }, 3000);
      break;
    case 2:
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() < 0.5 ? resolve("Resolvido") : reject("Rejeitado");
        }, 3000);
      });
      promise
        .then((res) => {
          alert(res);
        })
        .catch((err) => {
          alert(err);
        });
      break;
    case 3:
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
  }
}
