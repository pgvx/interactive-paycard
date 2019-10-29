document.addEventListener("DOMContentLoaded", function() {

// INPUTS
const inputs = Array.from(document.querySelectorAll('.input'));
const cardHolderInput = document.querySelector('.cardHolderInput');
const cardNumberInput = document.querySelector('.cardNumberInput');
const cvvInput = document.querySelector('.cvvInput');
const monthSelect = document.querySelector('.monthSelect');
const yearSelect = document.querySelector('.yearSelect');

// INPUT WRAPPERS
const cardHolderName = document.querySelector('.cardHolderWrapper');
const cardNumberWrapper = document.querySelector('.cardNumberWrapper');
const expirationDateWrapper = document.querySelector('.expirationDateWrapper');
const cvvWrapper = document.querySelector('.cvvWrapper');
const inputWrappers = [cardHolderName, cardNumberWrapper, expirationDateWrapper, cvvWrapper];

const removeOutlines = (wrapper) => {
    inputWrappers.forEach( (wrapper) => {
        wrapper.classList.remove('active');
    })
}

const removeInputBorders = (input) => {
    inputs.forEach( (input) => {
        input.classList.remove('inputActive')
    })
}

const inputsSwitchCase = () => {
    inputs.forEach( (input) => {
    input.addEventListener('click', (e) => {
        console.log('e.target: ', e.target);
        switch(e.target) { 
            case cardHolderInput:
                removeOutlines();
                removeInputBorders();
                e.target.classList.add('inputActive');
                cardHolderName.classList.add('active');
                break;
            case cardNumberInput:
                removeOutlines();
                removeInputBorders();
                e.target.classList.add('inputActive');
                cardNumberWrapper.classList.add('active');
                break;
            case cvvInput:
                removeOutlines();
                removeInputBorders();
                e.target.classList.add('inputActive');
                cvvWrapper.classList.add('active');
                break;
            case monthSelect:
                removeOutlines();
                removeInputBorders();
                yearSelect.classList.add('inputActive')
                expirationDateWrapper.classList.add('active');
            case yearSelect:
                removeOutlines();
                removeInputBorders();
                yearSelect.classList.add('inputActive')
                expirationDateWrapper.classList.add('active');
                break; 
            default:
                removeOutlines();
                break;
            }
    })
})
}


const addBorderToActiveElement = () => {
    document.addEventListener('click', (e) => {
        if (inputs.includes(e.target)) {
            console.log('e :', e.target)
            inputsSwitchCase();
        } else {
            removeOutlines();
            removeInputBorders();
        }
    })
}

addBorderToActiveElement();

});
