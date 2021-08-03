let startPopup = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__close');
if (document.cookie != "modal=closed") {
    startPopup.classList.add('modal_active');
}

closeButton.addEventListener('click', function () {
    startPopup.classList.remove('modal_active');
    document.cookie = "modal=closed";
})