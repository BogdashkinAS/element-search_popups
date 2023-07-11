const elemMain = document.getElementById('modal_main')
const elemSuccess = document.getElementById('modal_success')
const show = document.querySelector('.show-success')
const close = Array.from(document.getElementsByClassName('modal__close modal__close_times'))

elemMain.classList.add('modal_active')

close.forEach((i) => {
    if (i.className.includes('modal__close_times')) {
        i.onclick = () => {
            item = i.closest('.modal')
            item.classList.remove('modal_active')
        }
    }
})

show.onclick = () => {
    elemMain.classList.remove('modal_active')
    elemSuccess.classList.add('modal_active')
}