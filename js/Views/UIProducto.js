var UIProducto  = (function() {


    return {
        abrirReportes: function() {
            load('html/productos-components/reporte-productos.html', document.querySelector('.content'));
        },
    }
})();