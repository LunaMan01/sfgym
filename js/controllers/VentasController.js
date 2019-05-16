var ventaController = (function() {

    function setUpNuevaVenta () {
        UIVenta.abrirAddVenta();
        document.querySelector('#agregar-producto-seleccionado').addEventListener('click', () => {

            var selector = document.getElementById("select-productos");
            
            // var selCar = carList.options[carList.selectedIndex].value;



            let producto = document.getElementById('select-productos').value;
            let precio = selector.options[selector.selectedIndex].getAttribute('data-precio');
            let id = selector.options[selector.selectedIndex].getAttribute('id');
            let cantidad = UIVenta.getCantidad();
            UIVenta.agregarProductoACarrito(producto, cantidad, precio, id);
        });
    }

    function setUpEvents() {

    }

    return {
        init: function () {
            setUpEvents();
            document.querySelector('#add-venta-btn').addEventListener('click', setUpNuevaVenta);    
            document.querySelector('#reporte-venta-btn').addEventListener('click',UIVenta.abrirReportes);
        }
    }
})(UIVenta);
ventaController.init();