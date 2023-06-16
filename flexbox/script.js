const navShow=document.querySelector('#nav-show');

const navbar=document.querySelector('.navbar');

navShow.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})