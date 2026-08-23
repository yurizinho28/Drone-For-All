const menu = document.querySelector(".menu");
const iconeMenu = document.getElementById("iconeMenu");

iconeMenu.addEventListener("click", ()=> {
    menu.dataset.ativo = menu.dataset.ativo === "true" ? "false" : "true";
})