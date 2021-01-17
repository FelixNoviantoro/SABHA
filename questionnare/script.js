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

