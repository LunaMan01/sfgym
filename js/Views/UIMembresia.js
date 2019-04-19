var UIMembresia = (function() {

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
        mostrarTodasLasMembresias: function() {
            
            mostrarTodosLasMembresias();
        },

        getDatosParaNuevaMembresia: function () {
            let form = document.querySelector('#add-membresia-form');
            let data = new FormData(form);
            return data;
        },

        getId: function(event) {
            var i = event.target;
            var td = i.parentNode;
             tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            console.log(th);
            var id = th.getAttribute('id');
            console.log(id);
            localStorage.setItem('idM', id);
        },

        quitarRegistro: function () {
            tr.remove();
        },
        
        mostrarMensajeExito: function (mensaje) {
            new Toast(mensaje, 2000, '#mensaje', 'success').show();
        }
    }
})();