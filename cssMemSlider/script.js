'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
  const slider = document.querySelector('.slider');
  const slider_elements = slider.querySelectorAll('.slider-element');
  const dots = slider.querySelectorAll('.dot');
  const descr = document.querySelector('.slider-desciption');

  const phrazes = ['Hmm, what to choose...', 
                  'Funny cat', 
                  'Another cute cat', 
                  'Do everything on time'];

  let number = Math.floor(Math.random() * (4))

  console.log(dots[number].checked = true);
  changeSlide(number);
  changeDescription(number);
  
  dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
      let slideNumber = event.target.value;
      console.log(event.target);
        changeSlide(slideNumber);
        changeDescription(slideNumber);
    });
  })

  function changeSlide(elem) {
    slider_elements.forEach(elem => {
      elem.classList.remove('active');
    })
    slider_elements[elem].classList.add('active');
  }

  function changeDescription(slideNumber) {
    descr.textContent = phrazes[slideNumber];
  }
});
