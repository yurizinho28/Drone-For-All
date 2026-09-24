const termos = document.getElementById("termos");
const btnAceitar = document.getElementById("accept");
const btnRecusar = document.getElementById("decline");
const climaBtn = document.getElementById("clima");
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("header nav");

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
});

// ── Menu hambúrguer ─────────────────────────────────────────────
hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("open");
});

// Fecha o menu ao clicar em qualquer link da nav
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("open");
    });
});
