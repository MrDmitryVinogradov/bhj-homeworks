const startPopup = document.querySelector('#modal_main');
startPopup.classList.add('modal_active');
const successPopup = document.getElementById('modal_success');
const crosses = document.querySelectorAll('.modal__close');
let len = crosses.length;
for (let i = 0; i < len; i++) {
    crosses.item(i).onclick = () => {
        crosses.item(i).closest('.modal').classList = 'modal';
    }
}
const showSuccessButton = document.querySelector('.btn_danger');
showSuccessButton.onclick = () => {
    showSuccessButton.closest('.modal').classList = 'modal';
    successPopup.classList.add('modal_active');
}
