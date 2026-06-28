/* =========================
   VARIABLES GLOBALES
========================= */

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const links = document.querySelectorAll(".navbar a");

const waContainer = document.querySelector(".wa-container");
const waMain = document.getElementById("waMain");

const toggle = document.getElementById("darkToggle");

/* =========================
   MODO OSCURO (PERSISTENTE)
========================= */

// cargar estado guardado
if (toggle && localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

// cambiar modo
if (toggle) {
    toggle.addEventListener("change", () => {

        document.body.classList.toggle("dark");

        if (toggle.checked) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}

/* =========================
   TABS SYSTEM
========================= */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        const target = tab.getAttribute("data-tab");

        contents.forEach(content => {
            content.classList.remove("active");
        });

        document.getElementById(target).classList.add("active");

    });

});

/* =========================
   SCROLL SUAVE NAVBAR
========================= */

links.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("href").replace("#", "");

        const targetElement = document.getElementById(targetId);

        if (targetElement) {

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});

/* =========================
   WHATSAPP FLOAT MENU
========================= */

if (waMain && waContainer) {
    waMain.addEventListener("click", () => {
        waContainer.classList.toggle("active");
    });
}

/* =========================
   ANIMACIÓN AL CARGAR
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
    document.body.style.transition = "background .5s ease, color .5s ease";

});