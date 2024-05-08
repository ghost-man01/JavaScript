const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener('click', function(){

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0) {
        linksContainer.style.height = `${linkHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


const navBar = document.getElementById("nav");
const topLink  = document.querySelector(".top-link");

window.addEventListener("scroll", function(){

    const scrollHeight = window.scrollY;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e){
        // Stop of html smooth scroll
        e.preventDefault();

        // getting the attribute;
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        // Calculate Heights
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        
        const fixedNav = navBar.classList.contains("fixed-nav");
        let position = element.offsetTop-navHeight;
        
        if (!fixedNav) {

            position = position - navHeight;
        }

        if (navHeight > 82) {

            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;

    });
})