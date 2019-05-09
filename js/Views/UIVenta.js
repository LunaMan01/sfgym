var UIVenta = (function () {


    return {

        abrirAddVenta: function () {
            load('html/ventas-components/agregar-venta.html', document.querySelector('.content'));
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/getProductosVentas.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(null);

            document.querySelector('#select-productos').innerHTML = req.responseText;

        },

        agregarProductoACarrito: function (producto) {
            
        },

        abrirReportes: function () {
            load('html/ventas-components/reporte-ventas.html', document.querySelector('.content'));
        },
    }
})();