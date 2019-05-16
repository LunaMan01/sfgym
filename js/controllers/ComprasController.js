var compraController = (function() {

    function addNuevaCompra() {
        let data = UICompra.getDatosParaNuevaCompra();
        let compra = new Compra();

        if (compra.add(data)) {
            UICompra.mostrarMensajeExito('Compra añadida correctamente');
            UICompra.mostrarTodasLasCompras(compra.getTodosLasCompras());
            UICompra.esconderModal('#add-compra-modal');
        }
    }

    function setUpDeleteEvent() {
        document.querySelector('#cuerpo-tabla-compras').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UICompra.getId(e);
            }
        }, false);

    }

    function eliminarCompra() {

        let compra = new Compra();
        if (compra.eliminar()) {
            UICompra.quitarRegistro();
            UICompra.mostrarMensajeExito('Compra eliminada correctamente');
        }
    }

    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-compras').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                UICompra.getId(e);
                let compra = UICompra.getCompra();
                UICompra.setDatosCompraEnInputs(compra);
                
            }
        }, false);
    }

    function modificarCompra() {
        let data = UICompra.getDatosModificados();
        let compra = new Compra();
        // UICliente.mostrarAnimacionBtn('#guardar-cliente-editado');
        if (compra.modificar(data)) {
            UICompra.mostrarMensajeExito('Compra modificada correctamente');
            // UICliente.regresarBtnAEstadoInicial('#guardar-cliente-editado');
            UICompra.esconderModal('#modificar-compra-modal');
            UICompra.mostrarTodasLasCompras(compra.getTodosLasCompras());
        }
    }

    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-compras').addEventListener('click', function (e) {

            if (e.target.matches('.watch-action')) {
                UICompra.getId(e);
                let compra = UICompra.getCompra();
                UICompra.verCompra(compra);
    
            }
        }, false);
    }

    function busquedaDinamica() {
        let dato = UICompra.getDatosABuscar();
        let compra = new Compra();
        let datosEncontrados = compra.consultar(dato);
        UICompra.mostrarComprasEnTabla(datosEncontrados);
        
    }

    function setUpVentanaReportes() {
        UICompra.abrirReportes();

        new Lightpick({
            field: document.querySelector('#fecha-rango-reporte'),
            singleDate: false

        });

        document.querySelector('#reporte-compras-form').addEventListener('submit', generarReporte);

    }

    function generarReporte() {
        let compra = new Compra();
        let data = UICompra.getDatosParaReporte();

        let res = compra.reporte(data);
        UICompra.mostrarReporte(res);

        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }

    function setUpInputs () {
        new Lightpick({ field: document.getElementById('fecha-compra') });

        new Cleave ('.numeric-c-add', {
            numericOnly: true,
            blocks : [11]
        });

        new Cleave ('.numeric-m-add', {
            numericOnly: true,
            blocks : [11]
        });

        new Cleave('.date-add', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });

        new Cleave ('.numeric-c-update', {
            numericOnly: true,
            blocks : [11]
        });

        new Cleave ('.numeric-m-update', {
            numericOnly: true,
            blocks : [11]
        });

        new Cleave('.date-update', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });
       
    }

  

    
    function mostrarTodas () {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getTodosLasCompras());
    }

    function mostrarComprasDia () {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getComprasDia());
    }

    function mostrarComprasMes () {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getComprasMes());
    }

    function mostrarComprasSemana () {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getComprasSemana());
    }

    function cambiarVista () {
        let todasLasCompras = document.querySelector('#todas-las-compras');
        let comprasMes = document.querySelector('#compras-ultimo-mes');
        let comprasSemana = document.querySelector('#compras-semana');
        let comprasDia = document.querySelector('#compras-dia');

        if(todasLasCompras.selected)
            mostrarTodas();
        else if (comprasMes.selected)
            mostrarComprasMes();
        else if (comprasDia.selected)
            mostrarComprasDia();
        else if (comprasSemana.selected)
            mostrarComprasSemana();
    }



    function setUpEvents() {
        mostrarTodas();
        setUpInputs();
      
        document.querySelector('#add-compra-form').addEventListener('submit', addNuevaCompra);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarCompra);
        setUpEditEvent();
        document.querySelector('#modificar-compra-form').addEventListener('submit', modificarCompra);
        setUpWatchEvent();
        document.querySelector('#buscar-compra-input').addEventListener('keyup', busquedaDinamica);
        document.querySelector('#reporte-compra-btn').addEventListener('click', setUpVentanaReportes);
        document.querySelector('#select-compras').addEventListener('change', cambiarVista);
    }

    return {
        init: function () {
            setUpEvents();
            
        }
    }
})(UICompra);

compraController.init();