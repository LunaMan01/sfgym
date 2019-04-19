var compraController = (function() {

    function setUpEvents() {

    }

    return {
        init: function () {
            setUpEvents();
            document.querySelector('#reporte-compra-btn').addEventListener('click',UICompra.abrirReportes);
        }
    }
})(UICompra);

compraController.init();