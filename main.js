function carregarExercicio() {
  let seletorDeExercicio = document.getElementById("exercicioSelecionado");

  if (!seletorDeExercicio || !seletorDeExercicio.value) {
    alert("Nenhum exercicio selecionado");
    return;
  }

  let exercicio = seletorDeExercicio.value;

  import(`./exercicios/${exercicio}.js`)
    .then((module) => {
        module.executarExercicio();
    })
    .catch((error) => {
      console.error(error);
    });
}
