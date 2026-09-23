const termos = document.getElementById("termos");
const btnAceitar = document.getElementById("accept");
const btnRecusar = document.getElementById("decline");
const climaBtn = document.getElementById("clima");

btnAceitar.addEventListener("click", () => {
    termos.dataset.ativo = "false";
});

btnRecusar.addEventListener("click", () => {
    window.close();

    // fallback
    window.location.href = "about:blank";
});

climaBtn.addEventListener("click", () => {
    alert("Aba de clima em desenvolvimento.");
})