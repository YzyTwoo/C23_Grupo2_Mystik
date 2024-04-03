/* 
window.onload = function (){
    let formulario = document.getElementById("form-profile")

    formulario.addEventListener("submit",function(e){
       
        let nombre = document.getElementById("nombre");
        let emailInput = document.getElementById("email");
        let telefono = document.getElementById("telefono");

        let errores = [];

       

        if (nombre.value == ""){
            errores.push("Debe ingresar un nombre");
            return false
        }
        else if (nombre.value.length <=3){
            errores.push("El valor ingresado debe tener al menos 3 caracteres");
            return false
        }


        const email = emailInput.value.trim();
        const expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            e.preventDefault();
            errores.push('Por favor ingresa tu email.');
            return false;
        } else if (!expresionRegularEmail.test(email)) {
            e.preventDefault();
            errores.push('Por favor ingresa un email válido');
            return false;
        }
        
        if (telefono.value == ""){
            errores.push("Debe ingresar un telefono");
            return false
        }
        else if (telefono.value.length < 6 || telefono.value.length > 21){
            errores.push("El valor ingresado debe tener al menos 6 y maximo 21 caracteres");
            return false
        }

        if(errores.length > 0 ){
            e.preventDefault();

            let ulErrores = document.getAnimations("errores")

            for (let i = 0; i < errores.length; i++){

                ulErrores.innerHTML + "<li>" + errores[i] +"</li>"
            }
        }
    })
}  */

window.onload = function(){

   function validarRegistro(e) {
       const nombreInput = document.getElementById('validacion-nombre');
       const emailInput = document.getElementById('validacion-email');
       const telefonoInput = document.getElementById('validacion-telefono');
       

       if (nombreInput.value.trim() === '') {
           e.preventDefault();
           Swal.fire("Debe ingresar un nombre a");
           return false;
       }

       if (nombreInput.value.length < 3) {
           e.preventDefault();
           Swal.fire("Su nombre debe tener al menos 3 caracteres");
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
       
       if (telefonoInput.value.trim() === '') {
        e.preventDefault();
        Swal.fire("Debe ingresar un numero de telefono");
        return false;
    }

    if (telefonoInput.value.length < 6 || telefonoInput.value.length >21) {
        e.preventDefault();
        Swal.fire("El valor ingresado debe tener al menos 6 y maximo 21 caracteres");
        return false;
    }

      
      
       Swal.fire({
           icon: 'success',
           timer: 10000
       })

       return true;
   }

   const formularioRegistro = document.getElementById('form-profile');
   formularioRegistro.addEventListener('submit', validarRegistro);
}
