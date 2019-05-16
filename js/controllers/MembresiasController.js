var membresiaController = (function () {

    function addNuevaMembresia() {
        let data = UIMembresia.getDatosParaNuevaMembresia();
        let membresia = new Membresia();

        if (membresia.add(data)) {
            UIMembresia.mostrarMensajeExito('Membresía añadida correctamente');
            if (document.querySelector('#membresias-vigentes').selected)
                mostrarVigentes();
            if (document.querySelector('#membresias-todas').selected)
                mostrarTodas();
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
                new Lightpick({ field: document.querySelector('#modificar-membresia-form #fecha-fin') });
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
        let opcionSelect;


        let membresiasVigentes = document.querySelector('#membresias-vigentes');
        let todasLasMembresias = document.querySelector('#membresias-todas');

        if (membresiasVigentes.selected)
            opcionSelect = 1;
        if (todasLasMembresias.selected)
            opcionSelect = 2


        let dato = UIMembresia.getDatosABuscar();
        let membresia = new Membresia();
        let datosEncontrados = membresia.consultar(dato, opcionSelect);
        UIMembresia.mostrarMembresiasEnTabla(datosEncontrados);

    }

    function setUpVentanaReportes() {
        UIMembresia.abrirReportes();

        document.querySelector('#reporte-membresias-form').addEventListener('submit', generarReporte);

    }

    function generarReporte() {
        let membresia = new Membresia();
        let data = UIMembresia.getDatosParaReporte();

        let res = membresia.reporte(data);
        console.log(res);
        UIMembresia.mostrarReporte(res);

        // document.querySelector('#descargar-pdf').addEventListener('click', descargarPDF);
    }

    function setUpInputs() {
        new Cleave('#id-cliente', {
            numericOnly: true,
            blocks: [11]
        });


        new Cleave('#fecha-inicio-add', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });

        new Cleave('#fecha-fin-add', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });


        new Cleave('#fecha-inicio', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });

        new Cleave('#fecha-fin', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });

    }

    function mostrarVigentes() {
        UIMembresia.mostrarCarga();
        UIMembresia.mostrarMembresiasEnTabla(new Membresia().getVigentes());
    }

    function mostrarTodas() {
        UIMembresia.mostrarCarga();
        UIMembresia.mostrarMembresiasEnTabla(new Membresia().getTodas());
    }

    function cambiarVista() {
        let membresiasVigentes = document.querySelector('#membresias-vigentes');
        let todasLasMembresias = document.querySelector('#membresias-todas');

        if (membresiasVigentes.selected)
            mostrarVigentes();
        if (todasLasMembresias.selected)
            mostrarTodas();

    }

    function setUpEvents() {
        setUpInputs();
        mostrarVigentes();
        document.querySelector('#add-membresia-form').addEventListener('submit', addNuevaMembresia);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarMembresia);
        setUpEditEvent();
        document.querySelector('#modificar-membresia-form').addEventListener('submit', modificarMembresia);
        setUpWatchEvent();
        document.querySelector('#buscar-membresia-input').addEventListener('keyup', busquedaDinamica);
        new Lightpick({ field: document.getElementById('fecha-inicio-add') });
        new Lightpick({ field: document.getElementById('fecha-fin-add') });
        document.querySelector('#reporte-membresia-btn').addEventListener('click', setUpVentanaReportes);
        document.querySelector('#select-membresias').addEventListener('change', cambiarVista);


    }

    return {
        init: function () {
            setUpEvents();
        }
    }
})(UIMembresia, UICliente);

membresiaController.init();