var clienteController = (function () {


    function addNuevoCliente() {
        var data = UICliente.getDatosParaNuevoCliente();

        if (!data)
            return;
        let cliente = new Cliente();

        if (cliente.add(data)) {
            UICliente.mostrarMensajeExito('#add-cliente-alert', 'Cliente añadido correctamente');
        }

    }


    function eliminarCliente() {
        let cliente = new Cliente();
        if (cliente.eliminar()) {
            UICliente.mostrarMensajeExito('#alert-clientes', 'Cliente eliminado correctamente');
            UICliente.quitarRegistro();
        }
    }

    function modificarCliente() {
        let data = UICliente.getDatosModificados();
        if (!data)
            return;
        let cliente = new Cliente();
        UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (cliente.modificar(data)) {
            UICliente.mostrarMensajeExito('#modificar-cliente-alert', 'Cliente modificado correctamente');
            UICliente.regresarBtnAEstadoInicial('#guardar-cliente-editado');
        }
    }

    function setUpVentanaModificarCliente(e) {
        UICliente.abrirModificarCliente();
        UICliente.getId(e);
        let cliente = UICliente.getCliente();
        UICliente.setDatosClienteEnInputs(cliente);
        document.getElementById('form-edit-cliente').addEventListener('submit', modificarCliente);
        document.querySelector('#cancelar-cliente').addEventListener('click', UICliente.regresar);
        document.querySelector('#telefono').addEventListener('keydown', function (e) {
            aceptarSoloNumeros(e);
            limitarLongitud(9, this.value.length, e);
        });
        document.querySelector('#edad').addEventListener('keydown', function (e) {
            aceptarSoloNumeros(e);

        });
        document.querySelector('#num-ext').addEventListener('keydown', function (e) {
            aceptarSoloNumeros(e);

        });
        document.querySelector('#num-int').addEventListener('keydown', function (e) {
            aceptarSoloNumeros(e);

        });
    }



    function setUpVentantaNuevoCliente() {
        UICliente.abrirAddCliente();
        new Cleave('#telefono', {
            phone: true,
            phoneRegionCode: 'MX'
        });

        new Cleave('#edad', {
            numericOnly: true,
            blocks: [3]
        });

        new Cleave('#num-ext', {
            numericOnly: true,
            blocks: [10]
        });

        new Cleave('#num-int', {
            numericOnly: true,
            blocks: [10]
        });

        document.querySelector('#form').addEventListener('submit', addNuevoCliente);
        document.querySelector('#cancelar-cliente').addEventListener('click', UICliente.regresar);

    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-clientes').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UICliente.getId(e);
            }
        }, false);

    }

    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-clientes').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                setUpVentanaModificarCliente(e);
            }
        }, false);
    }

    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-clientes').addEventListener('click', function (e) {

            if (e.target.matches('.watch-action')) {
                UICliente.getId(e);
                let cliente = UICliente.getCliente();
                UICliente.verCliente(cliente);
                document.querySelector('#ok-btn').addEventListener('click', UICliente.regresar);
            }
        }, false);
    }

    function busquedaDinamica() {
        let opcionSelect;

        let clientesActivos = document.querySelector('#clientes-activos');
        let clientesInactivos = document.querySelector('#clientes-inactivos');
        let todosLosClientes = document.querySelector('#clientes-todos');

        if (clientesActivos.selected)
            opcionSelect = 1;
        else if (clientesInactivos.selected)
            opcionSelect = 2;
        else if (todosLosClientes.selected)
            opcionSelect = 3;
        

        let dato = UICliente.getDatosABuscar();
        let cliente = new Cliente();
        let datosEncontrados = cliente.consultar(dato, opcionSelect);
        UICliente.mostrarClientesEnTabla(datosEncontrados);

    }

    function mostrarClientesInactivos() {
        UICliente.mostrarCarga();
        UICliente.mostrarClientesEnTabla(new Cliente().getInactivos());
    }

    function mostrarActivosEInactivos() {
        UICliente.mostrarCarga();
        UICliente.mostrarClientesEnTabla(new Cliente().getTodos());

    }

    function mostrarActivos() {

        UICliente.mostrarCarga();
        UICliente.mostrarClientesEnTabla(new Cliente().getActivos());

    }

    function setUpVentanaReportes() {
        UICliente.abrirReportes();

        new Lightpick({
            field: document.querySelector('#rango-fecha'),
            singleDate: false

        });

        document.querySelector('#reporte-clientes-form').addEventListener('submit', generarReporte);

    }

    function generarReporte() {
        let cliente = new Cliente();
        let data = UICliente.getDatosParaReporte();

        let res = cliente.reporte(data);
        UICliente.mostrarReporte(res);

        document.querySelector('#descargar-pdf').addEventListener('click', descargarPDF);
    }

    function descargarPDF() {
        let yPos = 10;

        var doc = new jsPDF();
        doc.text('Reporte de clientes', 15, yPos);
        if (document.querySelector('#clientes-inactivos-table') != null) {
            yPos += 5;
            doc.text('Lista de clientes inactivos', 15, yPos);
            doc.autoTable(
                {
                    startY: number = 25,
                    html: '#clientes-inactivos-table',
                    headStyles: { fillColor: [84, 173, 88] },
                    theme: 'grid'
                });
        }

        if (document.querySelector('#clientes-masVisitas-table') != null) {
            yPos += 5;
            doc.text('Top 5 Clientes con mayor número de visitas', 15, doc.autoTableEndPosY() + 40);
            yPos += 20;
            doc.autoTable(
                {
                    startY: number = doc.autoTableEndPosY() + 50,
                    html: '#clientes-masVisitas-table',
                    headStyles: { fillColor: [84, 173, 88] },
                    theme: 'grid'
                });
        }
        doc.save();
    }

    function cambiarVista() {
        let clientesActivos = document.querySelector('#clientes-activos');
        let clientesInactivos = document.querySelector('#clientes-inactivos');
        let todosLosClientes = document.querySelector('#clientes-todos');

        if (clientesActivos.selected)
            mostrarActivos();
        else if (clientesInactivos.selected)
            mostrarClientesInactivos();
        else if (todosLosClientes.selected)
            mostrarActivosEInactivos();
    }


    function setUpEvents() {
        mostrarActivos();
        console.log('iniciando clientes');
        document.querySelector('#clientes-link').addEventListener('click', UICliente.mostrarTodosLosClientes);
        document.querySelector('#add-cliente-btn').addEventListener('click', setUpVentantaNuevoCliente);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarCliente);
        setUpEditEvent();
        setUpWatchEvent();
        document.querySelector('#buscar-cliente-input').addEventListener('keyup', busquedaDinamica);
        document.querySelector('#reporte-cliente-btn').addEventListener('click', setUpVentanaReportes);
        document.querySelector('#select-clientes').addEventListener('change', cambiarVista);
    }



    return {
        init: function () {
            setUpEvents();

        }
    }

})(UICliente);


clienteController.init();    
