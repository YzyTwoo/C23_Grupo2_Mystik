window.onload = function(){

    function validateProfile(e) {
        const nombreInput = document.getElementById('validacion-nombre');
        const emailInput = document.getElementById('validacion-email');
        const telefonoInput = document.getElementById('validacion-telefono');
 
        /*e.preventDefault();*/
 
        let errores = []; 
 
        if (nombreInput.value.trim() === '') {
            errores.push("Debe ingresar un nombre");
        }
 
        else if (nombreInput.value.length < 3) {
            errores.push("Su nombre debe tener al menos 3 caracteres");
        }
 
        const email = emailInput.value.trim();
        const expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
        if (email === '') {
            errores.push("Debe ingresar un email.");
        } else if (!expresionRegularEmail.test(email)) {
            errores.push("Por favor ingresa un email válido");
        }
        
        if (telefonoInput.value.trim() === '') {
            errores.push("Debe ingresar un número de teléfono");
        }
 
        else if (telefonoInput.value.length < 6 || telefonoInput.value.length > 21) {
            errores.push("El valor del telefono debe tener al menos 6 y máximo 21 caracteres");
        }
 
        if (errores.length > 0) { 
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Errores',
                html:  "Debes completar los campos" + errores.map(error => `<li>${error}</li>`).join('') 
            });
            return false;
        }
       
        Swal.fire({
            icon: 'success',
            title:"Usuario Actualizado",
            timer: 10000
        })
 
        return true;
    }
 
    const formularioPerfil = document.getElementById('form-profile');
    formularioPerfil.addEventListener('submit', validateProfile);
 }