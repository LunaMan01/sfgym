var visitaController = (function() {

    function setUpEvents() {

    }

    return {
        init: function () {
            setUpEvents();
            document.querySelector('#reporte-visita-btn').addEventListener('click',UIVisita.abrirReportes);
        }
    }
})(UIVisita);

visitaController.init();