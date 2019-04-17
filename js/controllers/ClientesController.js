var clienteController = (function () {


    function addNuevoCliente() {
        var data = UICliente.getDatosParaNuevoCliente();
        let cliente = new Cliente();

        if (cliente.add(data)) {
            UICliente.mostrarMensajeExito('Cliente añadido correctamente');
        }

    }

    function eliminarCliente() {
        let cliente = new Cliente();
        if (cliente.eliminar()) {
            UICliente.mostrarMensajeExito('Cliente eliminado correctamente');
            UICliente.quitarRegistro();
        }
    }

    function modificarCliente() {
        let data = UICliente.getDatosModificados();
        let cliente = new Cliente();
        UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (cliente.modificar(data)) {
            UICliente.mostrarMensajeExito('Cliente modificado correctamente');
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
    }



    function setUpVentantaNuevoCliente() {
        UICliente.abrirAddCliente();
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
        let dato = UICliente.getDatosABuscar();
        let cliente = new Cliente();
        let datosEncontrados = cliente.consultar(dato);
        UICliente.mostrarDatosEncontrados(datosEncontrados);
        
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
    }

  

    return {
        init: function () {
            setUpEvents();

        }
    }

})(UICliente);


clienteController.init();    
