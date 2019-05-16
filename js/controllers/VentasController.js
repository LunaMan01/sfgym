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

        document.querySelector('#guardar-venta').addEventListener('click', guardarVenta);
    }

    function getProductosDelCarrito () {
        let carrito = document.querySelectorAll('#carrito td');

        console.log(carrito);

        
        
    }

    function guardarVenta () {
        let nipCliente = document.querySelector('#nip-cliente');
        let idInstructor = document.querySelector('#nip-instructor');

        let ventaJSON = {
            "nipCliente" : nipCliente,
            "idInstructor" : idInstructor,
        }

        getProductosDelCarrito();
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