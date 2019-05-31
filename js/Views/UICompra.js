var UICompra = (function () {

    
    return {
        mostrarCarga: function () {
            var spinner = '<div class="d-flex mt-3">' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
            document.querySelector('#cuerpo-tabla-compras').innerHTML = spinner;
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

        ocultarInputsProducto: function() {
            document.querySelectorAll('.compras-productos').forEach(element => {
                element.classList.add('d-none');
            })
        },

        mostrarInputsProducto: function() {
            document.querySelectorAll('.compras-productos').forEach(element => {
                element.classList.remove('d-none');
            })
        },

        ocultarInputsProductoExistentes: function() {
            document.querySelectorAll('.compras-productos-existentes').forEach(element => {
                element.classList.add('d-none');
            });
            document.querySelector('.descripcion').classList.remove('d-none');
        },

        mostrarInputsProductoExistentes: function() {
            document.querySelectorAll('.compras-productos-existentes').forEach(element => {
                element.classList.remove('d-none');
            });
            document.querySelector('.descripcion').classList.add('d-none');
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