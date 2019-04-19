var gastoController = (function() {

    function setUpEvents() {

    }

    return {
        init: function () {
            setUpEvents();
            document.querySelector('#reporte-gasto-btn').addEventListener('click',UIGasto.abrirReportes);
        }
    }
})(UIGasto);

gastoController.init();