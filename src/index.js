const searchButtonRef = document.querySelector('.search-button');
const searchFormRef = document.querySelector('.search-form');

searchButtonRef.addEventListener('click', () => {
    searchFormRef.classList.toggle('open');
})