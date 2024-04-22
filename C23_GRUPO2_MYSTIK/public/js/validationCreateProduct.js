window.onload = function() {
    console.log('CARGUE LA HOJA JS');
    const form = document.getElementById('form-id');
    const submitBtn = document.getElementById('submitBtn');
    ///// AL AGREGAR UNA IMAGEN SE VISUALIZA EN LA PAGINA ////
    const imagenInput = document.getElementById('imagen_id');
    const imagenPreview = document.getElementById('imagen-preview');
    const imagenPlaceholder = document.getElementById('imagen-placeholder');
    
    imagenInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagenPreview.src = e.target.result;
                imagenPlaceholder.style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    });

    /////////// nombrando las variables //////////////////
    const nombre = document.getElementById('nombre');
    const precio = document.getElementById('precio');
    const descripcion = document.getElementById('descripcion');
    const talles_id = document.getElementById('talles_id');
    const stock = document.getElementById('stock');
    const categorias_id = document.getElementById('categorias_id');
    const colores_id = document.getElementById('colores_id');
    let alertaMostrada = false;

    function validarCampo(inputElement) {
        if (!alertaMostrada && inputElement.value.trim() === '') {
            inputElement.classList.add('error');
            alertaMostrada = true;
            return false;
        }
        return true;
    }

    function restablecerAlerta() {
        alertaMostrada = false;
    }

    const campos = document.querySelectorAll('.validar');
    
    campos.forEach(function(campo) {
        campo.addEventListener('blur', function() {
            validarCampo(campo);
        });

        campo.addEventListener('input', function() {
            if (campo.classList.contains('error')) {
                validarCampo(campo);
            }
            restablecerAlerta();
        });
    });

    const camposRequeridos = document.querySelectorAll('input[required], textarea[required], select[required]');

    camposRequeridos.forEach(function(campo) {
        campo.addEventListener('blur', function() {
            if (campo.value.trim() === '') {
                campo.classList.add('error');
            } else {
                campo.classList.remove('error');
            }
        });
    });


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        camposRequeridos.forEach(function(campo) {
            if (campo.value.trim() === '') {
                campo.classList.add('error');
                isValid = false;
            } else {
                campo.classList.remove('error');
            }
        });

        if (isValid) {
            this.submit();
        }
    });
};