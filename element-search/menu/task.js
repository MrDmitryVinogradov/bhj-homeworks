let menuLinks = document.querySelectorAll('.menu__link');
let len = menuLinks.length;
for (let i = 0; i < len; i++) {
    menuLinks[i].onclick = () => {
        if (menuLinks[i].closest('.menu__item').querySelector('.menu_sub').classList.contains('menu_active') === false) {
            menuLinks[i].closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
            if (menuLinks[i].closest('.menu__item').querySelector('.menu_sub') != null) {
                return false;
            }
        }
        else if (menuLinks[i].closest('.menu__item').querySelector('.menu_sub').classList.contains('menu_active')) {
            menuLinks[i].closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active');
            if (menuLinks[i].closest('.menu__item').querySelector('.menu_sub') != null) {
                return false;
            }
        }
    }
}