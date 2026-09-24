const termos = document.getElementById("termos");
const btnAceitar = document.getElementById("accept");
const btnRecusar = document.getElementById("decline");
const climaBtn = document.getElementById("clima");

window.addEventListener("DOMContentLoaded", () => {
    function isNewWindow() {
        sessionStorage.getItem("newWindow") === "false" ? termos.dataset.ativo = "false" : termos.dataset.ativo = "true";
    }

    isNewWindow();
        
});

btnAceitar.addEventListener("click", () => {
    termos.dataset.ativo = "false";
    sessionStorage.setItem("newWindow", "false");
});

btnRecusar.addEventListener("click", () => {
    window.close();

    // fallback
    window.location.href = "about:blank";
});

climaBtn.addEventListener("click", () => {
    alert("Aba de clima em desenvolvimento.");
})