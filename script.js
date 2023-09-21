'use strict';

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
};

// slider 

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.testimonial__card');

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
  console.log(slide);
});

let counter = 0;

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});

function carousel() {
  if(counter < slides.length - 1) {
    nextBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'none';
  }
  if(counter > 0) {
    prevBtn.style.display = 'inline-block';
  } else {
    prevBtn.style.display = 'none';
  }
  slides.forEach( (slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};