const termos = document.getElementById("termos");
const btnAceitar = document.getElementById("accept");
const btnRecusar = document.getElementById("decline");

btnAceitar.addEventListener("click", () => {
    termos.dataset.ativo = "false";
});

btnRecusar.addEventListener("click", () => {
    window.close();

    // fallback
    window.location.href = "about:blank";
});