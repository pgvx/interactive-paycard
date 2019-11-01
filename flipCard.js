const button = document.querySelector('button');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

let cardIsFlipped = false;
let hasError = false;

const cvvInput = document.querySelector('.cvvInput');

const cardNumberInput = document.querySelector('.cardNumberInput');
const monthSelect = document.querySelector('.monthSelect');
const yearSelect = document.querySelector('.yearSelect');
const cardHolderInputField = document.querySelector('.cardHolderInput');

const frontSideInputs = [cardHolderInputField, cardNumberInput, yearSelect, monthSelect];

frontSideInputs.forEach( (input) => {
    input.addEventListener('click', () => {
        front.style.display = "flex"
        back.style.display = "none";
        cardIsFlipped = false;
    })
})
cvvInput.addEventListener('click', () => {
    console.log('hits');
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
                document.querySelector('.errorMessage').style.display = "none";
                hasError = false;
                hasError ? addError() : removeError();
            } else {
                document.querySelector('.errorMessage').style.display = "none";
                document.querySelector('.cardNumber').innerHTML = this.value || "####-####-####-####";
                hasError = false
                hasError ? addError() : removeError();
            }
        } else {
            document.querySelector('.cardNumber').innerHTML =  "number please...";
            hasError = true;
            document.querySelector('.errorMessage').style.display = "block";
            this.value = null;
            hasError ? addError() : removeError();
        }
    },
    updateName: function updateNameDisplay() {
        let input = this.value.toUpperCase();
        if (this.value.length > 17) {
            document.querySelector('.name').innerHTML = input + '..'
        } else {
            document.querySelector('.name').innerHTML = input || "Your Name";
        }
    } 
}


const dateString = document.querySelector('.date').innerHTML;
let monthValue = dateString.slice(0,2);
console.log('monthValue: ', monthValue)

monthSelect.addEventListener('change', function() {
    console.log('this.value: ', this.value)
    monthValue = this.value;
    document.querySelector('.monthValue').innerHTML = monthValue;
  }, false);

yearSelect.addEventListener('change', function() {
    console.log('this.value: ', this.value)
    yearValue = this.value;
    document.querySelector('.yearValue').innerHTML = yearValue;
}, false);


cardNumberInput.onkeydown = updateDisplayFunctions.updateCardNumber;
cardNumberInput.onkeyup = updateDisplayFunctions.updateCardNumber;
cardNumberInput.onkeypress = updateDisplayFunctions.updateCardNumber;

cardHolderInputField.onkeydown = updateDisplayFunctions.updateName;
cardHolderInputField.onkeyup = updateDisplayFunctions.updateName;
cardHolderInputField.onkeypress = updateDisplayFunctions.updateName;

const addError = () => {
    document.querySelector('.cardNumber').classList.add('error');
    document.querySelector('.cardNumberInput').classList.add('error');
}
const removeError = () => {
    document.querySelector('.cardNumber').classList.remove('error');
    document.querySelector('.cardNumberInput').classList.remove('error');
}
