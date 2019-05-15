var productoController = (function() {

    function addNuevoProducto() {
        let data = UIProducto.getDatosParaNuevoProducto();
        let producto = new Producto();

        if (producto.add(data)) {
            UIProducto.mostrarMensajeExito('Producto añadido correctamente');
            UIProducto.mostrarTodosLosProductos();
            UIProducto.esconderModal('#add-producto-modal');
        }
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-productos').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UIProducto.getId(e);
            }
        }, false);

    }

    function eliminarProducto() {

        let producto = new Producto();
        if (producto.eliminar()) {

            UIProducto.quitarRegistro();
            UIProducto.mostrarMensajeExito('Producto eliminado correctamente');
        }


    }


    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-productos').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                UIProducto.getId(e);
                let producto = UIProducto.getProducto();
                UIProducto.setDatosProductoEnInputs(producto);
                new Lightpick({ field: document.querySelector('#modificar-producto-form #fecha-caducidad')});
            }
        }, false);
    }

    function modificarMembresia() {
        let data = UIProducto.getDatosModificados();
        let producto = new Producto();
        // UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (producto.modificar(data)) {
            UIProducto.mostrarMensajeExito('Producto modificado correctamente');
            // UICliente.regresarBtnAEstadoInicial('#guardar-cliente-editado');
            UIProducto.esconderModal('#modificar-producto-modal');
            UIProducto.mostrarTodosLosProductos();
        }
    }

    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-productos').addEventListener('click', function (e) {

            if (e.target.matches('.watch-action')) {
                UIProducto.getId(e);
                let producto = UIProducto.getProducto();
                UIProducto.verProducto(producto);
                
            }
        }, false);
    }

    function busquedaDinamica() {
        let dato = UIProducto.getDatosABuscar();
        let producto = new Producto();
        let datosEncontrados = producto.consultar(dato);
        UIProducto.mostrarDatosEncontrados(datosEncontrados);
        
    }

    function setUpVentanaReportes() {
        UIProducto.abrirReportes();

        // new Lightpick({
        //     field: document.querySelector('#rango-fecha'),
        //     singleDate: false

        // });

        document.querySelector('#reporte-productos-form').addEventListener('submit', generarReporte);

    }

    function generarReporte() {
        let producto = new Producto();
        let data = UIProducto.getDatosParaReporte();

        let res = producto.reporte(data);
        UIProducto.mostrarReporte(res);

        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }
    
    function setUpEvents() {
        UIProducto.mostrarTodosLosProductos();
        document.querySelector('#add-producto-form').addEventListener('submit', addNuevoProducto);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarProducto);
        setUpEditEvent();
        document.querySelector('#modificar-producto-form').addEventListener('submit', modificarMembresia);
        setUpWatchEvent();
        document.querySelector('#buscar-producto-input').addEventListener('keyup', busquedaDinamica);
        new Lightpick({ field: document.getElementById('fecha-caducidad') });
        document.querySelector('#reporte-producto-btn').addEventListener('click', setUpVentanaReportes);


    }




    return {
        init: function () {
            setUpEvents();

        }
    }
})(UIProducto);

productoController.init();