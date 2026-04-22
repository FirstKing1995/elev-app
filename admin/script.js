// Cole aqui o link gerado no Passo 3 da Fase 1 (Aquele que termina em /exec)
const URL_DA_SUA_API = "https://script.google.com/macros/s/AKfycbw3EDuQDQfq4Lh-4MtDu4SubLkEIKafVR7J_eAvt9Gwmfcm5EjcVMFUrTzXv2to2SLg/exec"; 

const formLogin = document.getElementById("form-login");
const btnLogin = document.getElementById("btn-login");
const msgErro = document.getElementById("mensagem-erro");

// O que acontece quando clica no botão Entrar
formLogin.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    // Pega os valores digitados
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Muda o texto do botão para mostrar que está carregando
    btnLogin.innerText = "Entrando...";
    btnLogin.disabled = true;
    msgErro.style.display = "none";

    // Prepara os dados para enviar pro Google Sheets
    const dadosEnvio = {
        acao: "login_admin",
        email: email,
        senha: senha
    };

    // Envia os dados
    fetch(URL_DA_SUA_API, {
        method: "POST",
        body: JSON.stringify(dadosEnvio)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        // Volta o botão ao normal
        btnLogin.innerText = "Entrar no Sistema";
        btnLogin.disabled = false;

        if(dados.status === "sucesso") {
            // Salva o login no navegador e vai para a Dashboard (que faremos a seguir)
            localStorage.setItem("adminLogado", "sim");
            alert("Login feito com sucesso! Vamos para a Dashboard...");
            // window.location.href = "dashboard.html"; // Descomentaremos isso depois
        } else {
            // Mostra o erro
            msgErro.innerText = dados.mensagem;
            msgErro.style.display = "block";
        }
    })
    .catch(erro => {
        btnLogin.innerText = "Entrar no Sistema";
        btnLogin.disabled = false;
        msgErro.innerText = "Erro na conexão. Tente novamente.";
        msgErro.style.display = "block";
    });
});
