
function makeButton() {
    const button = document.querySelector('.hamburger');
    const nav = document.querySelector('.mobile');
    const list = document.querySelector('.mobile__list');
    button.addEventListener('click', (event) => {
        button.classList.toggle('hamburger--active');
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        }
        else {
            nav.style.display = 'flex';
        }
    });
    list.addEventListener('click', (e) => {
        button.classList.toggle('hamburger--active');
        nav.style.display = 'none';
    });

}  