var UIVisita = (function () {



    return {

        mostrarCarga: function () {
            var spinner = '<div class="d-flex mt-3">' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
            document.querySelector('#cuerpo-tabla-visitas').innerHTML = spinner;
            
        },

        getDatosParaNuevaVisita: function () {
            let form = document.querySelector('#add-visita-form');
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

        getVisita: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/visitas/get-datos-visita.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-visita=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var visita = JSON.parse(elements);
            return visita;
        },

        setDatosVisitaEnInputs: function (visita) {
            document.querySelector('#modificar-visita-form #id-cliente').value = visita.idCliente;
            document.querySelector('#modificar-visita-form #fecha-visita').value = visita.fechaVisitas;

        },

        getDatosModificados: function () {
            let form = document.querySelector('#modificar-visita-form');
            let data = new FormData(form);
            data.append('id-visita', localStorage.getItem('id'));
            return data;
        },

        verVisita: function (visita) {
            document.querySelector('#ver-visita-form #id-visita').innerHTML = visita.nombreCliente;
            document.querySelector('#ver-visita-form #fecha-visita').innerHTML = visita.fechaVisitas;

        },

        mostrarVisitasEnTabla: function (datos) {
            document.querySelector('#cuerpo-tabla-visitas').innerHTML = datos;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-visita-input').value;
        },

        esconderModal: function (modal) {
            $(modal).modal('hide');
        },


        abrirReportes: function () {
            load('html/visitas-components/reporte-visitas.html', document.querySelector('.content'));
        },

        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-visitas-form');
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

        mostrarAlert: function (divContainerId, mensaje, type) {

            new Toast(divContainerId, mensaje, 2000, type).getAndShow();
            
        },
    }
})();