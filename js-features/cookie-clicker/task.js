const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
cookie.onclick = function () {
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
    if (cookie.width > 150) {
    cookie.width = 150;
    }
    else {
        cookie.width = 200;
    }
}