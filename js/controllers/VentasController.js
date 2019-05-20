var ventaController = (function () {

    var cantidadTd;
    var precioProducto;
    var subtotalTd;
    var id;

    function setUpEditEvent() {
        document.querySelector('#carrito').addEventListener('click', function (e) {

            if (e.target.matches('.edit-action')) {
                cantidadTd = UIVenta.getCantidadTd(e);
                subtotalTd = UIVenta.getSubtotalTd(e);
                precioProducto = cantidadTd.getAttribute('data-precio');

            }
        }, false);
    }

    function modificarCantidad () {
        let nuevaCantidad = document.querySelector('#nueva-cantidad').value;
       
        UIVenta.modificarProductoEnCarrito(cantidadTd, subtotalTd, nuevaCantidad, precioProducto);

        UIVenta.esconderModal('#modificar-cantidad-producto-modal');
    }

    function setUpDeleteEvent() {
        document.querySelector('#carrito').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                UIVenta.getProductoEnCarritoId();
                UIVenta.quitarRegistroDeCarrito();
            }
        }, false);

    }


    function setUpEditEventVenta() {
        document.querySelector('#cuerpo-tabla-ventas').addEventListener('click', function (e) {

            if (e.target.matches('.edit-venta')) {
                UIVenta.abrirEditVenta();
                id = UIVenta.getId(e);
                let venta = new Venta().getVenta(id);
                UIVenta.setDatosVentaEnInputs(venta);
                UIVenta.setProductosEnTabla(new Venta().getDetalleVenta(id));
            }
        }, false);
    }
    
   


    function setUpNuevaVenta() {
        
        document.querySelector('.modal-container').innerHTML = nuevaVentaModals;
        UIVenta.abrirAddVenta();
        document.querySelector('#agregar-producto-seleccionado').addEventListener('click', () => {

            var selector = document.getElementById("select-productos");

        



            let producto = document.getElementById('select-productos').value;
            let precio = selector.options[selector.selectedIndex].getAttribute('data-precio');
            let id = selector.options[selector.selectedIndex].getAttribute('id');
            let cantidad = UIVenta.getCantidad();
            if(cantidad == 0){
                UIVenta.mostrarAlert('#add-venta-alert','Añade una cantidad', 'alert-danger');
                return;
            }

            UIVenta.agregarProductoACarrito(producto, cantidad, precio, id);
        });

        

        document.querySelector('#add-venta-form').addEventListener('submit', guardarVenta);
        setUpEditEvent();
        setUpDeleteEvent();
        document.querySelector('#modificar-cantidad-form').addEventListener('submit', modificarCantidad);
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

        if (productosEnCarrito.length == 0) {
            UIVenta.mostrarAlert('#add-venta-alert', 'Añade al menos un producto a la venta', 'alert-danger');
            return;
        }

        if(new Venta().add(venta, productosEnCarrito)) {
            UIVenta.mostrarAlert('#add-venta-alert', 'Venta realizada exitosamente', 'alert-success');
            document.querySelector('#add-venta-form').reset();
            UIVenta.limpiarCarrito();
        } else {
            UIVenta.mostrarAlert('#add-venta-alert', 'Algo salió mal', 'alert-danger');
            document.querySelector('#nip-cliente').value = '';
            document.querySelector('#nip-instructor').value = '';
        }
    }

    function getVentasMes() {
        UIVenta.mostrarCarga();
        UIVenta.mostrarVentasEnTabla(new Venta().getVentasMes());
    }

    function getVentasDia() {
        UIVenta.mostrarCarga();
        UIVenta.mostrarVentasEnTabla(new Venta().getVentasDia());
    }

    function getVentasSemana() {
        UIVenta.mostrarCarga();
        UIVenta.mostrarVentasEnTabla(new Venta().getVentasSemana());
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
        setUpEditEventVenta();
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