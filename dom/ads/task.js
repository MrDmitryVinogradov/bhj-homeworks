let ads = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;

let rotator = () => {
    let index = ads.findIndex(element => element.classList.contains('rotator__case_active'));
    ads[index].classList.remove('rotator__case_active');
    if (index  === ads.length - 1) {
        ads[0].classList.add('rotator__case_active');
    }
    else {
        ads[index + 1].classList.add('rotator__case_active');
    }
}

setInterval(rotator, 1000);