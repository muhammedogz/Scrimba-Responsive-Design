/*jshint esversion: 6 */

const nav = document.querySelector("nav");
const button = document.querySelector(".close-nav-btn");

button.addEventListener('click', () => {
    if (nav.classList.contains("nav-mobile-closed"))
    {
        nav.classList.remove("nav-mobile-closed");
        button.classList.remove("fixed");
    }
    else
    {
        nav.classList.add("nav-mobile-closed");
        button.classList.add("fixed");
    }
});

