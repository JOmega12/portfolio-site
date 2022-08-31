const hamburger = document.querySelector('.burger');
// const navMenu = document.querySelector('.nav-item');
const navMenu = document.querySelector('.main-menu');


const navItem = document.querySelector('.nav-item');



// const navMenu = document.querySelectorAll('.nav-item');

/*    hamburger.addEventListener('click', () => {
         for(let i=0; i<navMenu.length; i++) {
            navMenu.classList.toggle('active');
            }
      }
   ) */

hamburger.addEventListener('click', () => {
   navMenu.classList.toggle('active');

});

/* hamburger.addEventListener('click', () => {
   // navItem.classList.toggle('active');

}); */