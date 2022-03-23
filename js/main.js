/*FUNCTIONALITY FOR HERO SECTION BACKGROUND CAROUSEL*/ 

document.querySelector('#mainArrowRight').addEventListener('click', carouselRight)
document.querySelector('#mainArrowLeft').addEventListener('click', carouselLeft)

const heroCarousel = document.querySelector('main');
const heroCarouselImages = ['url(images/heroCarousel/main-bg1.jpg)','url(images/heroCarousel/main-bg2.jpg)','url(images/heroCarousel/main-bg3.jpg)'];
let heroCarouselCurrentIndex = 0

function carouselRight(){
    if (heroCarouselCurrentIndex < 2){
        heroCarouselCurrentIndex++;
    } else {
        heroCarouselCurrentIndex = 0
    }
    heroCarousel.style.backgroundImage = heroCarouselImages[heroCarouselCurrentIndex];
    console.log(heroCarousel.style.backgroundImage)
}

function carouselLeft(){
    if (heroCarouselCurrentIndex > 0){
        heroCarouselCurrentIndex--;
    } else {
        heroCarouselCurrentIndex = 2
    }
    heroCarousel.style.backgroundImage = heroCarouselImages[heroCarouselCurrentIndex];
    console.log(heroCarousel.style.backgroundImage)
}
