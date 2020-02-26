var hidden = document.querySelector('.main-article__list');
var open = document.querySelector('.main-btn');
hidden.style.display = 'none'

open.addEventListener("click", function() {
    if(hidden.style.display == 'none')
        hidden.style.display = 'block', open.value = 'скрыть';
    else hidden.style.display = 'none', open.value = 'показать';
});

/*слайд*/
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

function opacity(element, speed){
        setInterval(function(){
            if(!element.style.opacity){
                element.style.opacity = 0;
            }
                element.style.opacity = element.style.opacity + 0.3;
        }, speed)
    }

    opacity(document.getElementsByTagName('body')[0], 1000);
    

// let prev = performance.now();
//   let times = 0;

//   requestAnimationFrame(function measure(time) {
//     document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
//     prev = time;

//     if (times++ < 100) requestAnimationFrame(measure);
//   })

// alert("");
// Array.prototype.sumByCallback = function(myCallback) {
//     let newArrey = [];
    
//     for (let el of this) {
//         let result = myCallback(el);
//     newArrey.push(result);
//     }
//     return newArrey;
// }

// const sumByCallback = (element) => {
//     console.log(element);
//     return element * element;
// }

// let array = new Array([13, 35, 42]);
// console.log('result', array.newArrayByCallback(sumCallback));

// let articleListElement = document.querySelectorAll('.main-article__item');

// articleListElement.forEach(el => el.addEventListener('mouseover', (event) => {
//     event.target.style.fontSize = '40px';
// }))


// let articleList = document.querySelector('.main-article__list');

// articleList.get.addEventLister('mouseover', event => {
//     if (event.target.className == 'main-article__item') {
//         event.target.style.fontSeze = '40px';

//         event.target.onmouseout = function(event) {
//             this.style.fontSize = '';
//             this.onmouseout = null;
//         }
//     }
// });
// 

// let image = document.querySelector('.section__img');

// image.addEventListener('mousedown', function(event) {
//     let shiftX = event.clientX - image.getBoundingClientRect().left;
//     let shiftY = event.clientY - image.getBoundingClientRect().top;

//     image.style.position = 'absolute';
//     image.style.zIndex = 1000;
//     document.body.append(image);

//     moveAt(event.pageX, event.pageY);

//     function moveAt(pageX, pageY) {
//         image.style.left = pageX - shiftX + 'px';
//         image.style.top = pageY - shiftY + 'px';
//     }

//     function onMouseMove (event) {
//         moveAt(event.pageX, event.pageY);
//     }

//     document.addEventListener('mousemove', onMouseMove);

//     image.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         image.onmouseup = null;
//     }
// });

// image.ondragstart = function() {
//     return false;
// }

// function foo(hidden) {
//     if (document.getElementById(hidden).style.display == "none")
//        {document.getElementById(hidden).style.display = "block"}
//     else
//        {document.getElementById(hidden).style.display = "none"}
//     }
    