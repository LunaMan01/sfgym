var UICompra = (function () {

    
    return {
        mostrarCarga: function () {
            var spinner = '<div class="d-flex mt-3">' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
            document.querySelector('#cuerpo-tabla-compras').innerHTML = spinner;
        },

        getDatosParaNuevaCompra: function () {
            let form = document.querySelector('#add-compra-form');
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
            new Toast('#alert-compras', mensaje, 2000, 'alert-success').getAndShow();

        },

        getCompra: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/compras/get-datos-compra.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-compra=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var compra = JSON.parse(elements);
            return compra;
        },

        setDatosCompraEnInputs: function (compra) {
            document.querySelector('#modificar-compra-form #id-compra').value = compra.idCompra;
            document.querySelector('#modificar-compra-form #id-instructor').value = compra.idInstructor;
            document.querySelector('#modificar-compra-form #descripcion-producto').value = compra.descripcionCompra;
            document.querySelector('#modificar-compra-form #cantidad').value = compra.cantidad;
            document.querySelector('#modificar-compra-form #monto-compra').value = compra.montoCompra;
            document.querySelector('#modificar-compra-form #fecha-compra').value = compra.fechaCompra;


        },

        getDatosModificados: function () {
            let form = document.querySelector('#modificar-compra-form');
            let data = new FormData(form);
            data.append('id-compra', localStorage.getItem('id'));
            return data;
        },

        verCompra: function (compra) {
            document.querySelector('#ver-compra-form #id-compra').innerHTML = compra.idCompra;
            document.querySelector('#ver-compra-form #id-instructor').innerHTML = compra.idInstructor;
            document.querySelector('#ver-compra-form #descripcion-producto').innerHTML = compra.descripcionCompra;
            document.querySelector('#ver-compra-form #cantidad').innerHTML = compra.cantidad;
            document.querySelector('#ver-compra-form #monto-compra').innerHTML = compra.montoCompra;
            document.querySelector('#ver-compra-form #fecha-compra').innerHTML = compra.fechaCompra;


        },

        mostrarComprasEnTabla: function (datos) {
            document.querySelector('#cuerpo-tabla-compras').innerHTML = datos;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-compra-input').value;
        },

        esconderModal: function (modal) {
            $(modal).modal('hide');
        },


        abrirReportes: function () {
            load('html/compras-components/reporte-compras.html', document.querySelector('.content'));
        },

        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-compras-form');
            var data = new FormData(form);

            data.append('fecha', document.querySelector('#fecha-rango-reporte').value);
            // console.log(document.querySelector('#rango-fecha').value);
            return data;
        },

        mostrarReporte: function (req) {
            document.querySelector('.reporte-generado').classList.remove('d-none');
            document.querySelector('.panel-reportes').classList.add('d-none');

            document.querySelector(".reporte-generado").innerHTML = req;
        },
    }
})();