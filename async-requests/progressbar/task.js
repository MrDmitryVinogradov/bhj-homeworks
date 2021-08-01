let progressBar = document.querySelector('#progress');
let form = document.forms.form;
let fileInput = document.querySelector('input');
form.onsubmit = function () {
    event.preventDefault();
    if (fileInput.value) {
        let formData = new FormData(document.forms.form);
        let request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        request.send(formData);
        request.addEventListener('progress', function (e) {
            progressBar.value = (e.loaded / 99478529).toFixed(2);
            console.log(e.loaded);
        })
    }
};