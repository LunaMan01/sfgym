var compraController = (function () {

    function actualizarTabla() {

        if (document.querySelector('#todas-las-compras').selected)
            mostrarTodas();
        else if (document.querySelector('#compras-ultimo-mes').selected)
             mostrarComprasMes();
        else if (document.querySelector('#compras-semana').selected)
            mostrarComprasSemana();
        else if (document.querySelector('#compras-dia').selected)
            mostrarComprasDia();
    }

    function addNuevaCompra() {
        let data = UICompra.getDatosParaNuevaCompra();
        let compra = new Compra();

        let opcionSelect;

        if (document.querySelector('#categoria-producto').selected)
            opcionSelect = 1;
        else if (document.querySelector('#categoria-aparato').selected)
            opcionSelect = 2;
        else if (document.querySelector('#categoria-otro').selected)
            opcionSelect = 3;

        if (compra.add(data, opcionSelect)) {
            UICompra.mostrarAlert('Compra añadida correctamente', 'alert-success');
            actualizarTabla();
            document.querySelector('#add-compra-form').reset();
            UICompra.esconderModal('#add-compra-modal');

        } else {
            UICompra.mostrarAlert('Algo salió mal', 'alert-danger');
            document.querySelector('#add-compra-form').reset();
            actualizarTabla();
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
            UICompra.mostrarAlert('Compra eliminada correctamente', 'alert-success');
            UICompra.quitarRegistro();
            
        } else {
            UICompra.mostrarAlert('Algo salió mal', 'alert-danger');
            
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
        if (compra.modificar(data)) {
            UICompra.mostrarAlert('Compra modificada correctamente', 'alert-success');
            actualizarTabla();
            UICompra.esconderModal('#modificar-compra-modal');
        } else {
            UICompra.mostrarAlert('Algo salio mal', 'alert-danger');
            actualizarTabla();
            UICompra.esconderModal('#modificar-compra-modal');
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
        let opcionSelect;

        let todasLasCompras = document.querySelector('#todas-las-compras');
        let comprasMes = document.querySelector('#compras-ultimo-mes');
        let comprasSemana = document.querySelector('#compras-semana');
        let comprasDia = document.querySelector('#compras-dia');

        if (todasLasCompras.selected)
            opcionSelect = 1;
        else if (comprasMes.selected)
            opcionSelect = 2;
        else if (comprasDia.selected)
            opcionSelect = 3;
        else if (comprasSemana.selected)
            opcionSelect = 4;
        let dato = UICompra.getDatosABuscar();
        let compra = new Compra();
        let datosEncontrados = compra.consultar(dato, opcionSelect);
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

    function setUpInputs() {
        new Lightpick({ field: document.getElementById('fecha-compra') });

        new Lightpick({ field: document.getElementById('fecha-compra-update') });

        new Cleave('.numeric-m-add', {
            numericOnly: true,
            blocks: [11]
        });

        new Cleave('.date-add', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });



        new Cleave('.numeric-m-update', {
            numericOnly: true,
            blocks: [11]
        });

        new Cleave('.date-update', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });

    }




    function mostrarTodas() {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getTodosLasCompras());
    }

    function mostrarComprasDia() {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getComprasDia());
    }

    function mostrarComprasMes() {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getComprasMes());
    }

    function mostrarComprasSemana() {
        UICompra.mostrarCarga();
        UICompra.mostrarComprasEnTabla(new Compra().getComprasSemana());
    }

    function cambiarVista() {
        let todasLasCompras = document.querySelector('#todas-las-compras');
        let comprasMes = document.querySelector('#compras-ultimo-mes');
        let comprasSemana = document.querySelector('#compras-semana');
        let comprasDia = document.querySelector('#compras-dia');

        if (todasLasCompras.selected)
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