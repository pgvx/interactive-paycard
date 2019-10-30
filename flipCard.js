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

numbers = [0,1,2,3,4,5,6,7,8,9];

cardNumberInput.onkeydown = updateCardNumberDisplay;
cardNumberInput.onkeyup = updateCardNumberDisplay;
cardNumberInput.onkeypress = updateCardNumberDisplay;

cardHolderInput.onkeydown = updateNameDisplay;
cardHolderInput.onkeyup = updateNameDisplay;
cardHolderInput.onkeypress = updateNameDisplay;

function updateCardNumberDisplay() {
    if (!/[^$,\.\d]/.test(this.value)) {
        if (this.value.length === 4 || this.value.length === 9  || this.value.length === 14 ) {
            this.value += '.';
        } else {
            document.querySelector('.cardNumber').innerHTML = this.value || "####-####-####-####";
        }
    } else {
        alert('numbers only');
        this.value = '';
        document.querySelector('.cardNumber').innerHTML =  "try again";
    }
}























function updateNameDisplay() {
    if (this.value.length > 17) {
        document.querySelector('.name').innerHTML = this.value + '..'
    } else {
        document.querySelector('.name').innerHTML = this.value || "Your Name";
    }
}

function updateMonth() {
    document.querySelector('.date').innerHTML = monthSelect.value || "02/98";
}
updateMonth();