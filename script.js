const formulario = document.getElementById("dados_pessoais");
const idade = document.getElementById("idade");
const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

function verificarIdade() {
    const idadeValor = Number(idade.value);
    if (idadeValor >= 64) {
        return "Você é velho.";
    }
    if (idadeValor >= 18) {
        return "Você é maior de idade.";
    }
    return "Você é menor de idade.";
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const dados = {
        nome: nome.value,
        idade: idade.value
    };
    const texto = verificarIdade();
    mensagem.textContent = texto;
    console.log("Enviado apenas no botão:", dados, texto);
});