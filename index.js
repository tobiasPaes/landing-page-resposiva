var menuIcon = document.querySelector('.menu-icon')
var menuMobile = document.querySelector('.menu-mobile')
var menuClose = document.querySelector('.icon-close')

menuIcon.addEventListener('click', ()=>{
    menuMobile.classList.add('ativo')
})

menuClose.addEventListener('click', ()=>{
    menuMobile.classList.remove('ativo')
})