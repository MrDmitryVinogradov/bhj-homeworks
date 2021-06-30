let menuLinks = document.querySelectorAll('.menu__link');
let len = menuLinks.length;
for (let i = 0; i < len; i++) {
    menuLinks[i].onclick = () => {
        menuLinks[i].closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
        if (menuLinks[i].closest('.menu__item').querySelector('.menu_sub') != null) {
            menuLinks[i].onclick = event.preventDefault();
        }
    }
}