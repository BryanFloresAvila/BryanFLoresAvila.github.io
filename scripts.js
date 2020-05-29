const navbarclose=document.getElementById('navbar');
const navbarOpen=document.getElementById('open');
const openNavbar=()=> {
    navbarclose.style.width = "100%";
    navbarOpen.style.opacity = 0;
  }
  const closeNavbar=()=>{
    navbarclose.style.width = "0";
    navbarOpen.style.opacity = 1;
  }
  
navbarOpen.addEventListener('click',openNavbar);
navbarclose.addEventListener('click',closeNavbar);



const wrapper = document.getElementById('wrapper');
const alturavp = window.innerHeight; 
wrapper.style.height = `${alturavp- 217}px`;
window.addEventListener("resize", (e) => {
    console.log(e.srcElement.innerHeight);
    console.log(e.srcElement.innerWidth);
    const container = document.getElementById("wrapper");
    container.style.height = `${e.srcElement.innerHeight - 217}px`;
    console.log('aun sigo detectando');
  });


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
