// import "./scss/main.scss";

var hidden = document.querySelector('.main-article__list');
var open = document.querySelector('.main-btn');
hidden.style.display = 'none'

open.addEventListener("click", function() {
    if(hidden.style.display == 'none')
        hidden.style.display = 'block', open.value = 'скрыть';
    else hidden.style.display = 'none', open.value = 'показать';
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// function opacity(element, speed){
//         setInterval(function(){
//             if(!element.style.opacity){
//                 element.style.opacity = 0;
//             }
//                 element.style.opacity = element.style.opacity + 0.3;
//         }, speed)
//     }

//     opacity(document.getElementsByTagName('body')[0], 1000);
    
