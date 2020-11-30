const button = document.getElementById("button");
const home = document.getElementById("homeA");
const services = document.getElementById("servicesA");
const portfolio = document.getElementById("portfolioA");
const about = document.getElementById("aboutA");
const contact = document.getElementById("contactA");
const header = document.getElementById("header");
const leftButton = document.getElementById("button_left");
const rightButton = document.getElementById("button_right");
const all = document.getElementById("all");
const web = document.getElementById("web");
const design = document.getElementById("design");
const art = document.getElementById("art");
const img = document.querySelectorAll(".img_portfolio");
const header_all = document.querySelector(".header_all");
const slider_all = document.querySelector(".slider_all");

button.addEventListener("click", () => {
  document.getElementById("navigation").classList.toggle("active");
  button.classList.toggle("active_button");
  document.getElementById("picture").classList.toggle("active_picture");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header_all.classList.add("active_header");
  } else {
    header_all.classList.remove("active_header");
  }
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 0 && window.pageYOffset < 510) {
    home.classList.add("red_menu");
    services.classList.remove("red_menu");
    portfolio.classList.remove("red_menu");
    about.classList.remove("red_menu");
    contact.classList.remove("red_menu");
  } else if (window.pageYOffset >= 510 && window.pageYOffset < 754) {
    services.classList.add("red_menu");
    home.classList.remove("red_menu");
    portfolio.classList.remove("red_menu");
    about.classList.remove("red_menu");
    contact.classList.remove("red_menu");
  } else if (window.pageYOffset >= 754) {
    services.classList.remove("red_menu");
    home.classList.remove("red_menu");
    portfolio.classList.add("red_menu");
    about.classList.remove("red_menu");
    contact.classList.remove("red_menu");
  } else {
    services.classList.remove("red_menu");
  }
});

homeA.addEventListener("click", () => {
  document.getElementById("navigation").classList.remove("active");
  button.classList.remove("active_button");
  document.getElementById("picture").classList.remove("active_picture");
  home.classList.add("red_menu");
  services.classList.remove("red_menu");
  portfolio.classList.remove("red_menu");
  about.classList.remove("red_menu");
  contact.classList.remove("red_menu");
});
servicesA.addEventListener("click", () => {
  document.getElementById("navigation").classList.remove("active");
  button.classList.remove("active_button");
  document.getElementById("picture").classList.remove("active_picture");
  services.classList.add("red_menu");
  home.classList.remove("red_menu");
  portfolio.classList.remove("red_menu");
  about.classList.remove("red_menu");
  contact.classList.remove("red_menu");
});
portfolioA.addEventListener("click", () => {
  document.getElementById("navigation").classList.remove("active");
  button.classList.remove("active_button");
  document.getElementById("picture").classList.remove("active_picture");
  portfolio.classList.add("red_menu");
  home.classList.remove("red_menu");
  services.classList.remove("red_menu");
  about.classList.remove("red_menu");
  contact.classList.remove("red_menu");
});
aboutA.addEventListener("click", () => {
  document.getElementById("navigation").classList.remove("active");
  button.classList.remove("active_button");
  document.getElementById("picture").classList.remove("active_picture");
  about.classList.add("red_menu");
  home.classList.remove("red_menu");
  services.classList.remove("red_menu");
  portfolio.classList.remove("red_menu");
  contact.classList.remove("red_menu");
});
contactA.addEventListener("click", () => {
  document.getElementById("navigation").classList.remove("active");
  button.classList.remove("active_button");
  document.getElementById("picture").classList.remove("active_picture");
  contact.classList.add("red_menu");
  home.classList.remove("red_menu");
  portfolio.classList.remove("red_menu");
  services.classList.remove("red_menu");
  about.classList.remove("red_menu");
});

//Tabs portfolio
all.addEventListener("click", () => {
  all.classList.add("border_link");
  art.classList.remove("border_link");
  web.classList.remove("border_link");
  design.classList.remove("border_link");
  img[0].classList.remove("img_change");
  img[1].classList.remove("img_change");
  img[2].classList.remove("img_change");
});
web.addEventListener("click", () => {
  art.classList.remove("border_link");
  web.classList.add("border_link");
  design.classList.remove("border_link");
  all.classList.remove("border_link");
  img[0].classList.add("img_change");
  img[1].classList.remove("img_change");
  img[2].classList.remove("img_change");
});
design.addEventListener("click", () => {
  art.classList.remove("border_link");
  web.classList.remove("border_link");
  design.classList.add("border_link");
  all.classList.remove("border_link");
  img[0].classList.add("img_change");
  img[1].classList.add("img_change");
  img[2].classList.remove("img_change");
});
art.addEventListener("click", () => {
  art.classList.add("border_link");
  web.classList.remove("border_link");
  design.classList.remove("border_link");
  all.classList.remove("border_link");
  img[0].classList.add("img_change");
  img[1].classList.add("img_change");
  img[2].classList.add("img_change");
});

multiItemSlider(".slider", {
  isCycling: true,
});
