var UIVenta  = (function() {


    return {

        abrirAddVenta: function () {
            load('html/ventas-components/agregar-venta.html', document.querySelector('.content'));
        },
        abrirReportes: function() {
            load('html/ventas-components/reporte-ventas.html', document.querySelector('.content'));
        },
    }
})();