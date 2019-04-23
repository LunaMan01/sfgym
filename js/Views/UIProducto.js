var UIProducto  = (function() {

    function mostrarTodosLosProductos() {
        var spinner = '<div class="d-flex mt-3">' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
        document.querySelector('#cuerpo-tabla-productos').innerHTML = spinner;
        var req = new XMLHttpRequest();
        req.open("POST", 'php/productos/consultarProductos.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        document.querySelector('#cuerpo-tabla-productos').innerHTML = req.responseText

    }



    return {
        mostrarTodosLosProductos: function() {
            mostrarTodosLosProductos();
        },

        getDatosParaNuevoProducto: function() {
            let form = document.querySelector('#add-producto-form');
            let data = new FormData(form);
            return data;
        },

        getId: function (event) {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            console.log(th);
            var id = th.getAttribute('id');
            console.log(id);
            localStorage.setItem('id', id);
        },

        
        quitarRegistro: function () {
            tr.remove();
        },

        mostrarMensajeExito: function (mensaje) {
            new Toast('#alert-productos', mensaje, 2000).getAndShow();

        },


        getProducto: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/get-datos-producto.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var producto = JSON.parse(elements);
            return producto;
        },

        setDatosProductoEnInputs: function (producto) {
            document.querySelector('#modificar-producto-form #id-producto').value = producto.idProducto;
            document.querySelector('#modificar-producto-form #nombre-producto').value = producto.nombre;
            document.querySelector('#modificar-producto-form #fecha-caducidad').value = producto.fechaCaducidad;
            document.querySelector('#modificar-producto-form #existencia-producto').value = producto.existencia;
        },

        verProducto: function (producto) {
            document.querySelector('#modificar-producto-form #id-producto').innerHTML = producto.idProducto;
            document.querySelector('#modificar-producto-form #nombre-producto').innerHTML = producto.nombre;
            document.querySelector('#modificar-producto-form #fecha-caducidad').innerHTML = producto.fechaCaducidad;
            document.querySelector('#modificar-producto-form #existencia-producto').innerHTML = producto.existencia;
        },
        mostrarDatosEncontrados: function(datos) {
            document.querySelector('#cuerpo-tabla-productos').innerHTML = datos;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-producto-input').value;
        },

        esconderModal: function (modal) {
            $(modal).modal('hide');
        },




        abrirReportes: function() {
            load('html/productos-components/reporte-productos.html', document.querySelector('.content'));
        },
    }
})();