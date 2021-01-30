const images = document.querySelectorAll('.main-image')[0];
const links = document.querySelector('.nav-links');
const ulLinks = document.querySelector('.nav-links ul');
const bars = document.querySelector('.title-bars');
const barImg = document.querySelector('.bars');
const overlay = document.querySelector('.overlay');
const dropdown = document.querySelector('.dropdown')
const dropdownUl = document.querySelector('.nav-links li.dropdown ul')
const main = document.getElementsByTagName('main')
const cur = document.querySelector('.cursor')
const follow = document.querySelector('.follower')

    gsap.set('.cursor',{xPercent: -50, yPercent: -50});
    gsap.set('.follower',{xPercent: -50, yPercent: -50});

    window.addEventListener('mousemove', e => {
        gsap.to('.cursor', 0.2, {x:e.clientX, y:e.clientY})
        gsap.to('.follower', 0.9, {x:e.clientX, y:e.clientY})
    })

    if(window.innerWidth <= 670){
        cur.style.display = "none"
        follow.style.display = "none"
    }

const tl = gsap.timeline({defaults: {ease :"power4.out", duration : .5}})
tl.from('.title-content h1', {opacity: "0", duration: 1 , delay: 1})
tl.to('.list-content li', {y: "-10px",duration : .7})
tl.to('.list-content li', {y: "-125%",duration : .7})
tl.to('.list-content li', {y: "-220%",duration : .7})

tl.to('.intro', {opacity: "0", y: "-50%", duration: 1.5 })
tl.to('.intro', {visibility: "hidden"},'-=.5')

tl.from('.title-main', {opacity:0, y:"-50%"})
if(window.innerWidth > 670) {
tl.from('.nav-links ul li', {opacity: "0", y:"100%", stagger:.2})
}
tl.from('main', {opacity:"0", y: "10%", duration: 1},'-=.5')
tl.from('header', {opacity:"0"})
tl.from("footer", {opacity:"0"})

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.main-bg').forEach((e, i) => {
        e.style.backgroundPosition = `50% 0`
        gsap.to(e, {
            scrollTrigger : {
                trigger : e,
                start : "top center",
                end : "bottom center",
                scrub : true
            },
            backgroundPosition: `50% 200px`
        });
}) 
            
bars.addEventListener('click', () => {
    ulLinks.classList.toggle('toggle');
    overlay.classList.toggle('overlay-full');
    bars.classList.toggle('close')
    // if(barImg.attributes.src.nodeValue == "./images/navbar/menu-icon-19347.png"){
    //     barImg.src = './images/navbar/pngjoy.com_close-icon-close-button-png-icon-transparent-png_1062318.png';
    //     overlay.style.display = "block"
    // } else {
    //     barImg.src = "./images/navbar/menu-icon-19347.png";
    //     overlay.style.display = "none"
    // }
})

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if(window.innerWidth >= 670){
        let st = window.pageYOffset ;
        if(st < lastScrollTop){
            links.style.top = '0%'
        } else {
            links.style.top = '-100px';
        }
        lastScrollTop = st;
    }
    
})