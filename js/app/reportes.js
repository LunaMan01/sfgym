var ReportesRequest = (function () {

})();



var UIReportes = (function () {

})();


var ReportesController = (function () {

    function ocultarBotones () {
        document.querySelectorAll('.hidable').forEach(element => {
            element.classList.add('d-none');
        });
    }

    function generarReporteCliente() {
        

        let cliente = new Cliente();
        let data = UICliente.getDatosParaReporte();

        let res = cliente.reporte(data);
        UICliente.mostrarReporte(res);

        document.querySelector('#descargar-pdf').addEventListener('click', descargarPDF);
    
    }


    let btn = document.querySelector('#dropdown-reportes');
    let containerReportes = document.querySelector('#reportes-container');
    document.querySelector('#clientes-select').addEventListener('click', function() {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/clientes-components/reporte-clientes.html');
        document.querySelector('.rc').classList.add('col-4')
        ocultarBotones();
    });

    document.querySelector('#membresias-select').addEventListener('click', function() {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/membresias-components/reporte-membresias.html');
        document.querySelector('.rm').classList.add('col-4')
        ocultarBotones();
    });

    document.querySelector('#visitas-select').addEventListener('click', function() {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/visitas-components/reporte-visitas.html');
        document.querySelector('.r-visitas').classList.add('col-4')
        ocultarBotones();
    });

    document.querySelector('#ventas-select').addEventListener('click', function() {
        this.classList.add('d-none');
        containerReportes.innerHTML += 'reporte ventas';
        // document.querySelector('.r-ventas').classList.add('col-4')
        ocultarBotones();
    });


    document.querySelector('#productos-select').addEventListener('click', function() {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/productos-components/reporte-productos.html');
        document.querySelector('.r-productos').classList.add('col-4')
        ocultarBotones();
    });


    document.querySelector('#gastos-select').addEventListener('click', function() {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/gastos-components/reporte-gastos.html');
        document.querySelector('.r-gastos').classList.add('col-4')
        ocultarBotones();
    });


    document.querySelector('#compras-select').addEventListener('click', function() {
        this.classList.add('d-none');
        containerReportes.innerHTML += getReporteHTML('html/compras-components/reporte-compras.html');
        document.querySelector('.r-compras').classList.add('col-4')
        ocultarBotones();
    });



    document.querySelector('#generar-reporte-general').addEventListener('click', function() {
        generarReporteCliente();
    });




    
})(UICliente);