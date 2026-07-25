const nomeusuario = document.getElementById("nome_usuario");
const idadeusuario = document.getElementById("idade_usuario");

function limitenumero () {
    if(Number(idadeusuario.value >= 5)) {

        return console.log ("velho");
    }   
}

idadeusuario.addEventListener("input", () => {
    const resultado = limitenumero();
    if(resultado) {
        console.log(resultado);
    }
});
