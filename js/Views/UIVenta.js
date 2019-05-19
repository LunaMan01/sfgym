var UIVenta = (function () {

    function agregarProductosASelector (productosJSON) {
        productosJSON.forEach(element => {
            let producto = `<option data-precio="${element.precioProducto}" id="${element.idProducto}">${element.descripcionProducto}</option>`
            document.querySelector('#select-productos').innerHTML += producto;

            
        });
    }

    return {

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

        abrirEditVenta : function (){
            load('html/ventas-components/editar-venta.html', document.querySelector('.content'));
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/getProductosVentas.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(null);
            let productosJSON = req.responseText;
            let productos = JSON.parse(productosJSON);
            agregarProductosASelector(productos);

            
        },

        mostrarCarga : function () {
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
                    <td scope="row" class="carrito" id="${productoId}" 
                    data-cantidad="${cantidad}"
                    data-subtotal = "${subtotal}"
                    >${productoId}</th>
                    <td>${producto}</td>
                    <td class="subtotales">${subtotal}</td>
                    <td data-precio = "${precio}">${cantidad}</td>
                    <td>
                <i class="material-icons actions edit-action mr-2" data-toggle="modal" href="#modificar-cantidad-producto-modal"> create</i>
                <i class="material-icons actions delete-action mr-2" data-toggle="modal" href="#eliminar-membresia-modal"> delete</i> </td>
                </tr>
            `;

            document.querySelector('#carrito').innerHTML += productoTr;

            let subtotales = document.querySelectorAll('.subtotales');

            let total = 0;
            subtotales.forEach(element => {
                
                total += parseInt(element.innerHTML,10);
            });

            document.querySelector('#total-venta').value = total;
            console.log(total);
            
            
        },

        getCantidadTd: function (event) {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[6];
            console.log(th);
            return th;
        },

        getSubtotalTd : function () {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[4];
            console.log(th);
            return th;
        },

        getProductoEnCarritoId : function (){
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            console.log(th);
            var id = th.getAttribute('id');
            console.log(id);
            localStorage.setItem('id', id);
        },

        quitarRegistroDeCarrito: function () {
            tr.remove();
            let subtotales = document.querySelectorAll('.subtotales');

            let total = 0;
            subtotales.forEach(element => {
                
                total += parseInt(element.innerHTML,10);
            });

            document.querySelector('#total-venta').value = total;
        },

        limpiarCarrito : function () {
            document.querySelector('#carrito').innerHTML = '';
        },

        getCantidad : function () {
            return document.querySelector('#cantidad-productos').value;
        },

        mostrarVentasEnTabla : function (ventas){
            document.querySelector('#cuerpo-tabla-ventas').innerHTML = ventas;
        },

        abrirReportes: function () {
            load('html/ventas-components/reporte-ventas.html', document.querySelector('.content'));
        },

        mostrarAlert: function (container, mensaje, type) {
            new Toast(container, mensaje, 2000, type).getAndShow();

        },

        modificarProductoEnCarrito : function (cantidadTd, subtotalTd, cantidad, precio) {
            let subtotal = precio * cantidad;

            cantidadTd.innerHTML = cantidad;
            subtotalTd.innerHTML = subtotal;

            let subtotales = document.querySelectorAll('.subtotales');

            let total = 0;
            subtotales.forEach(element => {
                
                total += parseInt(element.innerHTML,10);
            });

            document.querySelector('#total-venta').value = total;
        },


        esconderModal: function (modal) {
            $(modal).modal('hide');
        },
    }
})();