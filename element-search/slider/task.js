let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let activeIndex = sliderItems.findIndex(element => element.className == 'slider__item slider__item_active');
let lastItem = sliderItems.length - 1;
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

let sliderClickLeft = () => {
    if (activeIndex === 0) {
        sliderItems[lastItem].classList.add('slider__item_active');
        sliderItems[0].classList.remove('slider__item_active');
    }
    else {
        sliderItems[activeIndex].classList.remove('slider__item_active');
        sliderItems[activeIndex - 1].classList.add('slider__item_active');
    }
    activeIndex = sliderItems.findIndex(element => element.className == 'slider__item slider__item_active');
}

let sliderClickRight = () => {
    if (activeIndex === lastItem) {
        sliderItems[0].classList.add('slider__item_active');
        sliderItems[activeIndex].classList.remove('slider__item_active');
    }
    else {
        sliderItems[activeIndex].classList.remove('slider__item_active');
        sliderItems[activeIndex + 1].classList.add('slider__item_active');
    }
    activeIndex = sliderItems.findIndex(element => element.className == 'slider__item slider__item_active');
}

arrowPrev.onclick = sliderClickLeft;
arrowNext.onclick = sliderClickRight;

