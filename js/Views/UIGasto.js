var UIGasto = (function () {

    function showSpinner() {
        var spinner = '<div class="d-flex mt-3">' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
        document.querySelector('#cuerpo-tabla-gastos').innerHTML = spinner;
    }



    return {
        mostrarTodosLosGastos: function(res) {
            showSpinner();
            console.log(res);
            document.querySelector('#cuerpo-tabla-gastos').innerHTML = res;
        },

        getDatosParaNuevoGasto: function () {
            let form = document.querySelector('#add-gasto-form');
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
            new Toast('#alert-gastos', mensaje, 2000, 'alert-success').getAndShow();

        },

        getGasto: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/gastos/get-datos-gasto.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-gasto=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var gasto = JSON.parse(elements);
            return gasto;
        },

        setDatosGastoEnInputs: function (gasto) {
            document.querySelector('#modificar-gasto-form #nombre-gasto').value = gasto.descripcionGasto;
            document.querySelector('#modificar-gasto-form #monto-gasto').value = gasto.montoGasto;
            document.querySelector('#modificar-gasto-form #fecha-gasto').value = gasto.fechaGasto;
            // document.querySelector('#modificar-gasto-form #nombre-gasto').value = gasto;
        },

        getDatosModificados: function () {
            let form = document.querySelector('#modificar-gasto-form');
            let data = new FormData(form);
            data.append('id-gasto', localStorage.getItem('id'));
            return data;
        },

        verGasto: function (gasto) {
            document.querySelector('#ver-gasto-form #nombre-gasto').innerHTML = gasto.descripcionGasto;
            document.querySelector('#ver-gasto-form #monto-gasto').innerHTML = gasto.montoGasto;
            document.querySelector('#ver-gasto-form #fecha-gasto').innerHTML = gasto.fechaGasto;
            // document.querySelector('#modificar-gasto-form #nombre-gasto').value = gasto;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-gasto-input').value;
        },

        
        mostrarDatosEncontrados: function(datos) {
            document.querySelector('#cuerpo-tabla-gastos').innerHTML = datos;
        },


        esconderModal: function (modal) {
            $(modal).modal('hide');
        },

        abrirReportes: function () {
            load('html/gastos-components/reporte-gastos.html', document.querySelector('.content'));
        },

        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-gastos-form');
            var data = new FormData(form);
            
            // data.append('fecha', document.querySelector('#rango-fecha').value);
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