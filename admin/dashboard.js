// 1. O "Porteiro": Verifica se a pessoa passou pelo login
function verificarSessao() {
    // Busca a "credencial" no navegador que salvamos no passo anterior
    const estaLogado = localStorage.getItem("adminLogado");

    // Se a credencial não for "sim", expulsa para a tela de login
    if (estaLogado !== "sim") {
        window.location.href = "index.html";
    }
}

// 2. Função do botão de sair
function fazerLogout() {
    // Deleta a credencial e manda pro login
    localStorage.removeItem("adminLogado");
    window.location.href = "index.html";
}

// Executa a verificação assim que a página abre
verificarSessao();

// Nos próximos passos, faremos o "fetch" (busca) lá no Apps Script
// para substituir o "R$ 0,00" pelos valores reais da planilha!
