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

    function generarReportesProductos(containerReportes) {
        let producto = new Producto();
        let data = UIProducto.getDatosParaReporte();

        let res = producto.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }

    function generarReportesVentas(containerReportes) {
        let venta = new Venta();
        let data = UIVenta.getDatosParaReporte();

        let res = venta.reporte(data);

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
            if (containerReportes.classList.contains('ventas'))
                generarReportesVentas(containerReportes);
            if (containerReportes.classList.contains('gastos'))
                generarReportesGastos(containerReportes);
            if (containerReportes.classList.contains('compras'))
                generarReportesCompras(containerReportes);


            document.querySelectorAll('.d-inline-flex').forEach(element => {
                element.classList.replace('d-inline-flex', 'd-none');
            });

            document.querySelectorAll('.to-hide').forEach(element => {
                element.classList.add('d-none');
            });

            document.querySelector('#generar-reporte-general').classList.add('d-none');
            document.querySelector('#descargar-pdf-general').classList.remove('d-none');
        });

        document.querySelector('#descargar-pdf-general').addEventListener('click', descargarPDF);
    }


    var doc = new jsPDF();
    let yPos = 10;

    let nPages = 0;
    function pdfClientes() {
        nPages++;
        yPos += 15;
        doc.text('Reporte de clientes', 15, yPos);
        if (document.querySelector('#clientes-inactivos-table') != null) {
            yPos += 10;
            doc.text('Lista de clientes inactivos', 15, yPos);
            doc.autoTable({
                startY: number = yPos + 8,
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

        if (document.querySelector('#clientes-menosVisitas-table') != null) {
            yPos += 5;
            doc.text('Top 5 Clientes con menor número de visitas', 15, doc.autoTableEndPosY() + 40);
            yPos += 20;
            doc.autoTable(
                {
                    startY: number = doc.autoTableEndPosY() + 50,
                    html: '#clientes-menosVisitas-table',
                    headStyles: { fillColor: [84, 173, 88] },
                    theme: 'grid'
                });
        }

    }

    function pdfMembresias() {

        if (nPages > 0)
            doc.addPage();
        nPages++;
        let yPos = 10;

        yPos += 15;
        doc.text('Reporte de membresías', 15, yPos);
        if (document.querySelector('#membresias-nuevas-table') != null) {
            yPos += 10;
            doc.text('Lista de membresías nuevas', 15, yPos);
            doc.autoTable({
                startY: number = yPos + 8,
                html: '#membresias-nuevas-table',
                headStyles: { fillColor: [84, 173, 88] },
                theme: 'grid'
            });
        }

        if (document.querySelector('#membresias-vencer-table') != null) {
            yPos += 5;
            doc.text('Lista de membresías a vencer', 15, doc.autoTableEndPosY() + 40);
            yPos += 20;
            doc.autoTable(
                {
                    startY: number = doc.autoTableEndPosY() + 50,
                    html: '#membresias-vencer-table',
                    headStyles: { fillColor: [84, 173, 88] },
                    theme: 'grid'
                });
        }


    }


    function pdfVisitas() {
        if (nPages > 0)
            doc.addPage();
        nPages++;

        let yPos = 10;


        yPos += 15;
        doc.text('Reporte de visitas', 15, yPos);
        if (document.querySelector('#visitas-table') != null) {
            yPos += 10;
            doc.text('Visitas registradas', 15, yPos);
            doc.autoTable({
                startY: number = yPos + 8,
                html: '#visitas-table',
                headStyles: { fillColor: [84, 173, 88] },
                theme: 'grid'
            });
        }


    }


    function pdfVentas() {

        if (nPages > 0)
            doc.addPage();
        nPages++;
        let yPos = 10;



        yPos += 15;
        doc.text('Reporte de ventas', 15, yPos);
        if (document.querySelector('#ventas-table') != null) {
            yPos += 10;
            doc.text('Lista de ventas', 15, yPos);
            doc.autoTable({
                startY: number = yPos + 8,
                html: '#ventas-table',
                headStyles: { fillColor: [84, 173, 88] },
                theme: 'grid'
            });
        }



    }

    function pdfProductos() {
        if (nPages > 0)
            doc.addPage();
        nPages++;

        let yPos = 10;

        yPos += 15;
        doc.text('Reporte de productos', 15, yPos);
        if (document.querySelector('#productos-existencia-table') != null) {
            yPos += 10;
            doc.text('Lista de productos en existencia', 15, yPos);
            doc.autoTable({
                startY: number = yPos + 8,
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

    }

    function pdfGastos() {

        if (nPages > 0)
            doc.addPage();
        nPages++;


        let yPos = 10;

        yPos += 15;
        doc.text('Reporte de gastos', 15, yPos);
        if (document.querySelector('#gastos-table') != null) {
            yPos += 10;
            doc.text('Lista de gastos', 15, yPos);
            doc.autoTable({
                startY: number = yPos + 8,
                html: '#gastos-table',
                headStyles: { fillColor: [84, 173, 88] },
                theme: 'grid'
            });
        }



    }

    function pdfCompras() {
        if (nPages > 0)
            doc.addPage();
        nPages++;


        let yPos = 10;


        yPos += 15;
        doc.text('Reporte de compras', 15, yPos);
        if (document.querySelector('#compras-table') != null) {
            yPos += 10;
            doc.text('Lista de compras', 15, yPos);
            doc.autoTable({
                startY: number = yPos + 8,
                html: '#compras-table',
                headStyles: { fillColor: [84, 173, 88] },
                theme: 'grid'
            });
        }



    }



    function descargarPDF() {
        let containerReportes = document.querySelector('#container-reportes');
        doc.text('Acropolis Gym', 80, yPos);

        if (containerReportes.classList.contains('clientes'))
            pdfClientes();
        if (containerReportes.classList.contains('membresias'))
            pdfMembresias();
        if (containerReportes.classList.contains('visitas'))
            pdfVisitas();
        if (containerReportes.classList.contains('productos'))
            pdfProductos();
        if (containerReportes.classList.contains('ventas'))
            pdfVentas();
        if (containerReportes.classList.contains('gastos'))
            pdfGastos();
        if (containerReportes.classList.contains('compras'))
            pdfCompras();


        doc.save();
        doc = new jsPDF();
    }





    return {
        init: function () {
            setUpDropDownButtons();
        }
    }




})(UICliente, UIMembresia);

ReportesController.init();