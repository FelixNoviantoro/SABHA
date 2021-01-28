const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const formInner = document.querySelectorAll('.form-inner')

const next1 = document.getElementById('next1')
const next2 = document.getElementById('next2')
const back2 = document.getElementById('back2')
const back3 = document.getElementById('back3')

const nama = document.querySelectorAll('.fill')[0];
const email = document.querySelectorAll('.fill')[1];
const namaErr = document.getElementById('nama-err');
const emailErr = document.getElementById('email-err');

const yes = document.querySelector('.answer-yes')
const no = document.querySelector('.answer-no')
const answer = document.querySelectorAll('.answer')
const nextButton = document.querySelector('.next-button')
const submitBtn = document.getElementById('submit')

const cur = document.querySelector('.cursor')
const follow = document.querySelector('.follower')

gsap.set('.cursor',{xPercent: -50, yPercent: -50});
gsap.set('.follower',{xPercent: -50, yPercent: -50});

window.addEventListener('mousemove', e => {
    gsap.to('.cursor', 0.2, {x:e.pageX, y:e.pageY})
    gsap.to('.follower', 0.9, {x:e.pageX, y:e.pageY})
})

const tl = gsap.timeline({defaults: {duration : 1, ease: "power2.out"}, paused: false})

        tl.to('.hide-1', {y:"0%", opacity:"1", stagger : 0.3}, "+=1");
        tl.from('.next-button', {opacity : "0"});
        if(window.innerWidth <= 900) {
            tl.to('.image-teteh-1', {y:"0%", opacity:"0.4",ease: "power4.out", onComplete : () => {
                tl.paused(true)
            }}, "-=1");
        } else {
            tl.to('.image-teteh-1', {y:"0%", opacity:"1",ease: "power4.out", onComplete : () => {
            tl.paused(true)
            }}, "-=1");
        }
        
        tl.to('.hide-1', { y:"-100%", opacity:'0'});
        tl.to('.image-teteh-1', {y:"50%", opacity:"0",ease: "power4.out"}, "-=1");
        tl.to('.next-button', {opacity : "0"}, '-=1');


        tl.to('.hide-2', {y:"0%", opacity:'1', stagger : 0.25, onComplete : () => {
            tl.paused(true)
        }});
        tl.to('.prolog', {background :'black', color: 'white'}, "-=2.5")
        if(window.innerWidth <= 900) {
            tl.to('.image-teteh-2', {y:"0%", opacity:"0.4",ease: "power4.out"}, "-=1");
        } else {
            tl.to('.image-teteh-2', {y:"0%", opacity:"1",ease: "power4.out"}, "-=1");
        }
        
        tl.to('.next-button', {opacity : "1"}, '-=1');
        tl.to('.hide-2', {y:"-100%", opacity:'0'});
        tl.to('.image-teteh-2', {y:"30%", opacity:"0",ease: "power4.out"}, "-=1");
        tl.to('.next-button', {opacity : "0"}, '-=1');
        

        tl.to('.image-teteh-3', {opacity: "1"}, "-=1")
        tl.to(CSSRulePlugin.getRule(".image-prolog:after"), {cssRule: { opacity:"1"}}, "-=1")
        tl.to('.prolog', {background: 'transparent', color:'black'}, '-=1')
        tl.to('.next-button', {opacity : ".5"}, "-=1");
        tl.to('.hide-3', {y:"0%", opacity:"1", stagger : 0.3 , onComplete : () => {
            tl.paused(true)
        }});
        
        tl.to('.hide-3', {y:"-100%", opacity:"0", stagger : 0.3 });
        tl.to('.image-teteh-3', {opacity: "0"})
        tl.to('.next-button', {opacity : "0"}, '-=1');

        tl.to('.prolog', {background :'black'}, '-=1')
        tl.to('.container',{display : "block"}, '-=1')
        tl.to('.container', {y:"-100%", duration: 0}, '+=.5')
        tl.to('.nav-title', {y:"0%", stagger : 0.5}, "+=1")
        tl.to('nav', {y:"-40%", x:"-40%"}, "+=1")
        tl.to('.container', {x:"0%"},'-=2')
        tl.to('.nav-outer', {scale: 0.5}, "-=1")
        tl.to('form', {opacity:"1"})
        // tl.to('.prolog', {display : "none"})
        

    nextButton.addEventListener('click', function(){
        tl.paused(false)
    })

    submitBtn.addEventListener('click', () => {
        tl.to('.modal-bg', {visibility : 'visible'})
        tl.to('.form-outer', {'-webkit-filter':'blur(2px)', filter: 'blur(2px)'}, "-=1")
        tl.from('.modal', {height : "0%"})
        tl.from('.modal', {width : "50%"})
        tl.from('.modal-inner',{scale: 1.5}, "-=1")
        tl.from('.modal-inner button', {opacity:"0"})
    })

function move(){
    form1.style.right = '100%'
    form1.style.opacity = '0'
    form2.style.left = '0%'
    form2.style.opacity = '1'
}
next2.addEventListener('click', () => {
    form2.style.right = '100%'
    form2.style.opacity = '0'
    form3.style.left = '0%'
    form3.style.opacity = '1'
})
next3.addEventListener('click', () => {
    form3.style.right = '100%'
    form3.style.opacity = '0'
    form4.style.left = '0%'
    form4.style.opacity = '1'
})
back2.addEventListener('click', () => {
    form1.style.right = '0%'
    form1.style.opacity = '1'
    form2.style.left = '100%'
    form2.style.opacity = '0'
})
back3.addEventListener('click', () => {
    form2.style.right = '0%'
    form2.style.opacity = '1'
    form3.style.left = '100%'
    form3.style.opacity = '0'
})
back4.addEventListener('click', () => {
    form3.style.right = '0%'
    form3.style.opacity = '1'
    form4.style.left = '100%'
    form4.style.opacity = '0'
})

answer.forEach((e,i) => {
    e.addEventListener('click', () => {
        e.classList.add('colored');
        for(let j=0 ; j < answer.length ; j++) {
            if(j == i){
                continue
            }
            if(answer[j].classList.contains('colored')){
                answer[j].classList.remove('colored')
            }
            }
        }
    )
})

next1.addEventListener('click',validated)

function validated(){
    if(nama.value.length == 0){
        namaErr.style.display = "block"
    } else {
        namaErr.style.display = "none"
    }
    
    if (email.value.length == 0){
        emailErr.style.display = "block"
    } else {
        emailErr.style.display = "none"
    }

    if (nama.value.length !== 0 && email.value.length !== 0){
        move()
    }
}
