const card = document.querySelectorAll('.card');

card.forEach(items => {
    items.addEventListener('click', () => {
        items.nextElementSibling.classList.toggle('inactive')
        items.lastElementChild.firstElementChild.classList.toggle('inactive')
        items.lastElementChild.lastElementChild.classList.toggle('inactive')

    })
})
