const loginForm = document.getElementById("loginForm");
const mensagemLogin = document.getElementById("mensagemLogin");

const USUARIO_ADMIN = "admin";
const SENHA_ADMIN = "escola123";

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === USUARIO_ADMIN && senha === SENHA_ADMIN) {
        sessionStorage.setItem("adminAutorizado", "true");
        sessionStorage.setItem("nomeAdministrador", nome);

        window.location.href = "admin.html";
    } else {
        mensagemLogin.textContent = "Nome ou senha inválidos.";
        mensagemLogin.className = "mensagem-login erro";
    }
});