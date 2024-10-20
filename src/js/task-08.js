
const  loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = loginForm.elements['email'].value;
    const password = loginForm.elements['password'].value;

    if (!email || !password) {
        alert('Toate campurile trebuie completate');
        return;
    }

    const formData = {
        email: email,
        password: password
    };
    console.log(formData);
    loginForm.reset();
});