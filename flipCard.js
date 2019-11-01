const button = document.querySelector('button');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const form = document.querySelector('.form');

let cardIsFlipped = false;
let hasError = false;

const cvvInput = document.querySelector('.cvvInput');
const cvvContainer = document.querySelector('.cvvContainer');

const cardNumberInput = document.querySelector('.cardNumberInput');
const monthSelect = document.querySelector('.monthSelect');
const yearSelect = document.querySelector('.yearSelect');
const cardHolderInputField = document.querySelector('.cardHolderInput');

const frontSideInputs = [cardHolderInputField, cardNumberInput, yearSelect, monthSelect];

form.addEventListener('click' , (e) => {
    if (e.target !== cvvInput) {
        front.style.display = "flex"
        back.style.display = "none";
    }
})
cvvInput.addEventListener('click', () => {
    back.style.display = "flex";
    front.style.display = "none";
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
        } 
        else {
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
    },
    updateCVV: function updateCVV() {
        cvvContainer.innerHTML = this.value;
    }
}

monthSelect.addEventListener('change', function() {
    let monthValue = this.value;
    document.querySelector('.monthValue').innerHTML = monthValue;
  }, false);

yearSelect.addEventListener('change', function() {
    let yearValue = this.value;
    document.querySelector('.yearValue').innerHTML = yearValue;
}, false);


// KEY PRESS FUNCTIONS
cardNumberInput.onkeydown = updateDisplayFunctions.updateCardNumber;
cardNumberInput.onkeyup = updateDisplayFunctions.updateCardNumber;
cardNumberInput.onkeypress = updateDisplayFunctions.updateCardNumber;

cardHolderInputField.onkeydown = updateDisplayFunctions.updateName;
cardHolderInputField.onkeyup = updateDisplayFunctions.updateName;
cardHolderInputField.onkeypress = updateDisplayFunctions.updateName;

cvvInput.onkeydown = updateDisplayFunctions.updateCVV;
cvvInput.onkeyup = updateDisplayFunctions.updateCVV;
cvvInput.onkeypress = updateDisplayFunctions.updateCVV;

const addError = () => {
    document.querySelector('.cardNumber').classList.add('error');
    document.querySelector('.cardNumberInput').classList.add('error');
}
const removeError = () => {
    document.querySelector('.cardNumber').classList.remove('error');
    document.querySelector('.cardNumberInput').classList.remove('error');
}
