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
        
        console.log(carritoJSON);
        
        
    }

    function guardarVenta () {
        let nipCliente = document.querySelector('#nip-cliente');
        let idInstructor = document.querySelector('#nip-instructor');

        let venta = {
            "nipCliente" : nipCliente,
            "idInstructor" : idInstructor,
        }

        let ventaJSON = JSON.stringify(venta);

        let carrito = document.querySelectorAll('.carrito');

        
        let productosEnCarrito = new Array();
        carrito.forEach(element => {
            let producto = new Object();
            producto.id = element.getAttribute('id');
            producto.cantidad = element.getAttribute('data-cantidad');
            producto.subtotal = element.getAttribute('data-subtotal');
            productosEnCarrito.push(producto);
        });

        let carritoJSON = JSON.stringify(productosEnCarrito);

        new Venta().add(ventaJSON, carritoJSON);
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