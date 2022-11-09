const mainMenu = document.getElementsByClassName("js-nav-item");
const navBar = document.getElementsByClassName("js-nav-bar");
const hamburger = document.getElementsByClassName("js-hamburger");
const body = document.getElementById("js-body");
const accordion = document.getElementsByClassName("js-accordion-button");
const companyArrow = document.getElementsByClassName("js-company-arrow");
const header = document.getElementById("js-header");
const screenWidth = window.innerWidth;

//Replacing class 'current-link' on items in nav bar
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

for (let i = 0; i < mainMenu.length; i++) {
  mainMenu[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("current-link");
    current[0].className = current[0].className.replace("current-link", "");
    this.className += " current-link";

    hamburger[0].classList.remove("open");
    navBar[0].classList.remove("show-block");
    body.classList.remove("set-overflow-hidden");
  });
}

//toggle hamnurger menu

hamburger[0].addEventListener("click", function () {
  hamburger[0].classList.toggle("open");
  navBar[0].classList.toggle("show-block");
  body.classList.toggle("set-overflow-hidden");

  window.setTimeout(function () {
    navBar[0].classList.toggle("drop-animation");
  }, 10);
});

//swiper slider

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//accordion

const companies = document.getElementsByClassName("js-company");

for (let i = 0; i < companies.length; i++) {
  accordion[i].addEventListener("click", function () {
    let company = companies[i];
    let panel = this.nextElementSibling;

    companyArrow[i].classList.toggle("rotate-180");
    company.classList.toggle("height-350");
    panel.classList.toggle("opacity-animation");
  });
}

//header on scroll

// window.onscroll = function() {
//   let scrollY = window.scrollY;
//   if(scrollY >= 100) {
//     header.classList.add("opacity-scroll");
//   } else {
//     header.classList.remove("opacity-scroll");
//   }
// }
