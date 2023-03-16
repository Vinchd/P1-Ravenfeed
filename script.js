const hamburgerButton = document.querySelector(".nav-toggler");
const menu = document.querySelector(".menu");
const dark = document.querySelector(".dark-button");
const buttons = document.querySelector(".buttons");

hamburgerButton.addEventListener("click", function () {
    hamburgerButton.classList.toggle("active");
    menu.classList.toggle("active");
})

dark.addEventListener("click", function () {  /* insérer balise ici pour darktheme */
    const result = document.querySelector("body");
    result.classList.toggle("dark");
    dark.classList.toggle("dark");
})

