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
    if (idadeValor === 0) {
        return "voce não existe"
    }

    return "Você é menor de idade.";
}

function verificarNome() {
    const nomeDigitado = nome.value.trim().toLowerCase();
    const nomeEsperado = "lucas";

    if (nomeDigitado === nomeEsperado) {
        return console.log("legaalll");
    }

    return console.log("nem tentou");
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = {
        nome: nome.value,
        idade: idade.value
    };

    const textoIdade = verificarIdade();
    const textoNome = verificarNome();

    mensagem.textContent = `${textoIdade} ${textoNome}`;
    console.log("Enviado:", dados, textoIdade, textoNome);
});