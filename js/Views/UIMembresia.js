var UIMembresia = (function () {

    function mostrarTodosLasMembresias() {
        var spinner = '<div class="d-flex mt-3">' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
        document.querySelector('#cuerpo-tabla-membresias').innerHTML = spinner;
        var req = new XMLHttpRequest();
        req.open("POST", 'php/membresias/consultarMembresias.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        document.querySelector('#cuerpo-tabla-membresias').innerHTML = req.responseText

    }

    return {
        mostrarTodasLasMembresias: function () {

            mostrarTodosLasMembresias();
        },

        getDatosParaNuevaMembresia: function () {
            let form = document.querySelector('#add-membresia-form');
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
            new Toast('#alert-membresias', mensaje, 2000, 'alert-success').getAndShow();

        },

        getMembresia: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/membresias/get-datos-membresia.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-membresia=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var membresia = JSON.parse(elements);
            return membresia;
        },

        setDatosMembresiaEnInputs: function (membresia) {
            document.querySelector('#modificar-membresia-form #id-cliente').value = membresia.idCliente;
            document.querySelector('#modificar-membresia-form #fecha-inicio').value = membresia.fechaInicio;
            document.querySelector('#modificar-membresia-form #fecha-fin').value = membresia.fechaFin;
        },

        getDatosModificados: function () {
            let form = document.querySelector('#modificar-membresia-form');
            let data = new FormData(form);
            data.append('id-membresia', localStorage.getItem('id'));
            return data;
        },

        verMembresia: function (membresia) {
            document.querySelector('#ver-membresia-form #id-cliente').innerHTML = membresia.idCliente;
            document.querySelector('#ver-membresia-form #fecha-inicio').innerHTML= membresia.fechaInicio;
            document.querySelector('#ver-membresia-form #fecha-fin').innerHTML = membresia.fechaFin;
        },

        mostrarDatosEncontrados: function(datos) {
            document.querySelector('#cuerpo-tabla-membresias').innerHTML = datos;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-membresia-input').value;
        },

        esconderModal: function (modal) {
            $(modal).modal('hide');
        },

        abrirReportes: function() {
            load('html/membresias-components/reporte-membresias.html', document.querySelector('.content'));
        },

        
        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-membresias-form');
            var data = new FormData(form);
            
            return data;
        },

        mostrarReporte: function (req) {
            document.querySelector('.reporte-generado').classList.remove('d-none');
            document.querySelector('.panel-reportes').classList.add('d-none');
            
            document.querySelector(".container .reporte-generado").innerHTML = req;
        },
    }
})();