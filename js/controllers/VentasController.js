var ventaController = (function() {

    function setUPVentanaAddVenta () {
        UIVenta.abrirAddVenta();
    }

    function setUpEvents() {
        document.querySelector('#add-venta-btn').addEventListener('click',setUPVentanaAddVenta);
        document.querySelector('#reporte-venta-btn').addEventListener('click',UIVenta.abrirReportes);
    }

    return {
        init: function () {
            setUpEvents();
   
            
        }
    }
})(UIVenta);

ventaController.init();