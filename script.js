let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
const sr = ScrollReveal({
    distance:'65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:450,origin:'top'});
sr.reveal('.icons',{delay:500,origin:'left'});
sr.reveal('.scroll-down',{delay:500,origin:'right'});


const ctaa = document.querySelector('.ctaa');

const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');

ctaa.addEventListener('click',()=>{
    videoContainer.classList.add('show'); 
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show'); 
})