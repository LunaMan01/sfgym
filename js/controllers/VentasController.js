var ventaController = (function () {

    var cantidadTd;
    var precioProducto;
    var subtotalTd;
    var id;

    var productosEliminadosDeCarrito = new Array();

    function setUpEditEvent() {
        document.querySelector('#carrito').addEventListener('click', function (e) {

            if (e.target.matches('.detalle')) {
                console.log('hara');
                cantidadTd = UIVenta.getCantidadTdDetalle(e);
                subtotalTd = UIVenta.getSubtotalTdDetalle(e);
                precioProducto = cantidadTd.getAttribute('data-precio');
                return;
            }
            if (e.target.matches('.edit-action')) {
                console.log('here');
                cantidadTd = UIVenta.getCantidadTd(e);
                subtotalTd = UIVenta.getSubtotalTd(e);
                precioProducto = cantidadTd.getAttribute('data-precio');

            }

        }, false);
    }


    function setUpWatchEvent() {
        document.querySelector('#cuerpo-tabla-ventas').addEventListener('click', function (e) {

            if (e.target.matches('.watch-action')) {
                UIVenta.abrirVista();
                id = UIVenta.getId(e);
                let venta = new Venta().getVenta(id);
                UIVenta.setProductosEnTabla(new Venta().getDetalleVenta(id));
                UIVenta.verVenta(venta);



            }


        }, false);
    }




    function modificarCantidad() {
        let nuevaCantidad = document.querySelector('#nueva-cantidad').value;

        UIVenta.modificarProductoEnCarrito(cantidadTd, subtotalTd, nuevaCantidad, precioProducto);

        UIVenta.esconderModal('#modificar-cantidad-producto-modal');
    }

    function setUpDeleteEvent() {
        document.querySelector('#carrito').addEventListener('click', function (e) {

            if (e.target.matches('.delete-action')) {
                let ids = new Object();
                let idCar = UIVenta.getProductoEnCarritoId();
                ids.id = idCar;
                productosEliminadosDeCarrito.push(ids);
                UIVenta.quitarRegistroDeCarrito();
            }
        }, false);

    }


    //Para modificar
    function setUpEditEventVenta() {
        document.querySelector('.modal-container').innerHTML = nuevaVentaModals;
        document.querySelector('#cuerpo-tabla-ventas').addEventListener('click', function (e) {

            if (e.target.matches('.edit-venta')) {
                setUpVentanaEditar();
                id = UIVenta.getId(e);
                let venta = new Venta().getVenta(id);
                UIVenta.setDatosVentaEnInputs(venta);
                UIVenta.setProductosEnTabla(new Venta().getDetalleVenta(id));
            }

        }, false);


    }

    function setUpVentanaEditar() {
        document.querySelector('.modal-container').innerHTML = nuevaVentaModals;
        UIVenta.abrirEditVenta();

        document.querySelector('#agregar-producto-seleccionado').addEventListener('click', () => {

            var selector = document.getElementById("select-productos");





            let producto = document.getElementById('select-productos').value;
            let precio = selector.options[selector.selectedIndex].getAttribute('data-precio');
            let id = selector.options[selector.selectedIndex].getAttribute('id');
            let cantidad = UIVenta.getCantidad();
            if (cantidad == 0) {
                UIVenta.mostrarAlert('#add-venta-alert', 'Añade una cantidad', 'alert-danger');
                return;
            }

            UIVenta.agregarProductoACarrito(producto, cantidad, precio, id);
        });



        document.querySelector('#add-venta-form').addEventListener('submit', modificarVenta);

        setUpEditEvent();
        setUpDeleteEvent();
        document.querySelector('#modificar-cantidad-form').addEventListener('submit', modificarCantidad);
    }

    function modificarVenta() {
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
        let carrito = document.querySelectorAll('.carrito-u');


        let productosEnCarrito = new Array();
        carrito.forEach(element => {
            let producto = new Object();
            producto.id = element.getAttribute('id');
            console.log(producto.id);
            producto.cantidad = element.getAttribute('data-cantidad');
            producto.subtotal = element.getAttribute('data-subtotal');
            productosEnCarrito.push(producto);
        });

        let carritoNuevo = document.querySelectorAll('.carrito');
        let productosNuevosEnCarrito = new Array();

        carritoNuevo.forEach(element => {
            let producto = new Object();
            producto.id = element.getAttribute('id');
            producto.cantidad = element.getAttribute('data-cantidad');
            producto.subtotal = element.getAttribute('data-subtotal');
            productosNuevosEnCarrito.push(producto);
        });


        if (productosEnCarrito.length == 0 && carritoNuevo.length == 0) {
            UIVenta.mostrarAlert('#add-venta-alert', 'Añade al menos un producto a la venta', 'alert-danger');
            return;
        }



        if (new Venta().modificar(venta, productosEnCarrito, productosNuevosEnCarrito, productosEliminadosDeCarrito, id)) {
            UIVenta.mostrarAlert('#add-venta-alert', 'Venta modificada exitosamente', 'alert-success');


        } else {
            UIVenta.mostrarAlert('#add-venta-alert', 'Algo salió mal', 'alert-danger');
            document.querySelector('#nip-cliente').value = '';
            document.querySelector('#nip-instructor').value = '';
        }
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
            if (cantidad == 0) {
                UIVenta.mostrarAlert('#add-venta-alert', 'Añade una cantidad', 'alert-danger');
                return;
            }

            UIVenta.agregarProductoACarrito(producto, cantidad, precio, id);
        });



        document.querySelector('#add-venta-form').addEventListener('submit', guardarVenta);
        setUpEditEvent();
        setUpDeleteEvent();
        document.querySelector('#modificar-cantidad-form').addEventListener('submit', modificarCantidad);
    }



    function setUpEliminarEvent() {
        document.querySelector('#cuerpo-tabla-ventas').addEventListener('click', function (e) {

            if (e.target.matches('.delete-venta')) {
                id = UIVenta.getId(e);
            }
        }, false);

    }

    function eliminarVenta() {
        let venta = new Venta();

        if (venta.eliminar(id)) {
            UIVenta.mostrarAlert('#alert-ventas', 'Venta eliminada correctamente', 'alert-success');
            UIVenta.quitarRegistro();
        } else {
            UIVenta.mostrarAlert('#alert-ventas', 'Algo salió mal', 'alert-danger');
        }
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

        if (new Venta().add(venta, productosEnCarrito)) {
            UIVenta.mostrarAlert('#add-venta-alert', 'Venta realizada exitosamente', 'alert-success');
            document.querySelector('#add-venta-form').reset();
            UIVenta.limpiarCarrito();
        } else {
            UIVenta.mostrarAlert('#add-venta-alert', 'Algo salió mal', 'alert-danger');
            document.querySelector('#nip-cliente').value = '';
            document.querySelector('#nip-instructor').value = '';
        }
    }

    function getTodasLasVentas() {
        UIVenta.mostrarCarga();
        UIVenta.mostrarVentasEnTabla(new Venta().getVentasTodas());
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


    function busquedaDinamica () {
        let opcionSelect;
        let todasLasVentas = document.querySelector('#ventas-todas');
        let ventasDia = document.querySelector('#ventas-dia');
        let ventasMes = document.querySelector('#ventas-mensuales');
        let ventasSemana = document.querySelector('#ventas-semanales');

        if (ventasDia.selected)
            opcionSelect = 1;
        else if (ventasMes.selected)
            opcionSelect = 2;
        else if (ventasSemana.selected)
            opcionSelect = 3;
        else if (todasLasVentas.selected)
            opcionSelect = 4;

        let dato = UIVenta.getDatosABuscar();
        let venta = new Venta();
        UIVenta.mostrarVentasEnTabla(venta.consultar(dato, opcionSelect));
    }

    function cambiarVista() {
        let todasLasVentas = document.querySelector('#ventas-todas');
        let ventasDia = document.querySelector('#ventas-dia');
        let ventasMes = document.querySelector('#ventas-mensuales');
        let ventasSemana = document.querySelector('#ventas-semanales');

        if (ventasDia.selected)
            getVentasDia();
        else if (ventasMes.selected)
            getVentasMes();
        else if (ventasSemana.selected)
            getVentasSemana();
        else if (todasLasVentas.selected)
            getTodasLasVentas();
    }

    function setUpEvents() {
        setUpEliminarEvent();
        getTodasLasVentas();
        setUpWatchEvent();
        setUpEditEventVenta();
        document.querySelector('#add-venta-btn').addEventListener('click', setUpNuevaVenta);
        document.querySelector('#reporte-venta-btn').addEventListener('click', UIVenta.abrirReportes);
        document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarVenta);

        document.querySelector('#select-ventas').addEventListener('change', cambiarVista);

        document.querySelector('#buscar-venta-input').addEventListener('keyup', busquedaDinamica);
    }

    return {
        init: function () {
            setUpEvents();

        }
    }
})(UIVenta);
ventaController.init();