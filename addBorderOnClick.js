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
const cardNumberContainer = document.querySelector('.cardNumberWrapper');
const expirationDateWrapper = document.querySelector('.expirationDateWrapper');
const cvvWrapper = document.querySelector('.cvvWrapper');

const inputWrappers = [cardHolderName, cardNumberContainer, expirationDateWrapper, cvvWrapper];

const form = document.querySelector('.form');

const addBorderToActiveElement = () => {
    document.addEventListener('click', (e) => {
        console.log(inputs.includes(e.target));
        if (inputs.includes(e.target)) {
            console.log('e :', e.target)
            switchCase();
        } else {
            removeOutlines();
        }
    })
    
}

const switchCase = () => {
    inputs.forEach( (input) => {
    input.addEventListener('click', (e) => {
        switch(e.target) {
            case cardHolderInput:
                removeOutlines();
                cardHolderName.classList.add('active');
                break;
            case cardNumberInput:
                removeOutlines();
                cardNumberContainer.classList.add('active');
                break;
            case cvvInput:
                removeOutlines();
                cvvWrapper.classList.add('active');
                break;
            case monthSelect:
                removeOutlines();
                expirationDateWrapper.classList.add('active');
            case yearSelect:
                removeOutlines();
                expirationDateWrapper.classList.add('active');
                break; 
            default:
                removeOutlines();
                break;
            }
    })
})
}
const removeOutlines = (wrapper) => {
    inputWrappers.forEach( (wrapper) => {
        wrapper.classList.remove('active');
    })
}

addBorderToActiveElement();

});
