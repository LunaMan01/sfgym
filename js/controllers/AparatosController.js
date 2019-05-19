var aparatoController = (function () {
    function addNuevoAparato() {
        let data = UIAparato.getDatosParaNuevoAparato();
        let aparato = new Aparato();

        if (aparato.add(data)) {
            UIAparato.mostrarMensajeExito('Aparato añadido correctamente');
            UIAparato.mostrarTodosLosAparatos(aparato.getTodosLosAparatos());
            UIAparato.esconderModal('#add-aparato-modal');
        }
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-aparatos').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UIAparato.getId(e);
            }
        }, false);

    }

    function eliminarAparato() {
        let aparato = new Aparato();
        if (aparato.eliminar()) {

            UIAparato.quitarRegistro();
            UIAparato.mostrarMensajeExito('Aparato eliminado correctamente');
        }
    }

    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-aparatos').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                UIAparato.getId(e);
                let aparato = UIAparato.getAparato();
                UIAparato.setDatosAparatoEnInputs(aparato);
                
            }
        }, false);
    }

    function modificarAparato() {
        let data = UIAparato.getDatosModificados();
        let aparato = new Aparato();
        // UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (aparato.modificar(data)) {
            UIAparato.mostrarMensajeExito('Aparato modificado correctamente');
            // UICliente.regresarBtnAEstadoInicial('#guardar-cliente-editado');
            UIAparato.esconderModal('#modificar-aparato-modal');
            UIAparato.mostrarTodosLosAparatos(aparato.getTodosLosAparatos());
        }
    }

    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-aparatos').addEventListener('click', function (e) {

            if (e.target.matches('.watch-action')) {
                UIAparato.getId(e);
                let aparato = UIAparato.getAparato();
                UIAparato.verAparato(aparato);
            }
        }, false);
    }

    function busquedaDinamica() {
        let dato = UIAparato.getDatosABuscar();
        let aparato = new Aparato();
        let datosEncontrados = aparato.consultar(dato);
        UIAparato.mostrarDatosEncontrados(datosEncontrados);
        
    }



    function setUpEvents () {
        setUpInputs();
        UIAparato.mostrarTodosLosAparatos(new Aparato().getTodosLosAparatos());
        document.querySelector('#add-aparato-form').addEventListener('submit', addNuevoAparato);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarAparato);
        setUpEditEvent();
        document.querySelector('#modificar-aparato-form').addEventListener('submit', modificarAparato);
        setUpWatchEvent();
        document.querySelector('#buscar-aparato-input').addEventListener('keyup', busquedaDinamica);
    }

    return {
        init: function () {
            setUpEvents();
        }
    }



})(UIAparato);

aparatoController.init();