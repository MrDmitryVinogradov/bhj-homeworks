let signIn = document.querySelector('.signin');
let welcome = document.querySelector('.welcome');
let id;
if (localStorage.getItem('auth') !== 'yes') {
    signIn.classList.add('signin_active');
}

if (localStorage.getItem('auth') === "yes") {
    welcome.classList.add('welcome_active');
    id = localStorage.getItem('user_id');
    welcome.querySelector('#user_id').textContent = id;
}

let signInForm = document.forms.signin__form;
let formInputs = Array.from(document.querySelectorAll('.control'));
let button = document.querySelector('.btn');
signInForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formInputs[0].value.trim() && formInputs[1].value.trim()) {
        let formData = new FormData(signInForm);
        let request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        request.responseType = '';
        request.send(formData);
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                let response = JSON.parse(request.responseText);
                if (response.success == false) {
                    alert('Неверные логин / пароль');
                }
                else {
                    signIn.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    welcome.querySelector('#user_id').textContent = response.user_id;
                    localStorage.setItem('auth', 'yes');
                    localStorage.setItem('user_id', response.user_id);
                }
            }
        }
    }
})