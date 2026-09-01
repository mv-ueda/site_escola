const nomeAdministrador = sessionStorage.getItem("nomeAdministrador");
const campoNome = document.getElementById("nomeAdministrador");
const btnSair = document.getElementById("btnSair");

if (campoNome && nomeAdministrador) {
    campoNome.textContent = `Olá, ${nomeAdministrador}`;
}

function mostrarSecao(idSecao) {
    const secoes = document.querySelectorAll(".admin-secao");

    secoes.forEach(function (secao) {
        secao.style.display = "none";
    });

    const secaoSelecionada = document.getElementById(idSecao);

    if (secaoSelecionada) {
        secaoSelecionada.style.display = "block";
    }
}

btnSair.addEventListener("click", function () {
    sessionStorage.removeItem("adminAutorizado");
    sessionStorage.removeItem("nomeAdministrador");

    window.location.href = "login.html";
});

mostrarSecao("posts");