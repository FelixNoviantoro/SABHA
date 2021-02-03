const images = document.querySelectorAll('.main-image')[0];
const navTitle = document.querySelector('.nav-title')
const links = document.querySelector('.nav-links');
const ulLinks = document.querySelector('.nav-links ul');
const bars = document.querySelector('.title-bars');
const barImg = document.querySelector('.bars');
const overlay = document.querySelector('.overlay');
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

const mainContent = document.querySelector('.main-content')

const tl = gsap.timeline({defaults: {ease :"power4.out", duration : .5}})
gsap.registerPlugin(ScrollTrigger);

tl.to('.intro', {opacity: "0", y: "-50%", duration: 1.5 })
tl.to('.intro', {visibility: "hidden"},'-=.5')

if(window.innerWidth > 670) {
tl.from('.nav-links ul li', {opacity: "0", y:"100%", stagger:.2})
}
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
        // scrub : true
    }
})

if(window.innerWidth > 670){
    gsap.to('.nav-links', {
    background : 'white',
    color : 'black',
    duration : .5,
    scrollTrigger : {
        trigger : '.main-subcontent',
        start : '-15% 100px',
        end : '-15% 100px',
        toggleActions : 'play none reverse none'
    }
})
}



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
                // scrub : true
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
            // scrub : true
            // toggleActions : 'play none reverse none'
        }
    })
})
}

window.addEventListener('scroll', () => {
    navTitle.classList.toggle('sticky', window.scrollY > 0)
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