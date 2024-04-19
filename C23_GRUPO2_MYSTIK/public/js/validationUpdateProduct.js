window.onload = function() {
    //IMAGEN//
    const imagenInput = document.getElementById('imagen_id');
    const imagenPreview = document.getElementById('imagen-preview');

    imagenInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagenPreview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // ERRORES //
    function mostrarError(idCampo, mensajeVacio, /*mensajeInvalido*/) {
        const errorCampo = document.getElementById(`error-${idCampo}`);
        if (errorCampo) {
            if (mensajeVacio) {
                errorCampo.innerText = mensajeVacio;
            } else {
                errorCampo.innerText = '';
            }
        }
    }

    function validarTodo(valor, mensajeVacio, validarCampos, caracteresReq) {
        if (valor.trim() === '') {
            return mensajeVacio;
        } else if (validarCampos) {
            return validarCampos(valor);
        } else if (caracteresReq && valor.length < caracteresReq) {
            return `El campo debe tener al menos ${caracteresReq} caracteres.`;
        } else {
            return '';
        }
    }

    const formulario = document.getElementById('validarEdicionProducto');
    const camposValidar = {
        'nombre': {
            mensajeVacio: 'Debe ingresar el nombre del producto.',
            validarCampo: (valor) => {
                if (valor.trim().length < 3) {
                    return 'El nombre debe tener 3 caracteres.';
                } else {
                    return '';
                }
            }
        },
        'precio': {
            mensajeVacio: 'Debe ingresar el precio del producto.',
            validarCampo: (valor) => {
                if (!/^\d+(\.\d+)?$/.test(valor)) {
                    return 'Debe ingresar un valor numerico.';
                } else {
                    return '';
                }
            }
        },
        'descripcion': {
            mensajeVacio: 'Debe ingresar la descripción del producto.',
            /*mensajeInvalido: 'La descripción debe tener 10 caracteres.',*/
            validarCampo: (valor) => {
                if (valor.trim().length < 10) {
                    return 'La descripción debe tener 10 caracteres.';
                } else {
                    return '';
                }
            }
        },
        'talles': {
            mensajeVacio: 'Debe seleccionar un talle para el producto.'
        },
        'categorias': {
            mensajeVacio: 'Debe seleccionar una categoría para el producto.'
        },
        'colecciones': {
            mensajeVacio: 'Debe seleccionar una categoría para el producto.'
        },
        'colores': {
            mensajeVacio: 'Debe seleccionar un color para el producto.'
        },
        'stock': {
            mensajeVacio: 'Debe ingresar el stock del producto.',
            /*mensajeInvalido: 'El stock debe ser mayor a cero.',*/
            validarCampo: (valor) => {
                if (/^\d+$/.test(valor.trim()) && valor.trim() > -1) {
                    return '';
                } else {
                    return 'El stock no puede ser negativo.';
                }
            }
        }
    };

    formulario.querySelectorAll('input, select, textarea').forEach(campo => {
        campo.addEventListener('blur', function() {
            const valor = campo.value.trim();
            const idCampo = campo.id;
            const { mensajeVacio, /*mensajeInvalido*/ validarCampo } = camposValidar[idCampo];
            const mensajeError = validarTodo(valor, mensajeVacio, validarCampo);
            mostrarError(idCampo, mensajeError);
        });
    });

    // ALERTA //
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const nombreInput = document.getElementById('nombre');
        const precioInput = document.getElementById('precio');
        const descripcionInput = document.getElementById('descripcion');
        const tallesInput = document.getElementById('talles');
        const categoriasInput = document.getElementById('categorias');
        const coleccionesInput = document.getElementById('colecciones');
        const coloresInput = document.getElementById('colores')
        const stockInput = document.getElementById('stock');
    
        if (!nombreInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe ingresar el nombre del producto.',
                'error'
            );
            return;
        }

        if (nombreInput.value.trim().length < 3) {
            Swal.fire(
                'Error',
                'El nombre debe tener 3 caracteres.',
                'error'
            );
            return;
        }
    
        if (!precioInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe ingresar el precio del producto.',
                'error'
            );
            return;
        }
    
        if (!/^\d+(\.\d+)?$/.test(precioInput.value.trim())) {
            Swal.fire(
                'Error',
                'Debe ingresar un valor numerico.',
                'error'
            );
            return;
        }
    
        if (!descripcionInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe ingresar la descripción del producto.',
                'error'
            );
            return;
        }
    
        if (descripcionInput.value.trim().length < 10) {
            Swal.fire(
                'Error',
                'La descripción debe tener 10 caracteres.',
                'error'
            );
            return;
        }
    
        if (!tallesInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe seleccionar un talle para el producto.',
                'error'
            );
            return;
        }
    
        if (!categoriasInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe seleccionar una categoría para el producto.',
                'error'
            );
            return;
        }

        if (!coleccionesInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe seleccionar una colección para el producto.',
                'error'
            );
            return;
        }

        if (!coloresInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe seleccionar un color para el producto.',
                'error'
            );
            return;
        }

        if (!stockInput.value.trim()) {
            Swal.fire(
                'Error',
                'Debe ingresar el stock del producto.',
                'error'
            );
            return;
        }

        /*if (stockInput.value.trim() <= -1) {
            Swal.fire(
                'Error',
                'El stock no puede ser negativo.',
                'error'
            );
            return;
        }**/
    
        // no hay errores //
        Swal.fire({
            icon: "success"
        });
        
        formulario.submit();
    });    

    // SELECT //
    formulario.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', function() {
            if (this.value === '') {
                const idCampo = this.id;
                const { mensajeVacio } = camposValidar[idCampo];
                mostrarError(idCampo, mensajeVacio);
            }
        });
    });
};