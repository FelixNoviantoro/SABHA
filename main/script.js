const images = document.querySelectorAll('.main-image')[0];
const links = document.querySelector('.nav-links');
const ulLinks = document.querySelector('.nav-links ul');
const bars = document.querySelector('.title-bars');
const barImg = document.querySelector('.bars');
const overlay = document.querySelector('.overlay');

// console.log()
window.addEventListener('scroll', ()=>{
    let offset = window.pageYOffset;
    images.style.backgroundPositionY = offset * .2 + "px" ;
})

bars.addEventListener('click', () => {
    ulLinks.classList.toggle('toggle');
    overlay.classList.toggle('overlay-full');
    if(barImg.attributes.src.nodeValue == "./images/navbar/menu.png"){
        barImg.src = './images/navbar/close.png';
    } else {
        barImg.src = './images/navbar/menu.png';
    }
    
})

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if(window.innerWidth >= 670){
        let st = window.pageYOffset ;
        if(st < lastScrollTop){
            // links.style.opacity = '1';
            links.style.top = '0%'
        } else {
            links.style.top = '-75px';
        }
        lastScrollTop = st;
    }
    
})


