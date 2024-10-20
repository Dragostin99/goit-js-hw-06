const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    const inputLength = inputEl.value.length;
    const requiredLength = parseInt(inputEl.getAttribute('data-length'), 10);

    if (inputLength === requiredLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
}
}) ;