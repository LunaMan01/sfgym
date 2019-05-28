var UIProducto = (function () {


    return {

        mostrarCarga: function () {
            var spinner = '<div class="d-flex mt-3">' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
            document.querySelector('#cuerpo-tabla-productos').innerHTML = spinner;
        },

        
        getDatosParaNuevoProducto: function () {
            let form = document.querySelector('#add-producto-form');
            let data = new FormData(form);
            return data;
        },

        getDatosModificados: function () {
            let form = document.querySelector('#modificar-producto-form');
            let data = new FormData(form);
            data.append('id-producto', localStorage.getItem('id'));
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

        mostrarAlert: function (mensaje, type) {
            new Toast('#alert-productos', mensaje, 2000, type).getAndShow();

        },


        getProducto: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/get-datos-producto.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-producto=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var producto = JSON.parse(elements);
            return producto;
        },

        setDatosProductoEnInputs: function (producto) {
            document.querySelector('#modificar-producto-form #id-producto').value = producto.idProducto;
            document.querySelector('#modificar-producto-form #nombre-producto').value = producto.descripcionProducto;
            document.querySelector('#modificar-producto-form #fecha-caducidad').value = producto.fechaCaducidad;
            document.querySelector('#modificar-producto-form #existencia-producto').value = producto.existenciaProducto;
            document.querySelector('#modificar-producto-form #precio-producto').value = producto.precioProducto;
        },

        verProducto: function (producto) {
            document.querySelector('#ver-producto-form #id-producto').innerHTML = producto.idProducto;
            document.querySelector('#ver-producto-form #nombre-producto').innerHTML = producto.descripcionProducto;
            document.querySelector('#ver-producto-form #fecha-caducidad').innerHTML = producto.fechaCaducidad;
            document.querySelector('#ver-producto-form #existencia-producto').innerHTML = producto.existenciaProducto;
            document.querySelector('#ver-producto-form #precio-producto').innerHTML = producto.precioProducto;
        },

        mostrarProductosEnTabla: function (datos) {
            document.querySelector('#cuerpo-tabla-productos').innerHTML = datos;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-producto-input').value;
        },

        esconderModal: function (modal) {
            $(modal).modal('hide');
        },




        abrirReportes: function () {
            load('html/productos-components/reporte-productos.html', document.querySelector('.content'));
        },

        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-productos-form');
            var data = new FormData(form);

            

            return data;
        },

        mostrarReporte: function (req) {
            document.querySelector('.reporte-generado').classList.remove('d-none');
            document.querySelector('.panel-reportes').classList.add('d-none');

            document.querySelector(".reporte-generado").innerHTML = req;
        },
    }
})();