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



const updateDisplayFunctions = {
    updateCardNumber: function updateCardNumberDisplay() {
        if (!/[^$,\.\d]/.test(this.value)) {
            if (this.value.length === 4 || this.value.length === 9  || this.value.length === 14 ) {
                this.value += '.';
                document.querySelector('.cardNumber').innerHTML = this.value || "####-####-####-####";
                hasError = false;
                hasError ? addError() : removeError();
            } else {
                document.querySelector('.cardNumber').innerHTML = this.value || "####-####-####-####";
                hasError = false
                hasError ? addError() : removeError();
            }
        } else {
            document.querySelector('.cardNumber').innerHTML =  "enter a number please";
            hasError = true;
            hasError ? addError() : removeError();
        }
    },
    updateName: function updateNameDisplay() {
        if (this.value.length > 17) {
            document.querySelector('.name').innerHTML = this.value + '..'
        } else {
            document.querySelector('.name').innerHTML = this.value || "Your Name";
        }
    }  
}

cardNumberInput.onkeydown = updateDisplayFunctions.updateCardNumber;
cardNumberInput.onkeyup = updateDisplayFunctions.updateCardNumber;
cardNumberInput.onkeypress = updateDisplayFunctions.updateCardNumber;

cardHolderInput.onkeydown = updateDisplayFunctions.updateName;
cardHolderInput.onkeyup = updateDisplayFunctions.updateName;
cardHolderInput.onkeypress = updateDisplayFunctions.updateName;

let hasError = false;

const addError = () => {
    document.querySelector('.cardNumber').classList.add('error');
    document.querySelector('.cardNumberInput').classList.add('error');
}
const removeError = () => {
    document.querySelector('.cardNumber').classList.remove('error');
    document.querySelector('.cardNumberInput').classList.remove('error');
}
