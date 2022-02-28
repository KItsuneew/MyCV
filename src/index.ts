import './main.scss';
import html from './index.html';

const btnBurger = document.querySelector('.menu__icon'),
    navContent = document.querySelector('.header__nav'),
    headerLinks = document.querySelectorAll('.header__link');

function clickBurger() {
    navContent.classList.toggle('active');
    btnBurger.classList.toggle('btn__active');
    changeRoot();
}

function clickLink() {
    headerLinks.forEach(el => {
        el.addEventListener('click', () => {
            if(navContent.classList.contains('active')) {
                navContent.classList.remove('active');
                btnBurger.classList.remove('btn__active');
                changeRoot();
            }
        })
    })
}

function changeRoot() {
    if(btnBurger.classList.contains('btn__active')) {
        document.documentElement.style.setProperty('--pos', 'fixed');
    }
    else {
        document.documentElement.style.setProperty('--pos', 'absolute');
    }
}

btnBurger.addEventListener('click', clickBurger);
clickLink();