var ventaController = (function() {

    function setUpEvents() {

    }

    return {
        init: function () {
            setUpEvents();
            document.querySelector('#add-venta-btn').addEventListener('click',UIVenta.abrirAddVenta);
            document.querySelector('#reporte-venta-btn').addEventListener('click',UIVenta.abrirReportes);
        }
    }
})(UIVenta);

ventaController.init();