var clienteController = (function () {

    
    function addNuevoCliente() {
        var data = UICliente.getDatosParaNuevoCliente();
        let cliente = new Cliente();
        
        if(cliente.add(data)) {
            UICliente.mostrarMensajeExito('Cliente añadido correctamente');
        }
        
    }

    function eliminarCliente() {
        let cliente = new Cliente();
        if(cliente.eliminar()) {
            UICliente.mostrarMensajeExito('Cliente eliminado correctamente');
            UICliente.quitarRegistro();
        }
    }

    function setUpVentantaNuevoCliente () {
        UICliente.abrirAddCliente();
        document.querySelector('#form').addEventListener('submit', addNuevoCliente);
        document.querySelector('#cancelar-cliente').addEventListener('click',UICliente.regresar);
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-clientes').addEventListener('click', function(e) {
           
            if(e.target.matches('.delete-action')) {
                UICliente.getId(e);
            }
        },false);
       
    }

    function setUpEvents() {
        UICliente.mostrarTodosLosClientes();
        console.log('iniciando clientes');
        document.querySelector('#clientes-link').addEventListener('click', UICliente.mostrarTodosLosClientes);
        document.querySelector('#add-cliente-btn').addEventListener('click', setUpVentantaNuevoCliente);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarCliente);
        
        
    }

    return {
        init: function () {
           setUpEvents();
           
        }
    }

})(UICliente);


clienteController.init();    
