const nav__item = document.getElementById('nav__item');
const alturavp  = window.innerHeight;
const container = document.getElementById('container');
container.style.height=`${alturavp-116}px`
;
const typed = new Typed('.element', {
    strings: ['<p class="txt"> Hi, I am Bryan Flores Avila, student of the National University of Engineering and my hobby is creating web pages.</p>'],
    typeSpeed: 50,
    loop:false,
    showCursor:true,
    cursorChar:'|',
    contentType:'html',
  });



