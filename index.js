const menu = document.querySelector('.menu');
const wrong = document.querySelector('.wrong');
const nav = document.querySelector('nav');

menu.addEventListener('click',() =>{
    nav.classList.add('open-nav')
})

wrong.addEventListener('click',() =>{
    nav.classList.remove('open-nav')
})