window.onload = function(){
    

    /////////// nombrando las variables //////////////////
    function crearProducto(e){
        const nombre = document.getElementById('nombre');
        const precio = document.getElementById('precio');
        const descripcion = document.getElementById('descripcion');
        const talles_id = document.getElementById('talles_id');
        const stock = document.getElementById('stock');
        const categorias_id = document.getElementById('catagorias_id');
        const colores_id = document.getElementById('colores_id')
        if (nombre.value.trim() === '') {
            e.preventDefault();
            alert('Debe ingresar el nombre del producto');
            return false;
        }
        return true;
    }
    const formularioCreateProduct = document.getElementById('form-id');
     formularioCreateProduct.addEventListener('submit',crearProducto )



}