
window.onload = function (){
    let formulario = document.querySelector("form-profile")

    formulario.addEventListener("submit",function(e){

        let nombre = document.querySelector("#nombre");
        let email = document.querySelector("#email");
        let telefono = document.querySelector(" #telefono");

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
        else if (nombre.value.length <=6){
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