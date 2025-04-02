export function executarExercicio() {
  alert("Exercicios de js Assíncrono!!");

  let num = Number(
    prompt(
      "Digite um numero para escolha do exercicio:\n1 = Crie uma Promise que resolve após 3 segundos e retorna a string Finalizado!. Exiba o resultado no console.\n2 = Crie uma função assíncrona que simula o download de um arquivo: O download leva de 1 a 5 segundos (escolha aleatório). Quando terminar, exiba Download concluído!.\n3 = Crie uma função chamada fazerPedido() que simula um pedido de comida em um restaurante.\n4 = Situações reais de uso de Promises e async/await"
    )
  );
  switch (num) {
    case 1:
      // Crie uma Promise que resolve após 3 segundos e retorna a string Finalizado!
      function criarPromise() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Finalizado!");
          }, 2000);
        });
      }
      criarPromise().then((resolve) => console.log(resolve));
      break;
    case 2:
      // Crie uma função assíncrona que simula o download de um arquivo:
      function downloadArquivo() {
        return new Promise((resolve, reject) => {
          let tempo = Math.floor(Math.random() * 5000) + 1000; // De 1 a 5 segundos
          console.log(`⏳ Baixando arquivo... (tempo: ${tempo / 1000}s)`);

          let progresso = 0;
          let intervalo = setInterval(() => {
            progresso += 20;
            console.log(`Progresso: ${progresso}%`);
          }, tempo / 5);

          setTimeout(() => {
            clearInterval(intervalo);
            if (Math.random() > 0.5) {
              resolve("✅Download Concluído!!");
            } else {
              reject("❌Erro no download");
            }
          }, tempo);
        });
      }
      async function arquivoBaixado() {
        try {
          let resultado = await downloadArquivo();
          console.log(resultado);
        } catch (erro) {
          console.log(erro);
        } finally {
          console.log("🔄 Processo finalizado");
        }
      }
      arquivoBaixado();
      break;
    case 3:
      function fazerPedido() {
        return new Promise((resolve, reject) => {
          let tempoPedido = Math.floor(Math.random() * 6000) + 2000;
          console.log(`🍴 Pedindo comida... (tempo: ${tempoPedido / 1000}s`);

          setTimeout(() => {
            if (Math.random() > 0.7) {
              resolve("🍔 Pedido pronto!");
            } else {
              reject("❌ Erro: pedido cancelado");
            }
          }, tempoPedido);
        });
      }
      async function pedidoPronto() {
        try {
          let resultadoPedido = await fazerPedido();
          console.log(resultadoPedido);
        } catch (erro) {
          console.log(erro);
        } finally {
          console.log("🔄 Processo finalizado");
        }
      }
      pedidoPronto();
      break;
    case 4:
      let caseReal = Number(
        prompt(
          "Escolha uma situação que ddeseja simular:\n1 = Requisições a APIs \n2 =Leitura de arquivos\n3 = Banco de dados \n4 = Timers (setTimeout, setInterval)\n4 = Processos demorados (exemplo: upload de arquivos)"
        )
      );
      switch (caseReal) {
        case 1:
          alert("Requisição de Api");

          fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((data) => console.log("📌 Tarefa:", data))
            .catch((erro) => console.log("❌ Erro na requisição:", erro));
          break;
        case 2:
          alert("Leitura de arquivo");
          const fs = require("fs").promises; // Importa o módulo fs com suporte a Promises
          fs.readFile("dados.txt", "utf8")
            .then((conteudo) => {
              console.log("📄 Conteúdo do arquivo:");
              console.log(conteudo);
            })
            .catch((erro) => {
              console.log("❌ Erro ao ler arquivo:", erro);
            });
          break;
        case 3:
          alert("Banco de dados");
          function buscarUsuario(id) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                let usuarios = {
                  1: "João",
                  2: "Maria",
                  3: "Pedro",
                };
                if (usuarios[id]) {
                  resolve(`👤 Usuário encontrado: ${usuarios[id]}`);
                } else {
                  reject("❌ Usuário não encontrado!");
                }
              }, 2000);
            });
          }
          buscarUsuario(1)
            .then((mensagem) => console.log(mensagem))
            .catch((erro) => console.log(erro));
          break;
        case 4:
          alert("Processos demorados");
          function uploadArquivo(nomeArquivo) {
            return new Promise((resolve, reject) => {
              let tempoUpload = Math.floor(Math.random() * 5000) + 1000; // 1 a 5 segundos
              console.log(
                `📤 Enviando ${nomeArquivo}... (tempo estimado: ${
                  tempoUpload / 1000
                }s)`
              );

              setTimeout(() => {
                if (Math.random() > 0.2) {
                  // 80% de chance de sucesso
                  resolve(`✅ Upload de ${nomeArquivo} concluído!`);
                } else {
                  reject(`❌ Falha ao enviar ${nomeArquivo}. Tente novamente.`);
                }
              }, tempoUpload);
            });
          }

          // Chamando a função
          uploadArquivo("documento.pdf")
            .then((mensagem) => console.log(mensagem))
            .catch((erro) => console.log(erro));
          break;
      }
  }
}
