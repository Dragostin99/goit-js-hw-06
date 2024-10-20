function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const controls = document.querySelector('#controls');
const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    getRandomHexColor();
    boxes.appendChild(box);
  }
}


function destroyBoxes()  {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
}); 

destroyButton.addEventListener('click', destroyBoxes);