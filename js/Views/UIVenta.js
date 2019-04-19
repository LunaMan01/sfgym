var UIVenta  = (function() {


    return {
        abrirReportes: function() {
            load('html/ventas-components/reporte-ventas.html', document.querySelector('.content'));
        },
    }
})();