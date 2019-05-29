var productoController = (function () {

    function actualizarTabla() {
        let aCaducar = document.querySelector('#productos-proximos-caducidad');
        let todosLosProductos = document.querySelector('#todos-los-productos');
        let pocasExistencias = document.querySelector('#productos-pocas-existencias');

        if (todosLosProductos.selected)
            mostrarTodosLosProductos();
        else if (aCaducar.selected)
            mostrarProductosProximosACaducar();
        else if (pocasExistencias.selected)
            mostrarProductosConPocasExistencias();
    }

    function addNuevoProducto() {
        let data = UIProducto.getDatosParaNuevoProducto();
        let producto = new Producto();

        if (producto.add(data)) {
            UIProducto.mostrarAlert('Producto añadido correctamente', 'alert-success');
            actualizarTabla();

            UIProducto.esconderModal('#add-producto-modal');
        } else {
            UIProducto.mostrarAlert('Algo salió mal', 'alert-danger');
            actualizarTabla();

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
            UIProducto.mostrarAlert('Producto eliminado correctamente', 'alert-success');
        } else {
            UIProducto.mostrarAlert('Algo salió mal', 'alert-success');
        }


    }


    function setUpEditEvent() {
        document.querySelector('#cuerpo-tabla-productos').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                UIProducto.getId(e);
                let producto = UIProducto.getProducto();
                UIProducto.setDatosProductoEnInputs(producto);
                new Lightpick({ field: document.querySelector('#modificar-producto-form #fecha-caducidad') });
            }
        }, false);
    }

    //modificar producto
    function modificarMembresia() {

        let data = UIProducto.getDatosModificados();
        let producto = new Producto();

        if (producto.modificar(data)) {
            UIProducto.mostrarAlert('Producto modificado correctamente', 'alert-success');

            UIProducto.esconderModal('#modificar-producto-modal');
            actualizarTabla();
        } else {
            UIProducto.mostrarAlert('Algo salió mal', 'alert-danger');
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
        let opcionSelect;

        let aCaducar = document.querySelector('#productos-proximos-caducidad');
        let todosLosProductos = document.querySelector('#todos-los-productos');
        let pocasExistencias = document.querySelector('#productos-pocas-existencias');

        if (todosLosProductos.selected) {
            opcionSelect = 1;
            console.log(opcionSelect);
        }
        else if (aCaducar.selected) {
            opcionSelect = 2;
            console.log(opcionSelect);
        }
        else if (pocasExistencias.selected) {
            opcionSelect = 3;
            console.log(opcionSelect);
        }

        let dato = UIProducto.getDatosABuscar();
        let producto = new Producto();
        let datosEncontrados = producto.consultar(dato, opcionSelect);
        UIProducto.mostrarProductosEnTabla(datosEncontrados);

    }

  

    function setUpVentanaReportes() {
        UIProducto.abrirReportes();

        document.querySelector('#reporte-productos-form').addEventListener('submit', generarReporte);

    }

    function generarReporte() {
        console.log('dsa');
        let producto = new Producto();
        let data = UIProducto.getDatosParaReporte();

        let res = producto.reporte(data);
        UIProducto.mostrarReporte(res);

        document.querySelector('#descargar-pdf').addEventListener('click', descargarPDF);
    }


    function descargarPDF() {
        let yPos = 10;

        

        var doc = new jsPDF();

        doc.text('Acropolis Gym', 80, yPos);

        yPos += 15;
        doc.text('Reporte de productos', 15, yPos);
        if (document.querySelector('#productos-existencia-table') != null) {
            yPos += 10;
            doc.text('Lista de productos en existencia', 15, yPos);
            doc.autoTable({
                    startY: number = yPos+8,
                    html: '#productos-existencia-table',
                    headStyles: { fillColor: [84, 173, 88] },
                    theme: 'grid'
                });
        }

        if (document.querySelector('#productos-menos-existencia-table') != null) {
            yPos += 5;
            doc.text('Productos con pocas existencias', 15, doc.autoTableEndPosY() + 40);
            yPos += 20;
            doc.autoTable(
                {
                    startY: number = doc.autoTableEndPosY() + 50,
                    html: '#productos-menos-existencia-table',
                    headStyles: { fillColor: [84, 173, 88] },
                    theme: 'grid'
                });
        }

        if (document.querySelector('#productos-caducar-table') != null) {
            yPos += 5;
            doc.text('Productos próximos a caducar', 15, doc.autoTableEndPosY() + 40);
            yPos += 20;
            doc.autoTable(
                {
                    startY: number = doc.autoTableEndPosY() + 50,
                    html: '#productos-caducar-table',
                    headStyles: { fillColor: [84, 173, 88] },
                    theme: 'grid'
                });
        }
        doc.save();
    }

    function setUpInputs() {


        new Cleave('.numeric-price-add', {
            numericOnly: true,
            blocks: [10]
        });

        new Cleave('.numeric-add', {
            numericOnly: true,
            blocks: [10]
        });

        new Cleave('.numeric-price-update', {
            numericOnly: true,
            blocks: [10]
        });

        new Cleave('.numeric-update', {
            numericOnly: true,
            blocks: [10]
        });

        new Cleave('.date-add', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });

        new Cleave('.date-update', {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
        });



    }

    function mostrarTodosLosProductos() {
        UIProducto.mostrarCarga();
        UIProducto.mostrarProductosEnTabla(new Producto().getTodos());
    }

    function mostrarProductosConPocasExistencias() {
        UIProducto.mostrarCarga();
        UIProducto.mostrarProductosEnTabla(new Producto().getPocasExistencias());
    }

    function mostrarProductosProximosACaducar() {
        UIProducto.mostrarCarga();
        UIProducto.mostrarProductosEnTabla(new Producto().getProximosACaducar());
    }

    function cambiarVista() {
        let aCaducar = document.querySelector('#productos-proximos-caducidad');
        let todosLosProductos = document.querySelector('#todos-los-productos');
        let pocasExistencias = document.querySelector('#productos-pocas-existencias');

        if (todosLosProductos.selected)
            mostrarTodosLosProductos();
        else if (aCaducar.selected)
            mostrarProductosProximosACaducar();
        else if (pocasExistencias.selected)
            mostrarProductosConPocasExistencias();
    }


    function setUpEvents() {
        setUpInputs();
        mostrarTodosLosProductos();
        document.querySelector('#add-producto-form').addEventListener('submit', addNuevoProducto);
        setUpDeleteEvent();
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarProducto);
        setUpEditEvent();
        document.querySelector('#modificar-producto-form').addEventListener('submit', modificarMembresia);
        setUpWatchEvent();
        document.querySelector('#buscar-producto-input').addEventListener('keyup', busquedaDinamica);
        new Lightpick({ field: document.getElementById('fecha-caducidad') });
        document.querySelector('#reporte-producto-btn').addEventListener('click', setUpVentanaReportes);
        document.querySelector('#reporte-producto-i').addEventListener('click', setUpVentanaReportes);
        document.querySelector('#select-productos').addEventListener('change', cambiarVista);

    }




    return {
        init: function () {
            setUpEvents();

        }
    }
})(UIProducto);

productoController.init();