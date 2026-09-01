const loginForm = document.getElementById("loginForm");
const mensagemLogin = document.getElementById("mensagemLogin");
const btnEsqueciSenha = document.getElementById("btnEsqueciSenha");

const USUARIO_ADMIN = "admin";
const SENHA_ADMIN = "escola123";

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === USUARIO_ADMIN && senha === SENHA_ADMIN) {
        sessionStorage.setItem("adminAutorizado", "true");
        sessionStorage.setItem("nomeAdministrador", nome);

        mensagemLogin.textContent = "Login realizado. Entrando no painel...";
        mensagemLogin.className = "mensagem-login sucesso";

        setTimeout(function () {
            window.location.href = "admin.html";
        }, 500);
    } else {
        mensagemLogin.textContent = "Nome de usuário ou senha inválidos.";
        mensagemLogin.className = "mensagem-login erro";
    }
});

btnEsqueciSenha.addEventListener("click", function () {
    mensagemLogin.textContent =
        "Este recurso estará disponível em uma versão futura do sistema.";

    mensagemLogin.className = "mensagem-login";
});