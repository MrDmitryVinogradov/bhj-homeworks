let textField = document.getElementById('editor');
if (localStorage.text) {
    textField.value = localStorage.text;
}
textField.addEventListener('input', function() {
    localStorage.text = textField.value;
})