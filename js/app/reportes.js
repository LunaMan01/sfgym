var ReportesRequest = (function () {

})();



var UIReportes = (function () {

})();


var ReportesController = (function () {

    function ocultarBotones() {
        document.querySelectorAll('.hidable').forEach(element => {
            element.classList.add('d-none');
        });
    }

    function generarReporteCliente(containerReportes) {
        let cliente = new Cliente();
        var form = document.querySelector('#reporte-clientes-form');
        console.log(document.querySelector('#reporte-clientes-form'));
        var data = new FormData(form);
        let res = cliente.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
    }


    function generarReportesMembresias(containerReportes) {
        let membresia = new Membresia();
        var form = document.querySelector('#reportes-container-membresias #reporte-membresias-form');
        console.log(document.querySelector('#reporte-membresias-form'));
        var data = new FormData(form);


        console.log(document.querySelector('#reporte-membresias-form'));
        let res = membresia.reporte(data);

        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', descargarPDF);
    }

    function generarReportesVisitas(containerReportes) {
        let visita = new Visita();
        let data = UIVisita.getDatosParaReporte();

        let res = visita.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', descargarPDF);
    }

    function generarReportesVentas(containerReportes) {
        let venta = new Venta();
        let data = UIVenta.getDatosParaReporte();

        let res = venta.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', descargarPDF);
    }

    function generarReportesProductos(containerReportes) {
        let producto = new Producto();
        let data = UIProducto.getDatosParaReporte();

        let res = producto.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }

    function generarReportesGastos(containerReportes) {
        let gasto = new Gasto();
        let data = UIGasto.getDatosParaReporte();

        let res = gasto.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }

    function generarReportesCompras(containerReportes) {
        let compra = new Compra();
        let data = UICompra.getDatosParaReporte();

        let res = compra.reporte(data);
        console.log(res);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }

    function setUpDropDownButtons() {

        let containerReportes = document.querySelector('#container-reportes');

        document.querySelector('#clientes-select').addEventListener('click', function () {
            this.classList.add('d-none');
            document.querySelector('#reportes-container-clientes').classList.replace('d-none', 'd-inline-flex');
            document.querySelector('#reportes-container-clientes').innerHTML += getReporteHTML('html/clientes-components/reporte-clientes.html');
            containerReportes.classList.add('clientes');

            ocultarBotones();

            new Lightpick({
                field: document.querySelector('.f-cliente'),
                singleDate: false
            });

            new Cleave('.f-cliente', {
                date: true,
                delimiter: '/',
                datePattern: ['d', 'm', 'Y']
            });
        });

        document.querySelector('#membresias-select').addEventListener('click', function () {
            this.classList.add('d-none');
            document.querySelector('#reportes-container-membresias').classList.replace('d-none', 'd-inline-flex');
            document.querySelector('#reportes-container-membresias').innerHTML += getReporteHTML('html/membresias-components/reporte-membresias.html');
            containerReportes.classList.add('membresias');

            ocultarBotones();


        });

        document.querySelector('#visitas-select').addEventListener('click', function () {
            this.classList.add('d-none');
            document.querySelector('#reportes-container-visitas').classList.replace('d-none', 'd-inline-flex');
            document.querySelector('#reportes-container-visitas').innerHTML += getReporteHTML('html/visitas-components/reporte-visitas.html');
            containerReportes.classList.add('visitas');

            ocultarBotones();
            new Lightpick({
                field: document.querySelector('.f-visita'),
                singleDate: false
            });
            new Cleave('.f-visita', {
                date: true,
                delimiter: '/',
                datePattern: ['d', 'm', 'Y']
            });
        });

        document.querySelector('#ventas-select').addEventListener('click', function () {
            this.classList.add('d-none');
            document.querySelector('#reportes-container-ventas').classList.replace('d-none', 'd-inline-flex');
            document.querySelector('#reportes-container-ventas').innerHTML += getReporteHTML('html/ventas-components/reporte-ventas.html');
            containerReportes.classList.add('ventas');

            ocultarBotones();
            new Lightpick({
                field: document.querySelector('.f-venta'),
                singleDate: false
            });
            new Cleave('.f-venta', {
                date: true,
                delimiter: '/',
                datePattern: ['d', 'm', 'Y']
            });

        });


        document.querySelector('#productos-select').addEventListener('click', function () {
            this.classList.add('d-none');
            document.querySelector('#reportes-container-productos').classList.replace('d-none', 'd-inline-flex');
            document.querySelector('#reportes-container-productos').innerHTML += getReporteHTML('html/productos-components/reporte-productos.html');
            containerReportes.classList.add('productos');

            ocultarBotones();
            new Lightpick({ field: document.querySelector('.f-producto') });

            new Cleave('.f-producto', {
                date: true,
                delimiter: '/',
                datePattern: ['d', 'm', 'Y']
            });
        });


        document.querySelector('#gastos-select').addEventListener('click', function () {
            this.classList.add('d-none');
            document.querySelector('#reportes-container-gastos').classList.replace('d-none', 'd-inline-flex');
            document.querySelector('#reportes-container-gastos').innerHTML += getReporteHTML('html/gastos-components/reporte-gastos.html');
            containerReportes.classList.add('gastos');

            ocultarBotones();
            new Lightpick({
                field: document.querySelector('.f-gasto'),
                singleDate: false
            });
            new Cleave('.f-gasto', {
                date: true,
                delimiter: '/',
                datePattern: ['d', 'm', 'Y']
            });
        });


        document.querySelector('#compras-select').addEventListener('click', function () {
            this.classList.add('d-none');
            document.querySelector('#reportes-container-compras').classList.replace('d-none', 'd-inline-flex');
            document.querySelector('#reportes-container-compras').innerHTML += getReporteHTML('html/compras-components/reporte-compras.html');
            containerReportes.classList.add('compras');
            ocultarBotones();
            new Lightpick({
                field: document.querySelector('.f-compra'),
                singleDate: false
            });
            new Cleave('.f-compra', {
                date: true,
                delimiter: '/',
                datePattern: ['d', 'm', 'Y']
            });
        });



        document.querySelector('#generar-reporte-general').addEventListener('click', function () {
            if (containerReportes.classList.contains('clientes'))
                generarReporteCliente(containerReportes);
            if (containerReportes.classList.contains('membresias'))
                generarReportesMembresias(containerReportes);
            if (containerReportes.classList.contains('visitas'))
                generarReportesVisitas(containerReportes);
            if (containerReportes.classList.contains('productos'))
                generarReportesProductos(containerReportes);
            if (containerReportes.classList.contains('gasto'))
                generarReportesGastos(containerReportes);
            if (containerReportes.classList.contains('compras'))
                generarReportesCompras(containerReportes);
            if (containerReportes.classList.contains('ventas'))
                generarReportesVentas(containerReportes);


            document.querySelector('#reportes-container-clientes').classList.add('d-none');;
            document.querySelector('#reportes-container-membresias').classList.add('d-none');;
            document.querySelector('#reportes-container-visitas').classList.add('d-none');;
            document.querySelector('#reportes-container-ventas').classList.add('d-none');;
            document.querySelector('#reportes-container-productos').classList.add('d-none');;
            document.querySelector('#reportes-container-gastos').classList.add('d-none');;
            document.querySelector('#reportes-container-compras').classList.add('d-none');;


            document.querySelector('#h1').classList.add('d-none');
            document.querySelector('#opciones').classList.add('d-none');
        });

    }




    return {
        init: function () {
            setUpDropDownButtons();
        }
    }




})(UICliente, UIMembresia);

ReportesController.init();