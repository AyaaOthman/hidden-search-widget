const icon = document.querySelector('button')
const search = document.querySelector('input')

icon.addEventListener('click', ()=> {
    search.classList.toggle('hide')
})