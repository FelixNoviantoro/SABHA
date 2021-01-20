const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')

const next1 = document.getElementById('next1')
const next2 = document.getElementById('next2')
const back2 = document.getElementById('back2')
const back3 = document.getElementById('back3')

const yes = document.querySelector('.answer-yes')
const no = document.querySelector('.answer-no')
const answer = document.querySelectorAll('.answer')
const nextButton = document.querySelector('.next-button')

const tl = gsap.timeline({defaults: {duration : 1, ease: "power2.out"}, paused: false})

        // tl.to('.prolog-1', {y:"0%", opacity:"1",ease: "power4.out" ,onComplete : () => {
        //     tl.paused(true)}})
        // tl.to('.image-teteh-1', {y:"0%", opacity:"1",ease: "power4.out", onComplete : () => {
        //     tl.paused(true)
        // }}, "-=2")
        // tl.to('.prolog-1', {y:"0%", opacity:"1",ease: "power4.out" ,onComplete : () => {
        //     tl.paused(true)}})
        // tl.to('.prolog-2', {y:"0%", opacity:"1",ease: "power4.out" ,onComplete : () => {
        //     tl.paused(true)}})
        
        tl.to('.hide-1', {y:"0%", opacity:"1", stagger : 0.3}, "+=1");
        tl.to('.image-teteh-1', {y:"0%", opacity:"1",ease: "power4.out", onComplete : () => {
            tl.paused(true)
        }}, "-=1");
        tl.to('.hide-1', { y:"-100%", opacity:'0'});
        tl.to('.image-teteh-1', {y:"50%", opacity:"0",ease: "power4.out"}, "-=1");


        tl.to('.hide-2', {y:"0%", opacity:'1', stagger : 0.25, onComplete : () => {
            tl.paused(true)
        }});
        tl.to('.prolog', {background :'black', color: 'white'}, "-=2.5")
        tl.to('.image-teteh-2', {y:"-10%", opacity:"1",ease: "power4.out"}, "-=1");
        tl.to('.hide-2', {y:"-100%", opacity:'0'});
        tl.to('.image-teteh-2', {y:"30%", opacity:"0",ease: "power4.out"}, "-=1");
        

        tl.to('.image-teteh-3', {opacity: "1"}, "-=1")
        tl.to(CSSRulePlugin.getRule(".image-prolog:after"), {cssRule: { opacity:"1"}}, "-=1")
        tl.to('.prolog', {background: 'transparent', color:'black'}, '-=1')
        tl.to('.hide-3', {y:"0%", opacity:"1", stagger : 0.3 , onComplete : () => {
            tl.paused(true)
        }});
        
        tl.to('.hide-3', {y:"-100%", opacity:"0", stagger : 0.3 });
        tl.to('.image-teteh-3', {opacity: "0"})

        tl.to('.prolog', {background :'black'}, '-=1')
        tl.to('.container', {y:"-100%"})
        tl.to('.nav-title', {y:"0%", stagger : 0.5}, "+=1")
        tl.to('nav', {y:"-40%", x:"-40%"}, "+=1")
        tl.to('form', {opacity:"1"})


        


    nextButton.addEventListener('click', function(){
        tl.paused(false)
    })

// nextButton.addEventListener('click')

next1.addEventListener('click', () => {
    form1.style.right = '450px'
    form1.style.opacity = '0'
    form2.style.left = '0px'
    form2.style.opacity = '1'
})
next2.addEventListener('click', () => {
    form2.style.right = '450px'
    form2.style.opacity = '0'
    form3.style.left = '0px'
    form3.style.opacity = '1'
})
back2.addEventListener('click', () => {
    form1.style.right = '0px'
    form1.style.opacity = '1'
    form2.style.left = '450px'
    form2.style.opacity = '0'
})
back3.addEventListener('click', () => {
    form2.style.right = '0px'
    form2.style.opacity = '1'
    form3.style.left = '450px'
    form3.style.opacity = '0'
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

