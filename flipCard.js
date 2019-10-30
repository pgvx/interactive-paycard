const button = document.querySelector('button');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

let cardIsFlipped = false;

const cvvInput = document.querySelector('.cvvInput');

const cardNumberInput = document.querySelector('.cardNumberInput');
const monthSelect = document.querySelector('.monthSelect');
const yearSelect = document.querySelector('.yearSelect');
const cardHolderInput = document.querySelector('.cardHolderInput');

const frontSideInputs = [cardHolderInput, cardNumberInput, yearSelect, monthSelect];

frontSideInputs.forEach( (input) => {
    input.addEventListener('click', () => {
        front.style.display = "flex"
        back.style.display = "none";
        cardIsFlipped = false;
    })
})
cvvInput.addEventListener('click', () => {
    back.style.display = "flex";
    front.style.display = "none";
    cardIsFlipped = true;
});
