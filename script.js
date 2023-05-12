// **** Navigation *****

const navToggle = document.querySelector('.hamburger-menu-toggle');
const navList = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav--open');
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('toggle--close');
});

// ***** Smooth scroll ****

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}