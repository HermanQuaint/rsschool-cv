const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__list');
const up = document.querySelector('.up');
const body = document.querySelector('.page-body');
const header = document.querySelector('.header');
const navItemLink = document.querySelectorAll('.nav__item__link');

burger.addEventListener('click', (event) => {
    menu.classList.toggle('nav__list--none');
})

document.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        up.classList.remove('up--none');
    } else {
        up.classList.add('up--none');
    }

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        body.classList.add('page-body--scroll');
        header.classList.add('header--scroll');
    } else {
        body.classList.remove('page-body--scroll');
        header.classList.remove('header--scroll');
    }

})
