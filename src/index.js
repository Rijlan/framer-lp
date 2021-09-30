const searchButtonRef = document.querySelector('.search-button');
const searchFormRef = document.querySelector('.search-form');
const searchInputRef = document.querySelector('.search-input')

searchButtonRef.addEventListener('click', () => {
    searchFormRef.classList.toggle('open');
    searchInputRef.focus();
});