const cardHolderInput = document.querySelector('.cardHolderInput');
const cardHolder = document.querySelector('.cardHolderWrapper');

cardHolderInput.addEventListener('click', () => {
    cardHolder.classList.add('active');
})