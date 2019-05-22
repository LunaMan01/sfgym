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
        let data = UICliente.getDatosParaReporte();
        let res = cliente.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
    }


    function generarReportesMembresias(containerReportes) {
        let membresia = new Membresia();
        let data = UIMembresia.getDatosParaReporte();

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

    function generarReportesGastos(containerReportes) {
        let gasto = new Gasto();
        let data = UIGasto.getDatosParaReporte();

        let res = gasto.reporte(data);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }

    function generarReportesCompras (containerReportes) {
        let compra = new Compra();
        let data = UICompra.getDatosParaReporte();

        let res = compra.reporte(data);
        console.log(res);
        containerReportes.innerHTML += res;
        ocultarBotones();
        // document.querySelector('#descargar-pdf').addEventListener('click', 
    }

    let containerReportes = document.querySelector('#reportes-container');
    document.querySelector('#clientes-select').addEventListener('click', function () {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/clientes-components/reporte-clientes.html');
        containerReportes.classList.add('clientes');
        document.querySelector('.rc').classList.add('col-4')
        ocultarBotones();
    });

    document.querySelector('#membresias-select').addEventListener('click', function () {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/membresias-components/reporte-membresias.html');
        containerReportes.classList.add('membresias');
        document.querySelector('.rm').classList.add('col-4')
        ocultarBotones();
    });

    document.querySelector('#visitas-select').addEventListener('click', function () {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/visitas-components/reporte-visitas.html');
        containerReportes.classList.add('visitas');
        document.querySelector('.r-visitas').classList.add('col-4')
        ocultarBotones();
    });

    document.querySelector('#ventas-select').addEventListener('click', function () {
        this.classList.add('d-none');
        containerReportes.innerHTML += 'reporte ventas';
        // document.querySelector('.r-ventas').classList.add('col-4')
        ocultarBotones();
    });


    document.querySelector('#productos-select').addEventListener('click', function () {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/productos-components/reporte-productos.html');
        containerReportes.classList.add('productos');
        document.querySelector('.r-productos').classList.add('col-4')
        ocultarBotones();
    });


    document.querySelector('#gastos-select').addEventListener('click', function () {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/gastos-components/reporte-gastos.html');
        containerReportes.classList.add('gastos');
        document.querySelector('.r-gastos').classList.add('col-4')
        ocultarBotones();
    });


    document.querySelector('#compras-select').addEventListener('click', function () {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/compras-components/reporte-compras.html');
        containerReportes.classList.add('compras');
        document.querySelector('.r-compras').classList.add('col-4')
        ocultarBotones();
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
    });





})(UICliente);