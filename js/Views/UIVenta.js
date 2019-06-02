var UIVenta = (function () {

    function agregarProductosASelector(productosJSON) {
        productosJSON.forEach(element => {
            let producto = `<option data-precio="${element.precioProducto}" id="${element.idProducto}" data-existencia="${element.existencia}">${element.descripcionProducto}</option>`
            document.querySelector('#select-productos').innerHTML += producto;


        });
    }

    return {

        regresar: function () {
            load('html/ventas-components/ventas.html', document.querySelector('.content'));

            ventaController.init();
           
        },

        abrirAddVenta: function () {
            load('html/ventas-components/agregar-venta.html', document.querySelector('.content'));
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/getProductosVentas.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(null);


            let productosJSON = req.responseText;


            console.log(productosJSON);

            let productos = JSON.parse(productosJSON);

            agregarProductosASelector(productos);

        },

        abrirEditVenta: function () {
            load('html/ventas-components/editar-venta.html', document.querySelector('.content'));
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/getProductosVentas.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(null);
            let productosJSON = req.responseText;
            let productos = JSON.parse(productosJSON);
            agregarProductosASelector(productos);


        },

        mostrarCarga: function () {
            var spinner = '<div class="d-flex mt-3">' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
            document.querySelector('#cuerpo-tabla-ventas').innerHTML = spinner;
        },

        agregarProductoACarrito: function (producto, cantidad, precio, productoId) {
            let subtotal = precio * cantidad;
            let productoTr = `
                <tr>
                    <th scope="row" class="carrito" id="${productoId}" data-cantidad="${cantidad}" data-subtotal = "${subtotal}"
                    >${productoId}</th>
                    <td>${producto}</td>
                    <td class="text-right" data-precio = "${precio}">${cantidad}</td>
                    <td class="subtotales text-right">${subtotal}</td>
                    <td class="text-right">
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-cantidad-producto-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-membresia-modal"> delete</i> </td>
                </tr>
            `;

            document.querySelector('#carrito').innerHTML += productoTr;

            let subtotales = document.querySelectorAll('.subtotales');

            let total = 0;
            subtotales.forEach(element => {

                total += parseInt(element.innerHTML, 10);
            });

            document.querySelector('#total-venta').value = total;
            console.log(total);


        },

        getId: function (event) {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            var id = th.getAttribute('id');
            console.log('id==' + id);
            return id;
        },

        getTipoVenta : function (event) {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            var tipo = th.getAttribute('data-tipo');
            console.log('id==' + tipo);
            return tipo;
        },
         
        setDatosVentaEnInputs: function (venta) {
            document.querySelector('#nip-cliente').value = venta.idCliente;
            document.querySelector('#nip-instructor').value = venta.idInstructor;
            document.querySelector('#total-venta').value = venta.totalVenta;
        },

        setProductosEnTabla: function (productos) {
            document.querySelector('#carrito').innerHTML = productos;
        },

        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-ventas-form');
            var data = new FormData(form);

            data.append('fecha', document.querySelector('#fecha-rango-reporte').value);
            
            return data;
        },



        verVenta: function (venta) {
            console.log('idc-' + venta.totalVenta);
            document.querySelector('#nip-cliente').innerHTML = venta.idCliente;
            document.querySelector('#nip-instructor').innerHTML = venta.idInstructor;
            document.querySelector('#total-venta').value = venta.totalVenta;
        },

        verVentaMembresias : function (venta) {
            document.querySelector('#id-cliente').innerHTML = venta.idCliente;
            // document.querySelector('#ni-instructor').innerHTML = venta.idInstructor;
            document.querySelector('#cliente-name').innerHTML = venta.nombreCliente;
            document.querySelector('#total-venta').value = venta.totalVenta;
            document.querySelector('#id-membresias').innerHTML = venta.idMembresia;
            document.querySelector('#fecha-inicio').innerHTML = venta.fechaInicio;
            document.querySelector('#fecha-fin').innerHTML = venta.fechaFin;
        },

        verVentaVisitas : function (venta) {
            document.querySelector('#id-cliente').innerHTML = venta.idCliente;
            // document.querySelector('#ni-instructor').innerHTML = venta.idInstructor;
            document.querySelector('#cliente-name').innerHTML = venta.nombreCliente;
            document.querySelector('#total-venta').value = venta.totalVenta;
            document.querySelector('#fecha-visita').innerHTML = venta.fechaVisita;
            
        },

        mostrarReporte: function (req) {
            document.querySelector('.reporte-generado').classList.remove('d-none');
            document.querySelector('.panel-reportes').classList.add('d-none');

            document.querySelector(".reporte-generado").innerHTML = req;
            return req;
        },

        mostrarInputsProductos : function (){
            console.log('d');
            document.querySelectorAll('.type-producto').forEach(element => {
                element.classList.remove('d-none');
            })
        },

        ocultarInputsProductos : function (){
            console.log('d');
            document.querySelectorAll('.type-producto').forEach(element => {
                element.classList.add('d-none');
            })
        },

        mostrarInputsMembresias : function (){
            console.log('d');
            document.querySelectorAll('.type-membresia').forEach(element => {
                element.classList.remove('d-none');
            })
        },

        ocultarInputsMembresias : function (){
            
            document.querySelectorAll('.type-membresia').forEach(element => {
                element.classList.add('d-none');
            })
        },

        mostrarInputsVisitas : function (){
            console.log('d');
            document.querySelectorAll('.type-visita').forEach(element => {
                element.classList.remove('d-none');
            })
        },

        ocultarInputsVisitas : function (){
            console.log('d');
            document.querySelectorAll('.type-visita').forEach(element => {
                element.classList.add('d-none');
            })
        },

        getCantidadTd: function (event) {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[5];
            console.log(th);
            return th;
        },

        getCantidadTdDetalle: function (event) {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[3];
            console.log(th);
            return th;
        },


        getSubtotalTd: function () {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[7];
            console.log(th);
            return th;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-venta-input').value;
        },

        getSubtotalTdDetalle: function () {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[4];
            console.log(th);
            return th;
        },

        getTh: function () {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            console.log(th);
            return th;
        },

        getProductoEnCarritoId: function () {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            console.log(th);
            var id = th.getAttribute('id');
            console.log(id);
            localStorage.setItem('id', id);
            return id;
        },

        getCantidadesEnCarritoTd: function () {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            console.log(th);
            var cantidad = th.getAttribute('data-cantidad');

            return cantidad;
        },

        quitarRegistroDeCarrito: function () {
            tr.remove();
            let subtotales = document.querySelectorAll('.subtotales');

            let total = 0;
            subtotales.forEach(element => {

                total += parseInt(element.innerHTML, 10);
            });

            document.querySelector('#total-venta').value = total;
        },

        quitarRegistro: function () {
            tr.remove();
        },

        limpiarCarrito: function () {
            document.querySelector('#carrito').innerHTML = '';
        },

        getCantidad: function () {
            return document.querySelector('#cantidad-productos').value;
        },

        mostrarVentasEnTabla: function (ventas) {
            document.querySelector('#cuerpo-tabla-ventas').innerHTML = ventas;
        },

        abrirReportes: function () {
            load('html/ventas-components/reporte-ventas.html', document.querySelector('.content'));
        },

        abrirVista: function () {
            load('html/ventas-components/vista-ventas.html', document.querySelector('.content'));
        },

        abrirVistaMembresias : function () {
            load('html/ventas-components/vista-ventas-membresias.html', document.querySelector('.content'));
        },

        abrirVistaVisitas : function () {
            load('html/ventas-components/vista-ventas-visitas.html', document.querySelector('.content'));
        },


        mostrarAlert: function (container, mensaje, type) {
            new Toast(container, mensaje, 2000, type).getAndShow();

        },

        modificarProductoEnCarrito: function (cantidadTd, subtotalTd, cantidad, precio) {
            let subtotal = precio * cantidad;

            cantidadTd.innerHTML = cantidad;
            subtotalTd.innerHTML = subtotal;
            console.log(cantidadTd);
            let subtotales = document.querySelectorAll('.subtotales');

            let total = 0;
            subtotales.forEach(element => {

                total += parseInt(element.innerHTML, 10);
            });

            document.querySelector('#total-venta').value = total;
        },



        esconderModal: function (modal) {
            $(modal).modal('hide');
        },
    }
})();