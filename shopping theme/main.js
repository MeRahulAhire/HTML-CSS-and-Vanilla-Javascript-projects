const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 2000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling){
        current.nextElementSibling.classList.add('current');

    }else
    {
        slides[0].classList.add('current');
    }
     setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previoustElementSibling){
        current.previoustElementSibling.classList.add('current');

    }else
    {
        slides[slides.length - 1].classList.add('current');
    }
     setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e =>{
    nextSlide();
})

prev.addEventListener('click', e =>{
    prevSlide();
})