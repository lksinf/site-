const formulario = document.getElementById("dados_pessoais");
const idade = document.getElementById("idade");
const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

function verificarIdade() {
    const idadeValor = Number(idade.value);
    if (idadeValor >= 64) {
        return "Você é velho.";
    }
    else if (idadeValor >= 18) {
        return "Você é maior de idade.";
    }
    else if (idadeValor === 0) {
        return "Você não existe.";
    }

    return "Você é menor de idade.";
}

function verificarNome() {
    const nomeDigitado = nome.value.trim().toLowerCase();
    const nomeEsperado = "lucas";

    if (nomeDigitado === nomeEsperado) {
        return ("legaalll")   
    } else if (nomeDigitado === "lucas the goat") {
        return ("niceee");
    }
    return ("nome não reconhecido");
}

function numeroidade() {
    if (Number(idade.value) < 0) {
        alert("Idade inválida. Por favor, insira um valor positivo.");
        formulario.reset();
        return false;
    }
    return true;
}

function reconheceradm() {
    if (nome.value.trim().toLowerCase() === "lucas the goat" && Number(idade.value) === 16) {
        return ("Administrador reconhecido.");
    }
    return ("Usuário comum.");
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();


    if (!numeroidade()) {
        return;
    }


    reconheceradm();

    const dados = {
        nome: nome.value,
        idade: idade.value
    };

    const textoIdade = verificarIdade();
    const textonome = verificarNome();
    const textoadmin = reconheceradm();

    mensagem.textContent = `${textoIdade} ${textonome}`;
    console.log("Enviado:", dados, textoIdade, textonome, textoadmin);

});


 
