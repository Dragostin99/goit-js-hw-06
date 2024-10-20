let conunterValue = 0;

const valueSpan = document.querySelector('#value');

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');


const updateValue = () => {
    valueSpan.textContent = conunterValue;
};


decrementButton.addEventListener('click' , () => {
    conunterValue -= 1;
    updateValue();
});


incrementButton.addEventListener('click' , () => {
    conunterValue += 1;
    updateValue();
});