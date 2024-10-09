const btnMenu = document.querySelector(".titulo-menu a");
const listaMenu = document.querySelector(".links-menu");

btnMenu.addEventListener("click", (event) => {
  event.preventDefault();
  listaMenu.classList.toggle("aberto");

  listaMenu.classList.contains("aberto")
    ? (btnMenu.innerHTML = "Fechar X")
    : (btnMenu.innerHTML = "Menu &equiv;");
});
