// initialize variables, identify/select HTML elements
const navDropdown = document.querySelector('.nav-dropdown');
const content = document.querySelector('.content');
const nav = document.querySelector('.nav3d');

// listen / attach events to HTML element
navDropdown.addEventListener('click', () => {
    nav.classList.toggle('open');
    navDropdown.classList.toggle('open');
    content.classList.toggle('open');
    // content.style.transform = "translateY(0)";
});
 