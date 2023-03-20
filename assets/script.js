const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


// IMG
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const slidesLength = slides.length;
const sliderText = document.querySelector(".slider-text");
let counter = 0;




// ARROWS

arrowLeft.addEventListener("click", () => {
  if (counter === 0) {
    image.src = "./assets/images/slideshow/" + slides[slidesLength - 1].image;
    sliderText.innerHTML = slides[slidesLength - 1].tagLine;
    counter = slidesLength - 1
  }
  else {
    image.src = "./assets/images/slideshow/" + slides[counter - 1].image;
    sliderText.innerHTML = slides[counter- 1].tagLine;
    counter = counter - 1
  }
})

arrowRight.addEventListener("click", () => {
  if (counter === slidesLength - 1) {
    image.src = "./assets/images/slideshow/" + slides[0].image;
    sliderText.innerHTML = slides[0].tagLine;
    counter = 0
  }
  else {
    image.src = "./assets/images/slideshow/" + slides[counter + 1].image;
    sliderText.innerHTML = slides[counter + 1].tagLine;
    counter = counter + 1
  }
})


const dots = document.querySelectorAll(".dot");
const dotSelected = document.querySelector(".dot_selected");

dots.forEach(dot => dot.addEventListener("click", () => {
  console.log("Click!");
}));


