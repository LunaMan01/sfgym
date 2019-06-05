var UICompra = (function () {

    
    return {
        mostrarCarga: function () {
            var spinner = '<div class="d-flex mt-3">' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
            document.querySelector('#cuerpo-tabla-compras').innerHTML = spinner;
        },


        abrirAddCompra : function () {
            load('html/compras-components/agregar-compra.html', document.querySelector('.content'));
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/getProductosVentas.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(null);

        },

        agregarProductosASelectorExistentes : function () {
        
            var req = new XMLHttpRequest();
            req.open("POST", 'php/productos/productosExistentes.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(null);


            let productosJSON = req.responseText;


            console.log(productosJSON);

            let productos = JSON.parse(productosJSON);

            productos.forEach(element => {
                let producto = `<option data-precio="${element.precioProducto}" id="${element.idProducto}" data-existencia="${element.existencia}">${element.descripcionProducto}</option>`
                document.querySelector('#select-productos-existentes').innerHTML += producto;
    
    
            });
        },

        mostrarInputsProductosNuevos : function () {
            document.querySelector('#inputs-productos-nuevos').classList.remove('d-none');

        },

        esconderInputsProductosNuevos : function () {
            document.querySelector('#inputs-productos-nuevos').classList.add('d-none');

        },

        mostrarInputsProductosExistentes : function () {
            document.querySelector('#inputs-productos-existentes').classList.remove('d-none');
           
        },

        ocultarInputsProductosExistentes : function () {
            document.querySelector('#inputs-productos-existentes').classList.add('d-none');
           
        },

        mostrarInputsAparatos : function () {
            document.querySelector('#inputs-aparato').classList.remove('d-none');
            document.querySelector('#productos-carrito-container').classList.add('d-none');

            document.querySelector('#aparatos-carrito-container').classList.remove('d-none');
            console.log('mostrarinputsaparatos');
        },

        ocultarInputsAparatos : function () {
            document.querySelector('#inputs-aparato').classList.add('d-none');
          
        },

        mostrarCarritoProductos : function (){
            document.querySelector('#productos-carrito-container').classList.remove('d-none');

            document.querySelector('#aparatos-carrito-container').classList.add('d-none');
        },

        mostrarTipoProducto : function () {
            document.querySelector('#tipo-productos').classList.remove('d-none');
        },

        agregarProductoACarrito : function (producto, cantidad, precioVenta,caducidad, subtotal, tipo, count, id) {
            let productoTr = `
                <tr>
                    <th scope="row" class="p-nuevo" id="${id}" data-tipo="${tipo}" data-precioventa="${precioVenta}" data-cantidad="${cantidad}" data-fechacaducidad="${caducidad}" data-subtotal = "${subtotal}" data-desc="${producto}">${count}</th>
                    <td>${producto}</td>
                    <td class="text-right">${cantidad}</td>
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

            document.querySelector('#total-compra').value = total;
        },


        ocultarTipoProducto : function () {
            document.querySelector('#tipo-productos').classList.add('d-none');
        },

       

        getDatosParaNuevaCompra: function () {
            let form = document.querySelector('#add-compra-form');
            let data = new FormData(form);
            return data;
        },

        getId: function (event) {
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

        quitarRegistro: function () {
            tr.remove();
        },

        mostrarAlert: function (mensaje, type) {
            new Toast('#alert-compras', mensaje, 2000, type).getAndShow();

        },

       
      
      

        getCompra: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/compras/get-datos-compra.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-compra=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            console.log(req.responseText);
            var compra = JSON.parse(elements);
            return compra;
        },

        setDatosCompraEnInputs: function (compra) {
            document.querySelector('#modificar-compra-form #id-compra').value = compra.idCompra;
            document.querySelector('#modificar-compra-form #id-instructor').value = compra.idInstructor;
            document.querySelector('#modificar-compra-form #descripcion-producto').value = compra.descripcionCompra;
            

            document.querySelector('#modificar-compra-form #monto-compra').value = compra.montoCompra;
            // document.querySelector('#modificar-compra-form #fecha-compra-update').value = compra.fechaCompra;


        },

        getDatosModificados: function () {
            let form = document.querySelector('#modificar-compra-form');
            let data = new FormData(form);
            data.append('id-compra', localStorage.getItem('id'));
            return data;
        },

        verCompra: function (compra) {
            document.querySelector('#ver-compra-form #id-compra').innerHTML = compra.idCompra;
            document.querySelector('#ver-compra-form #id-instructor').innerHTML = compra.idInstructor;
            document.querySelector('#ver-compra-form #descripcion-producto').innerHTML = compra.descripcionCompra;
            if(compra.tipoCompra == 1) {
                document.querySelector('#ver-compra-form #tipo-compra').innerHTML = 'Productos';
            }
            else if(compra.tipoCompra == 2) {
                document.querySelector('#ver-compra-form #tipo-compra').innerHTML = 'Aparatos';
            }
            else if(compra.tipoCompra == 3) {
                document.querySelector('#ver-compra-form #tipo-compra').innerHTML = 'Otros';
            }
            
            document.querySelector('#ver-compra-form #monto-compra').innerHTML = compra.montoCompra;
            document.querySelector('#ver-compra-form #fecha-compra').innerHTML = compra.fechaCompra;


        },

        mostrarComprasEnTabla: function (datos) {
            document.querySelector('#cuerpo-tabla-compras').innerHTML = datos;
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-compra-input').value;
        },

        esconderModal: function (modal) {
            $(modal).modal('hide');
        },


        abrirReportes: function () {
            load('html/compras-components/reporte-compras.html', document.querySelector('.content'));
        },

        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-compras-form');
            var data = new FormData(form);

            data.append('fecha', document.querySelector('#fecha-rango-reporte').value);
            // console.log(document.querySelector('#rango-fecha').value);
            return data;
        },

        mostrarReporte: function (req) {
            document.querySelector('.reporte-generado').classList.remove('d-none');
            document.querySelector('.panel-reportes').classList.add('d-none');

            document.querySelector(".reporte-generado").innerHTML = req;
        },
    }
})();