var membresiaController = (function () {

    function addNuevaMembresia() {
        let data = UIMembresia.getDatosParaNuevaMembresia();
        let membresia = new Membresia();

        if (membresia.add(data)) {
            UIMembresia.mostrarMensajeExito('Membresía añadida correctamente');
            UIMembresia.mostrarTodasLasMembresias();
            UIMembresia.esconderModal('#add-membresia-modal');
        }
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-membresias').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UIMembresia.getId(e);
            }
        }, false);

    }

    function eliminarMembresia() {

        let membresia = new Membresia();
        if (membresia.eliminar()) {

            UIMembresia.quitarRegistro();
            UIMembresia.mostrarMensajeExito('Membresía eliminada correctamente');
        }


    }

    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-membresias').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                UIMembresia.getId(e);
                let membresia = UIMembresia.getMembresia();
                UIMembresia.setDatosMembresiaEnInputs(membresia);
                new Lightpick({ field: document.querySelector('#modificar-membresia-form #fecha-inicio') });
                new Lightpick({ field: document.querySelector('#modificar-membresia-form #fecha-fin')});
            }
        }, false);
    }

    function modificarMembresia() {
        let data = UIMembresia.getDatosModificados();
        let membresia = new Membresia();
        // UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (membresia.modificar(data)) {
            UIMembresia.mostrarMensajeExito('Membresía modificada correctamente');
            // UICliente.regresarBtnAEstadoInicial('#guardar-cliente-editado');
            UIMembresia.esconderModal('#modificar-membresia-modal');
            UIMembresia.mostrarTodasLasMembresias();
        }
    }

    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-membresias').addEventListener('click', function (e) {

            if (e.target.matches('.watch-action')) {
                UIMembresia.getId(e);
                let membresia = UIMembresia.getMembresia();
                UIMembresia.verMembresia(membresia);
    
            }
        }, false);
    }

    function busquedaDinamica() {
        let dato = UIMembresia.getDatosABuscar();
        let membresia = new Membresia();
        let datosEncontrados = membresia.consultar(dato);
        UIMembresia.mostrarDatosEncontrados(datosEncontrados);
        
    }

    function setUpEvents() {
        UIMembresia.mostrarTodasLasMembresias();
        document.querySelector('#add-membresia-form').addEventListener('submit', addNuevaMembresia);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarMembresia);
        setUpEditEvent();
        document.querySelector('#modificar-membresia-form').addEventListener('submit', modificarMembresia);
        setUpWatchEvent();
        document.querySelector('#buscar-membresia-input').addEventListener('keyup', busquedaDinamica);
        new Lightpick({ field: document.getElementById('fecha-inicio') });
        new Lightpick({ field: document.getElementById('fecha-fin') });


    }

    return {
        init: function () {
            setUpEvents();
        }
    }
})(UIMembresia, UICliente);

membresiaController.init();