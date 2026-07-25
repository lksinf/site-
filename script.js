const nomeusuario = document.getElementById("nome");
const idadeusuario = document.getElementById("idade");

function limitenumero () {
    const idade = Number(idadeusuario.value);
    if (idade >= 70) {
        return "velho";
    }
    return "";
}

idadeusuario.addEventListener("input", () => {
    const resultado = limitenumero();
    if (resultado) {
        console.log(resultado);
        alert(resultado);
    }
});


