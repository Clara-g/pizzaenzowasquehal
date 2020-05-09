//Menu burger//

const NAV_CONTENT = document.querySelector('#nav_content');
// const SECTION_BURGER = document.querySelector('#section_burger');
// SECTION_BURGER.innerHTML=NAV_CONTENT;
const BTN_BURGER = document.getElementsByClassName('burger')[0]; // [button_burger_1]
 BTN_BURGER.addEventListener('click', function () {
    NAV_CONTENT.classList.toggle('nav-open');
    BTN_BURGER.classList.toggle('btn-open');
 });
 
//Animation CTA//

 document.getElementById("order").animate([
   // keyframes
   { transform: 'translateY(0px)' }, 
   { transform: 'translateY(10px)' },
   { transform:  'translateY(0px)'}
 ], { 
   // timing options
   duration: 3000,
   iterations: Infinity
 });

