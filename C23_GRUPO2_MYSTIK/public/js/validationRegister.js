window.onload = function(){
     // efecto visual de seguridad
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const avatarInput = document.getElementById('imagen')
    const passwordInput = document.getElementById('contrasenia');
    const togglePassword = document.getElementById('togglePassword');

    passwordInput.addEventListener('input', function() {
        const password = this.value.trim();
        if (password.length >= 6) {
            if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
                this.style.setProperty('background-color', 'LimeGreen'); // Cambia el color a verde si la contraseña es válida
            } else {
                this.style.setProperty('background-color', 'FireBrick'); // Cambia el color a rojo si la contraseña no cumple con los requisitos
            }
        } else {
            this.style.removeProperty('background-color'); // Restaura el color por defecto si la contraseña es demasiado corta
        }
    });

    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.classList.remove('fa-eye');
            togglePassword.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye');
        }
    });

    function validarRegistro(e) {
        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('contrasenia');
        const avatarInput = document.getElementById('imagen');

        if (nombreInput.value.trim() === '') {
            e.preventDefault();
            Swal.fire("Debe ingresar un nombre");
            return false;
        }

        if (nombreInput.value.length < 2) {
            e.preventDefault();
            Swal.fire("Su nombre debe tener al menos 2 caracteres");
            return false;
        }

        const email = emailInput.value.trim();
        const expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            e.preventDefault();
            Swal.fire('Por favor ingresa tu email.');
            return false;
        } else if (!expresionRegularEmail.test(email)) {
            e.preventDefault();
            Swal.fire('Por favor ingresa un email válido');
            return false;
        }

        function validarPasswordSeguro(password) {
            const mayusculas = /[A-Z]/;
            const minusculas = /[a-z]/;
            const numeros = /[0-9]/;
            const caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        
            if (!mayusculas.test(password)) {
                return false;
            }
        
            if (!minusculas.test(password)) {
                return false;
            }
        
            if (!numeros.test(password)) {
                return false;
            }
        
            if (!caracteresEspeciales.test(password)) {
                return false;
            }
        
            return true;
        }
        
        const password = passwordInput.value.trim();
        if (password === '') {
            e.preventDefault();
            Swal.fire('Debe ingresar una contraseña');
            return false;
        }else if (password.length < 6) {
            e.preventDefault();
            Swal.fire('La contraseña debe tener al menos 6 caracteres.');
            return false;
        }else if (!validarPasswordSeguro(password)) {
            e.preventDefault();
            Swal.fire('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
            return false;
        }

        const archivoCargado = avatarInput.files[0];
        if (archivoCargado) {
            const extensionesValidas = ['jpg', 'jpeg', 'png', 'gif'];
            const extension = archivoCargado.name.split('.').pop().toLowerCase();
            if (!extensionesValidas.includes(extension)) {
                e.preventDefault();
                alert('La foto de perfil debe ser un archivo JPG, JPEG, PNG o GIF.');
                return false;
            }
        }

        // si todo esta bien retorna true y el formulario se envia
        Swal.fire({
            icon: 'success',
            timer: 10000
        })

        return true;
    }

    function validarInputBlur(inputElement) {
        inputElement.addEventListener('blur', function() {
            const valor = this.value.trim();
                if (valor === '') {
            // Si el campo está vacío, mostrar una alerta
            alert('Este campo no puede estar vacío.');
            } else if (valor.length < 5) {
            // Si el valor ingresado es demasiado corto, mostrar una alerta
            alert('El valor ingresado es demasiado corto. Por favor, ingrese al menos 5 caracteres.');
        }
        });
    }

    validarInputBlur(nombreInput)
    validarInputBlur(emailInput)
    validarInputBlur(passwordInput)

    const formularioRegistro = document.getElementById('formularioRegistro');
    formularioRegistro.addEventListener('submit', validarRegistro);


}
