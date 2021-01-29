const images = document.querySelectorAll('.main-image')[0];
const links = document.querySelector('.nav-links');
const ulLinks = document.querySelector('.nav-links ul');
const bars = document.querySelector('.title-bars');
const barImg = document.querySelector('.bars');
const overlay = document.querySelector('.overlay');
// const dropdown = document.querySelector('.dropdown')
// const dropdownUl = document.querySelector('.nav-links li.dropdown ul')
// const drop = document.getElementById('drop')

// const tl = gsap.timeline({defaults: {ease :"power4.out", duration : .5}})
// tl.from('.title-content h1', {opacity: "0", duration: 1 , delay: 1})
// tl.to('.list-content li', {y: "-10px"})
// tl.to('.list-content li', {y: "-125%"})
// tl.to('.list-content li', {y: "-220%"})
            
bars.addEventListener('click', () => {
    ulLinks.classList.toggle('toggle');
    overlay.classList.toggle('overlay-full');
    if(barImg.attributes.src.nodeValue == "./images/navbar/menu.png"){
        barImg.src = './images/navbar/close.png';
    } else {
        barImg.src = './images/navbar/menu.png';
        // dropdownUl.classList.remove('nav-toggle')
    }
    
})

// drop.addEventListener('click', (e) => {
//     e.preventDefault()
// })

// dropdown.addEventListener('click', ()=>{
//     dropdownUl.classList.toggle('nav-toggle')
// })

const mainContent = document.querySelector('.main-content')

const tl = gsap.timeline({defaults: {ease :"power4.out", duration : .5}})
gsap.registerPlugin(ScrollTrigger);

tl.to('.intro', {opacity: "0", y: "-50%", duration: 1.5 })
tl.to('.intro', {visibility: "hidden"},'-=.5')

tl.from('.title-main', {opacity:0, y:"-50%"})
if(window.innerWidth > 670) {
tl.from('.nav-links ul li', {opacity: "0", y:"100%", stagger:.2})
}
tl.from('.title-search', {opacity:"0"})
tl.from('main', {opacity:"0", y: "10%", duration: 1}, "-=1")
tl.from('header', {opacity:"0"}, "-=1")
tl.from("footer", {opacity:"0"})

const subContent = gsap.utils.toArray('.subcontent');

gsap.to('.main-subcontent', {
    background : "black",
    scrollTrigger : {
        trigger : '.main-subcontent',
        start : 'top bottom',
        end : 'top center',
        scrub : true
    }
})

if (window.innerWidth <= 670){
    subContent.forEach((e,i) => {
        gsap.to(e,{ 
            duration : 1, 
            x : "0%",
            opacity : "1",
            scrollTrigger : {
                trigger : e,
                toggleClass : 'active',
                start : '-40% bottom',
                end : '-40% 60%',
                scrub : true
            }
        })
    })
} else {
    subContent.forEach((e,i) => {
    gsap.to(e,{ 
        duration : 1, 
        x : "0%",
        opacity : "1",
        scrollTrigger : {
            trigger : e,
            toggleClass : 'active',
            start : '-40% bottom',
            end : '-40% 70%',
            scrub : true
        }
    })
})
}


