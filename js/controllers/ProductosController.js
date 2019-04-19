var productoController = (function() {

    function setUpEvents() {

    }

    return {
        init: function () {
            setUpEvents();
            document.querySelector('#reporte-producto-btn').addEventListener('click',UIProducto.abrirReportes);
        }
    }
})(UIProducto);

productoController.init();