const line = document.getElementById("toggle__line");
const toggle = document.getElementById("toggle");
const check = document.getElementById("check");
const navbarclose = document.getElementById("navbar");
console.log(check.checked);
const openNavbar = () => {
  navbarclose.style.width = "100%";
};
const closeNavbar = () => {
  navbarclose.style.width = "0%";
};

toggle.addEventListener("click", () => {
  if (check.checked == true) {
    toggle.style.transition = "all 0.3s";
    toggle.children[0].style.transform = "rotate(45deg) translate(5px, 9px)";
    toggle.children[1].style.opacity = 0;
    toggle.children[2].style.transform = "rotate(-45deg) translate(5px, -9px)";
    openNavbar();
  } else {
    toggle.children[0].style.transform = "none";
    toggle.children[1].style.opacity = 1;
    toggle.children[2].style.transform = "none";

    closeNavbar();
  }
});

/* const alturavp = documento.body.scrollHeight;
  wrapper.style.height = `${documento.body.scrollHeight - 167}px`; */


/*---------CALCULA EL VP ........*/
const wrapper = document.getElementById("wrapper");
const alturavp = window.innerHeight;
wrapper.style.height = `${alturavp - 167}px`;
window.addEventListener("resize", (e) => {
  /* console.log(e.srcElement.innerHeight);
  console.log(e.srcElement.innerWidth); */
  wrapper.style.height = `${e.srcElement.innerHeight - 167}px`;
  console.log("aun sigo detectando");
});

/*---------EFECTO DE LA LETRA........*/
const typed = new Typed(".element", {
  strings: [
    '<p class="txt"> Hi, I am Bryan Flores Avila, student of the National University of Engineering and my hobby is creating web pages.</p>',
  ],
  typeSpeed: 50,
  loop: false,
  showCursor: false,
  /* cursorChar: "|", */
  contentType: "html",
});
