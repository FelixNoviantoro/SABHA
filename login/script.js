const email = document.getElementsByTagName('input')[0]
const pass = document.getElementsByTagName('input')[1]

const emialErr = document.getElementById('email-err')
const passErr = document.getElementById('pass-err')

email.addEventListener('textInput', verified);
pass.addEventListener('textInput', verified);

function validated() {
    if (email.value.length == 0){
        email.style.border = "1px solid red";
        emialErr.style.display = "block";
        email.focus();
        return false;
    }

    if (pass.value.length == 0){
        pass.style.border = "1px solid red";
        passErr.style.display = "block";
        pass.focus();
        return false;
    }
}

function verified() {
    if (email.value.length > 0){
        email.style.border = "none";
        emialErr.style.display = "none";
        return true;
    }

    if (pass.value.length > 0){
        pass.style.border = "none";
        passErr.style.display = "none";
        return true;
    }
}