const passwordInput = document.getElementById('password-input');
        const togglePassword = document.getElementById('toggle-password');

        togglePassword.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePassword.innerHTML = '&#128064;';
            } else {
                passwordInput.type = 'password';
                togglePassword.innerHTML = '&#128065;';
            }
        });