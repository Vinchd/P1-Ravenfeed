const hamburgerButton = document.querySelector(".nav-toggler");
const menu = document.querySelector(".menu");
const dark = document.querySelector(".dark-button");
const themeColor = document.querySelector("#color")

hamburgerButton.addEventListener("click", function () {
    hamburgerButton.classList.toggle("active");
    menu.classList.toggle("active");
})

dark.addEventListener("click", function () {  /* insérer balise ici pour darktheme */
    const toggle = document.querySelector("body");
    const changeP = document.querySelector(".dark-theme label")
    toggle.classList.toggle("dark");
    dark.classList.toggle("dark");


    changeP.classList.toggle("dark-toggle")
    changeP.classList.toggle("light-toggle")
    if (changeP.classList.contains("dark-toggle")) {
        changeP.innerHTML = "Light<br>Theme"
    } else if (changeP.classList.contains("light-toggle")) {
        changeP.innerHTML = "Dark<br>Theme"
    }
})

themeColor.addEventListener("input", function (event) { /* insérer balise ici pour changement couleur */
    const resultNav = document.querySelector("nav");
    const resultMenu = document.querySelector(".menu")
    resultNav.style.backgroundColor = event.target.value;
    resultMenu.style.backgroundColor = event.target.value;
})