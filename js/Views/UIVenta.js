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

            // document.querySelector('#select-productos').innerHTML = req.responseText;
            let productosJSON = req.responseText;
            // let productos = JSON.parse(productosJSON);

            console.log(productosJSON);

            let productos = JSON.parse(productosJSON);

            agregarProductosASelector(productos);

        },

        agregarProductoACarrito: function (producto, cantidad, precio, productoId) {
            let subtotal = precio * cantidad;
            let productoTr = `
                <tr>
                    <td scope="row" id="${productoId}">${productoId}</th>
                    <td>${producto}</td>
                    <td class="subtotales">${subtotal}</td>
                    <td>${cantidad}</td>
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

        getCantidad : function () {
            return document.querySelector('#cantidad-productos').value;
        },

        abrirReportes: function () {
            load('html/ventas-components/reporte-ventas.html', document.querySelector('.content'));
        },
    }
})();