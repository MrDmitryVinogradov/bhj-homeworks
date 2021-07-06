let sizeTuners = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');
for (let i = 0; i < sizeTuners.length; i++) {
    sizeTuners[i].onclick = () => {
        sizeTuners.forEach(element => element.classList.remove('font-size_active'))
        sizeTuners[i].classList.add('font-size_active');
        let index = sizeTuners.findIndex(element => element.classList.contains('font-size_active'));
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        console.log(index);
        if (index === 0) {
            book.classList.add('book_fs-small')
        }
        if (index === 2) {
            book.classList.add('book_fs-big');
        }
        event.preventDefault();
    }
}
