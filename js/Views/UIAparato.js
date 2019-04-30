var UIAparato = (function () {

    function mostrarSpinner () {
        var spinner = '<div class="d-flex mt-3">' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
        document.querySelector('#cuerpo-tabla-aparatos').innerHTML = spinner;
    }

    return {
        mostrarTodosLosAparatos (res) {
            mostrarSpinner();
            document.querySelector('#cuerpo-tabla-aparatos').innerHTML = res;
        },

        getDatosParaNuevoAparato: function () {
            let form = document.querySelector('#add-aparato-form');
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
            new Toast('#alert-aparatos', mensaje, 2000, 'alert-success').getAndShow();

        },

        getAparato: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/aparatos/get-datos-aparato.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-aparato=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var gasto = JSON.parse(elements);
            return gasto;
        },

        setDatosAparatoEnInputs: function (aparato) {
            document.querySelector('#modificar-aparato-form #id-aparato').value = aparato.idAparato;
            document.querySelector('#modificar-aparato-form #nombre-aparato').value = aparato.nombreAparato;
            
        },

        getDatosModificados: function () {
            let form = document.querySelector('#modificar-aparato-form');
            let data = new FormData(form);
            data.append('id-aparato', localStorage.getItem('id'));
            return data;
        },

        verAparato: function (aparato) {
            document.querySelector('#ver-aparato-form #id-aparato').innerHTML = aparato.idAparato;
            document.querySelector('#ver-aparato-form #nombre-aparato').innerHTML = aparato.nombreAparato;
           
        },



        getDatosABuscar: function () {
            return document.querySelector('#buscar-aparato-input').value;
        },

        mostrarDatosEncontrados: function(datos) {
            document.querySelector('#cuerpo-tabla-aparatos').innerHTML = datos;
        },


        esconderModal: function (modal) {
            $(modal).modal('hide');
        },


    }
})();