var gastoController = (function() {

    function addNuevoGasto() {
        let data = UIGasto.getDatosParaNuevoGasto();
        let gasto = new Gasto();

        if (gasto.add(data)) {
            UIGasto.mostrarMensajeExito('Gasto añadido correctamente');
            UIGasto.mostrarTodosLosGastos(gasto.getTodosLosGastos());
            UIGasto.esconderModal('#add-gasto-modal');
        }
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-gastos').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UIGasto.getId(e);
            }
        }, false);

    }

    function eliminarGasto() {

        let gasto = new Gasto();
        if (gasto.eliminar()) {

            UIGasto.quitarRegistro();
            UIGasto.mostrarMensajeExito('Gasto eliminado correctamente');
        }

    }

    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-gastos').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                UIGasto.getId(e);
                let gasto = UIGasto.getGasto();
                UIGasto.setDatosGastoEnInputs(gasto);
                // new Lightpick({ field: document.querySelector('#modificar-membresia-form #fecha-inicio') });
                // new Lightpick({ field: document.querySelector('#modificar-membresia-form #fecha-fin')});
            }
        }, false);
    }

    function modificarGasto() {
        let data = UIGasto.getDatosModificados();
        let gasto = new Gasto();
        // UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (gasto.modificar(data)) {
            UIGasto.mostrarMensajeExito('Gasto modificado correctamente');
            // UICliente.regresarBtnAEstadoInicial('#guardar-cliente-editado');
            UIGasto.esconderModal('#modificar-gasto-modal');
            UIGasto.mostrarTodosLosGastos(gasto.getTodosLosGastos());
        }
    }

    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-gastos').addEventListener('click', function (e) {
            if (e.target.matches('.watch-action')) {
                UIGasto.getId(e);
                let gasto = UIGasto.getGasto();
                UIGasto.verGasto(gasto);
    
            }
        }, false);
    }

    function busquedaDinamica() {
        let dato = UIGasto.getDatosABuscar();
        let gasto = new Gasto();
        let datosEncontrados = gasto.consultar(dato);
        UIGasto.mostrarDatosEncontrados(datosEncontrados);
        
    }


    function setUpEvents() {
        UIGasto.mostrarTodosLosGastos(new Gasto().getTodosLosGastos());
        document.querySelector('#add-gasto-form').addEventListener('submit', addNuevoGasto);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarGasto);
        setUpEditEvent();
        document.querySelector('#modificar-gasto-form').addEventListener('submit', modificarGasto);
        setUpWatchEvent();
        document.querySelector('#buscar-gasto-input').addEventListener('keyup', busquedaDinamica);
        document.querySelector('#reporte-gasto-btn').addEventListener('click',UIGasto.abrirReportes);
    }

    return {
        init: function () {
            setUpEvents();
        }
    }
})(UIGasto);

gastoController.init();