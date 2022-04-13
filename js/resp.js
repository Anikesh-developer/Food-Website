burger = document.querySelector('.burger')
navitem = document.querySelector('.nav-item')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('nav-resp')
    navitem.classList.toggle('v-class')
})