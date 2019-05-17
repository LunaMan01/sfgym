var ventaController = (function () {

    function setUpNuevaVenta() {
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



    function guardarVenta() {
        let nipCliente = document.querySelector('#nip-cliente').value;
        console.log(nipCliente);
        let idInstructor = document.querySelector('#nip-instructor').value;
        let totalVenta = document.querySelector('#total-venta').value;

        let venta = {
            "nipCliente": nipCliente,
            "idInstructor": idInstructor,
            "totalVenta": totalVenta
        }


        console.log(venta);
        let carrito = document.querySelectorAll('.carrito');


        let productosEnCarrito = new Array();
        carrito.forEach(element => {
            let producto = new Object();
            producto.id = element.getAttribute('id');
            producto.cantidad = element.getAttribute('data-cantidad');
            producto.subtotal = element.getAttribute('data-subtotal');
            productosEnCarrito.push(producto);
        });



        new Venta().add(venta, productosEnCarrito);
    }

    function getVentasMes() {
        UIVenta.mostrarCarga();
        UIVenta.mostrarVentasEnTabla(new Venta().getVentasMes());
    }

    function getVentasDia() {
        UIVenta.mostrarCarga();
        UIVenta.mostrarVentasEnTabla(new Venta().getVentasSemana());
    }

    function getVentasSemana() {
        UIVenta.mostrarCarga();
        UIVenta.mostrarVentasEnTabla(new Venta().getVentasDia());
    }

    function cambiarVista () {
        let ventasDia = document.querySelector('#ventas-dia');
        let ventasMes = document.querySelector('#ventas-mensuales');
        let ventasSemana = document.querySelector('#ventas-semanales');

        if(ventasDia.selected)
            getVentasDia();
        else if(ventasMes.selected)
            getVentasMes();
        else if(ventasSemana.selected)
            getVentasSemana();
    }

    function setUpEvents() {
        getVentasDia();
        document.querySelector('#add-venta-btn').addEventListener('click', setUpNuevaVenta);
        document.querySelector('#reporte-venta-btn').addEventListener('click', UIVenta.abrirReportes);
    }

    return {
        init: function () {
            setUpEvents();

        }
    }
})(UIVenta);
ventaController.init();