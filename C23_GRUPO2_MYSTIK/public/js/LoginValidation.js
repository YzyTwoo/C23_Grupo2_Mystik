window.onload = function() {
    const form = document.querySelector(".login-form");
    const email = document.getElementById("email");
    const password = document.getElementById("contrasenia");
    const remember = document.getElementById("remember");
    const errorEmail = document.querySelector(".p-errors:nth-of-type(1)");
    const errorPassword = document.querySelector(".p-errors:nth-of-type(2)");
    const errorAlert = document.getElementById("error-alert");

    password.addEventListener('input', function() {
        const passwordValue = this.value.trim();
        if (passwordValue.length >= 6) {
            if (/[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue) && /[0-9]/.test(passwordValue) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordValue)) {
                this.style.setProperty('background-color', 'LimeGreen'); // Cambia el color a verde si la contraseña es válida
            } else {
                this.style.setProperty('background-color', 'FireBrick'); // Cambia el color a rojo si la contraseña no cumple con los requisitos
            }
        } else {
            this.style.removeProperty('background-color'); // Restaura el color por defecto si la contraseña es demasiado corta
        }
    });

    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Validación de campo obligatorio para el correo electrónico
        if (email.value.trim() === "") {
            errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
            email.style.borderColor = "red";
            isValid = false;
        } else {
            errorEmail.textContent = "";
            email.style.borderColor = ""; // Restaurar el color del borde si es válido
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email.value.trim())) {
            errorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
            email.style.borderColor = "red";
            isValid = false;
        }

        // Validación de campo obligatorio para la contraseña
        if (password.value.trim() === "") {
            errorPassword.textContent = "Por favor, ingresa tu contraseña.";
            password.style.borderColor = "red";
            isValid = false;
        } else {
            errorPassword.textContent = "";
            password.style.borderColor = ""; // Restaurar el color del borde si es válido
        }

        // Validación de longitud mínima de la contraseña
        if (password.value.trim().length < 8) {
            errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres.";
            password.style.borderColor = "red";
            isValid = false;
        }

        // Validación de la casilla "Recordarme"
        if (!remember.checked) {
            alert("Por favor, marca la casilla 'Recordarme' para continuar.");
            isValid = false;
        }

        // Si tanto el correo electrónico como la contraseña son inválidos, mostramos el mensaje en un cartel
        if (!isValid && email.value.trim() !== "" && password.value.trim() !== "") {
            errorAlert.style.display = "block";
        } else {
            errorAlert.style.display = "none";
        }

        if (isValid) {
            // Si todos los campos son válidos, cambiamos el color del borde a verde
            email.style.borderColor = "green";
            password.style.borderColor = "green";
        }

        if (!isValid) {
            event.preventDefault(); // Evitar el envío del formulario si hay errores
        }
    });
};
