var visitaController = (function() {


    function addNuevaVisita() {
        let data = UIVisita.getDatosParaNuevaVisita();
        console.log('data='+data);
        let visita = new Visita();

        if (visita.add(data)) {
            UIVisita.mostrarMensajeExito('#alert-add-visita', 'Visita añadida correctamente');
            UIVisita.mostrarTodasLasVisitas();
        }
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-visitas').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UIVisita.getId(e);
            }
        }, false);

    }
    
    function eliminarVisita() {

        let visita = new Visita();
        if (visita.eliminar()) {

            UIVisita.quitarRegistro();
            UIVisita.mostrarMensajeExito('#alert-visita', 'Visita eliminada correctamente');
        }


    }

    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-visitas').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                UIVisita.getId(e);
                let visita = UIVisita.getVisita();
                UIVisita.setDatosVisitaEnInputs(visita);
                new Lightpick({ field: document.querySelector('#modificar-visita-form #fecha-visita') });
    
            }
        }, false);
    }

    function modificarVisita() {
        let data = UIVisita.getDatosModificados();
        let visita = new Visita();
        // UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (visita.modificar(data)) {
            UIVisita.mostrarMensajeExito('#alert-visita','Visita modificada correctamente');
            UIVisita.esconderModal('#modificar-visita-modal');
            UIVisita.mostrarTodasLasVisitas();
        }
    }

    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-visitas').addEventListener('click', function (e) {

            if (e.target.matches('.watch-action')) {
                UIVisita.getId(e);
                let visita = UIVisita.getVisita();
                UIVisita.verVisita(visita);
    
            }
        }, false);
    }

    function busquedaDinamica() {
        let dato = UIVisita.getDatosABuscar();
        let visita = new Visita();
        let datosEncontrados = visita.consultar(dato);
        UIVisita.mostrarDatosEncontrados(datosEncontrados);
        
    }


    function setUpEvents() {
        
        document.querySelector('#add-visita-form').addEventListener('submit', addNuevaVisita);
        new Lightpick({ field: document.getElementById('fecha-visita') });
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarVisita);
        setUpEditEvent();
        document.querySelector('#modificar-visita-form').addEventListener('submit', modificarVisita);
        setUpWatchEvent();
        document.querySelector('#reporte-visita-btn').addEventListener('click',UIVisita.abrirReportes);
        document.querySelector('#buscar-visita-input').addEventListener('keyup', busquedaDinamica)

    }

    return {
        init: function () {
            UIVisita.mostrarTodasLasVisitas();
            setUpEvents();
           
        }
    }
})(UIVisita);

visitaController.init();