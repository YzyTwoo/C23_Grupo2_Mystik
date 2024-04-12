console.log("vinculado con exito")

window.addEventListener("load", function () {

        const formulario = document.querySelector('.login-form');
        const emailInput = document.getElementById('name');
        const passwordInput = document.getElementById('contrasenia');
        const errorEmail = document.querySelector('.p-errors');
        const errorpassword = document.querySelector('.contrasenia-errors');

        function validarEmail(email) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
          }

          emailInput.addEventListener("blur",function(){
            if (emailInput.value === '') {
              errorEmail.textContent = 'El campo email es obligatorio';
            } else if (!validarEmail(emailInput.value)) {
              errorEmail.textContent = 'El formato del email no es válido';
            } else {
              errorEmail.textContent = '';
            }
          }) 
          passwordInput.addEventListener("blur",function(){
            if (passwordInput.value === '') {
              errorpassword.textContent = 'El campo password es obligatorio';
            } else {
              errorpassword.textContent = '';
            }
          })

          formulario.addEventListener('submit', function(event) {
            event.preventDefault();
      
           
            if (emailInput.value.trim()) {
                Swal.fire(
                    'Error',
                    'El campo email es obligatorio',
                    'error'
                );
                return;
            }

            if (errorEmail.value.trim()) {
                Swal.fire(
                    'Error',
                    'El formato del email no es válido',
                    'error'
                );
                return;
            }

            if (errorpassword.value.trim()) {
                Swal.fire(
                    'Error',
                    'El campo contraseña es obligatorio',
                    'error'
                );
                return;
            }
            
              if (emailInput.textContent === '' && passwordInput.textContent === '') {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Sesion iniciada" +" "+emailInput.value,
                  showConfirmButton: false,
                  timer: 30000
                })
                formulario.submit();
                return true;
              }
              
              formulario.submit();
            
            });
           
        })
        
        
        
        
       
    