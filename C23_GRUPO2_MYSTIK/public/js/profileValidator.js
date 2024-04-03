
window.onload = function (){
    let formulario = document.querySelector("#form-profile")

    formulario.addEventListener("submit",function(e){
       
        let nombre = document.querySelector("#nombre");
        let email = document.querySelector("#email");
        let telefono = document.querySelector("#telefono");

        let errores = [];

       

        if (nombre.value == ""){
            errores.push("Debe ingresar un nombre");
        }
        else if (nombre.value.length <=3){
            errores.push("El valor ingresado debe tener al menos 3 caracteres");
        }
        if (email.value == ""){
            errores.push("Debe ingresar un email");
        }
        
        if (telefono.value == ""){
            errores.push("Debe ingresar un telefono");
        }
        else if (telefono.value.length < 6 || telefono.value.length > 21){
            errores.push("El valor ingresado debe tener al menos 6 y maximo 21 caracteres");
        }

        if(errores.length > 0 ){
            e.preventDefault();

            let ulErrores = document.querySelector("#errores")

            for (let i = 0; i < errores.length; i++){

                ulErrores.innerHTML += "<li>" + errores[i] +"</li>"
            }
        }
    })
} 

/* function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {

    let $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $nombre = qs('#nombre'),
    $nombreErrors = qs('#nombreErrors'),
    $telefono = qs('#telefono'),
    $telefonoErrors = qs('#telefonoErrors'),
    $form = qs('#form'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    let validationsErrors = false


    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio <i id="warning" class="fas fa-engine-warning"></i>'
                $email.classList.add('invalid')
                $email.classList.remove('valid')
                validationsErrors = true
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido <i id="warning" class="fas fa-engine-warning"></i>'
                $email.classList.add('invalid')
                $email.classList.remove('valid')
                validationsErrors = true
                break;    
            default:
                $email.classList.remove("invalid");
                $email.classList.add('valid')
                $emailErrors.innerHTML = '<i class="fas fa-check-circle"></i>'
                validationsErrors = false
                break;
        }
    })


    $telefono.addEventListener('blur', function(){
        switch (true) {
            case !$telefono.value.trim():
                $telefonoErrors.innerHTML = 'El campo contraseña es obligatorio <i id="warning" class="fas fa-engine-warning"></i>'
                $telefono.classList.add('invalid')
                $telefono.classList.remove('valid')
                validationsErrors = true
                break;
            case !regExPass.test($telefono.value):
                $telefonoErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número <i id="warning" class="fas fa-engine-warning"></i>';
                $telefono.classList.add('invalid')
                $telefono.classList.remove('valid')
                validationsErrors = true
                break;    
            default:
                $telefono.classList.remove("invalid");
                $telefono.classList.add('valid')
                $telefonoErrors.innerHTML = '<i class="fas fa-check-circle"></i>'
                validationsErrors = false
                break;
        }
    })



    $form.addEventListener('submit', function(e) {
        e.preventDefault()
        
        let error = false
        let elementsForm = this.elements

        console.log(elementsForm)

        for(let index = 0; index < elementsForm.length-3; index++){
            if(elementsForm[index].value == ""
            ){
                elementsForm[index].classList.add('invalid')
                $pass.classList.add('invalid')
                submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                error = true
            }
        }


        if(!error && !validationsErrors){
            $form.submit()
        }
        
    })


})
 */