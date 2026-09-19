const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


/* CURRENT YEAR */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}