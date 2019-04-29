var clienteController = (function () {


    function addNuevoCliente() {
        var data = UICliente.getDatosParaNuevoCliente();

        if(!data)
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
        if(!data)
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
        document.querySelector('#telefono').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            limitarLongitud(9, this.value.length, e);
        });
        document.querySelector('#edad').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            
        });
        document.querySelector('#num-ext').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            
        });
        document.querySelector('#num-int').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            
        });
    }



    function setUpVentantaNuevoCliente() {
        UICliente.abrirAddCliente();
        document.querySelector('#form').addEventListener('submit', addNuevoCliente);
        document.querySelector('#cancelar-cliente').addEventListener('click', UICliente.regresar);
        document.querySelector('#telefono').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            limitarLongitud(9, this.value.length, e);
        });
        document.querySelector('#edad').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            
        });
        document.querySelector('#num-ext').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            
        });
        document.querySelector('#num-int').addEventListener('keydown', function(e) {
            aceptarSoloNumeros(e);
            
        });
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
        let dato = UICliente.getDatosABuscar();
        let cliente = new Cliente();
        let datosEncontrados = cliente.consultar(dato);
        UICliente.mostrarDatosEncontrados(datosEncontrados);
        
    }

    function mostrarClientesInactivos() {
        
        let cliente = new Cliente();
        let res = cliente.getInactivos();
        UICliente.mostrarInactivos(res);
        this.classList.add('d-none');
    }

    function mostrarActivosEInactivos() {
        let cliente = new Cliente();
        let res = cliente.getTodos();
        UICliente.mostrarActivosEInactivos(res);
        this.classList.add('d-none');
    }

    function mostrarActivos() {
        UICliente.mostrarActivos();
        this.classList.add('d-none');
    }

    function setUpEvents() {
        UICliente.mostrarTodosLosClientes();
        console.log('iniciando clientes');
        document.querySelector('#clientes-link').addEventListener('click', UICliente.mostrarTodosLosClientes);
        document.querySelector('#add-cliente-btn').addEventListener('click', setUpVentantaNuevoCliente);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarCliente);
        setUpEditEvent();
        setUpWatchEvent();
        document.querySelector('#buscar-cliente-input').addEventListener('keyup', busquedaDinamica);
        document.querySelector('#reporte-cliente-btn').addEventListener('click',UICliente.abrirReportes);
        document.querySelector('#clientes-inactivos-btn').addEventListener('click', mostrarClientesInactivos);
        document.querySelector('#clientes-todos-btn').addEventListener('click', mostrarActivosEInactivos);
        document.querySelector('#clientes-activos-btn').addEventListener('click', mostrarActivos);
    }

  

    return {
        init: function () {
            setUpEvents();

        }
    }

})(UICliente);


clienteController.init();    
