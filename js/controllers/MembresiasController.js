var membresiaController = (function () {

    function addNuevaMembresia() {
        let data = UIMembresia.getDatosParaNuevaMembresia();
        let membresia = new Membresia();

        if(membresia.add(data)) {
            UIMembresia.mostrarMensajeExito('Membresía añadida correctamente');
        }
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-membresias').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UIMembresia.getId(e);
            }
        }, false);

    }

    function eliminarMembresia () {
        
        let membresia = new Membresia();
        if(membresia.eliminar()) {
            UIMembresia.mostrarMensajeExito('Membresía eliminada correctamente');
            UIMembresia.quitarRegistro();
        }
    }


    function setUpEvents() {
        UIMembresia.mostrarTodasLasMembresias();
        document.querySelector('#add-membresia-form').addEventListener('submit', addNuevaMembresia);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarMembresia);
        new Lightpick({field: document.getElementById('fecha-inicio')});
        new Lightpick({field: document.getElementById('fecha-fin')});
        

    }

    return {
        init: function () {
            setUpEvents();
        }
    }
})(UIMembresia);

membresiaController.init();