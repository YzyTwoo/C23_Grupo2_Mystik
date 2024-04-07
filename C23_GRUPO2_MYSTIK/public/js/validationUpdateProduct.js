window.onload = function() {
    const formulario = document.getElementById('validarEdicionProducto');

    formulario.addEventListener('submit', function(event) {
        const nombreInput = document.getElementById('nombre');
        const precioInput = document.getElementById('precio');
        const descripcionInput = document.getElementById('descripcion');
        const tallesInput = document.getElementById('talles_id');
        const categoriasInput = document.getElementById('categorias_id');
        /*const stockInput = document.getElementById('stock');*/

        if (nombreInput.value.trim() === '') {
            nombreInput.classList.add('error');
            event.preventDefault();
            Swal.fire('Error', 'Debe ingresar el nombre del producto.', 'error');
            return false;
        }

        if (precioInput.value.trim() === '') {
            precioInput.classList.add('error');
            event.preventDefault();
            Swal.fire('Error', 'Debe ingresar el precio del producto.', 'error');
            return false;
        }

        if (descripcionInput.value.trim() === '') {
            descripcionInput.classList.add('error');
            event.preventDefault();
            Swal.fire('Error', 'Debe ingresar la descripción del producto.', 'error');
            return false;
        }

        if (tallesInput.value === '') {
            tallesInput.classList.add('error');
            event.preventDefault();
            Swal.fire(
                'Error',
                'Debe seleccionar un talle para el producto.',
                'error');
            return false;
        }

        if (categoriasInput.value === '') {
            categoriasInput.classList.add('error');
            event.preventDefault();
            Swal.fire(
                'Error',
                'Debe seleccionar una categoría para el producto.',
                'error');
            return false;
        }

        /*if (stockInput.value.trim() === '') {
            stockInput.classList.add('error');
            event.preventDefault();
            Swal.fire(
                'Error', 
                'Debe ingresar el stock del producto.', 
                'error');
            return false;
        }*/

        return true;
    });
};