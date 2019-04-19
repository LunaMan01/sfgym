var ventaController = (function() {

    function setUpEvents() {

    }

    return {
        init: function () {
            setUpEvents();
            document.querySelector('#reporte-venta-btn').addEventListener('click',UIVenta.abrirReportes);
        }
    }
})(UIVenta);

ventaController.init();