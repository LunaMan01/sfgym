// Contiene los meteodos para manipular la interfaz gráfica del modulo clientes
var UICliente = (function () {




    return {
        abrirAddCliente: function () {
            load('html/clientes-components/agregar-cliente.html', document.querySelector('.content'));
            document.querySelector('#add-cliente-btn').classList.add('d-none');
            document.querySelector('#reporte-cliente-btn').classList.add('d-none');
            document.querySelector('#buscar-cliente-input').classList.add('d-none');
        },

        getCliente: function () {
            var req = new XMLHttpRequest();
            req.open("POST", 'php/clientes/get-datos-cliente.php', false);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var params = 'id-cliente=' + localStorage.getItem('id');
            req.send(params);
            var elements = req.responseText;
            var cliente = JSON.parse(elements);
            return cliente;
        },

        setDatosClienteEnInputs: function (cliente) {
            if (cliente.genero == 1)
                document.querySelector('#gm-u').selected = true;
            else
                document.querySelector('#gf-u').selected = true;


            document.querySelector('#nombre').value = cliente.nombre;
            document.querySelector('#ap-parno').value = cliente.apPaterno;
            document.querySelector('#ap-marno').value = cliente.apMaterno;
            document.querySelector('#edad').value = cliente.edad;
            document.querySelector('#telefono').value = cliente.numero;
            document.querySelector('#calle').value = cliente.calle;
            document.querySelector('#num-ext').value = cliente.numeroInterior;
            document.querySelector('#num-int').value = cliente.numeroExterior;
            document.querySelector('#colonia').value = cliente.colonia;
        },

        mostrarCarga: function () {
            var spinner = '<div class="d-flex mt-3">' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
                '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
            document.querySelector('#cuerpo-tabla-clientes').innerHTML = spinner;
        },

        abrirModificarCliente: function () {
            load('html/clientes-components/editar-cliente.html', document.querySelector('.content'));
        },

        mostrarClientesEnTabla: function (res) {
            document.querySelector('#cuerpo-tabla-clientes').innerHTML = res;
        },





        getDatosParaNuevoCliente: function () {
            let nombre = document.querySelector('#nombre').value;
            let apPaterno = document.querySelector('#ap-parno').value;

            if (!isEmpty(nombre.trim()) && !isEmpty(apPaterno.trim())) {
                var form = document.querySelector('form');
                var data = new FormData(form);
                return data;
            } else {
                new Toast('#add-cliente-alert', 'Ingresa un nombre y un apellido paterno', 2000, 'alert-danger').getAndShow();
                return false;
            }


        },

        getDatosModificados: function () {
            let nombre = document.querySelector('#nombre').value;
            let apPaterno = document.querySelector('#ap-parno').value;

            if (!isEmpty(nombre.trim()) && !isEmpty(apPaterno.trim())) {
                let data = UICliente.getDatosParaNuevoCliente();
                data.append('id-cliente', localStorage.getItem('id'));
                return data;
            }
            else {
                new Toast('#modificar-cliente-alert', 'Ingresa un nombre y un apellido paterno', 2000, 'alert-danger').getAndShow();
                return false;
            }
        },

        verCliente: function (cliente) {
            let genero;

            console.log(cliente.genero);
            if (cliente.genero == 1)
                genero = 'Hombre';
            else
                genero = 'Mujer';
            var vista = new VistaCliente(cliente.nombre, cliente.apPaterno, cliente.apMaterno,
                cliente.edad, cliente.numero,
                cliente.calle, cliente.numeroExterior, cliente.numeroInterior, cliente.colonia, genero).render();
            document.querySelector('.content').innerHTML = vista;
        },

        getId: function (event) {
            var i = event.target;
            var td = i.parentNode;
            tr = td.parentNode;
            var elements = tr.childNodes;
            var th = elements[1];
            var id = th.getAttribute('id');
            localStorage.setItem('id', id);
        },

        getDatosABuscar: function () {
            return document.querySelector('#buscar-cliente-input').value;
        },

        mostrarDatosEncontrados: function (datos) {
            document.querySelector('#cuerpo-tabla-clientes').innerHTML = datos;
        },

        mostrarAnimacionBtn: function (btnSelector) {
            document.querySelector(btnSelector).innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Guardando...
    `;
        },

        regresarBtnAEstadoInicial: function (btnSelector) {
            document.querySelector(btnSelector).innerHTML = `Guardar`;
        },

        quitarRegistro: function () {
            tr.remove();
        },

        mostrarAlert: function (idDivContainer, mensaje, type) {
            new Toast(idDivContainer, mensaje, 2000, type).getAndShow();
        },

        abrirReportes: function () {
            load('html/clientes-components/reporte-clientes.html', document.querySelector('.content'));
        },

        getDatosParaReporte: function () {
            var form = document.querySelector('#reporte-clientes-form');
            var data = new FormData(form);

            data.append('fecha', document.querySelector('#rango-fecha').value);
            console.log(document.querySelector('#rango-fecha').value);
            return data;
        },

        mostrarReporte: function (req) {
            document.querySelector('.reporte-generado').classList.remove('d-none');
            document.querySelector('.panel-reportes').classList.add('d-none');

            document.querySelector(".reporte-generado").innerHTML = req;
            return req;
        },

        regresar: function () {
            if (document.querySelector('#add-cliente-btn').classList.contains('d-none')) {
                document.querySelector('#add-cliente-btn').classList.remove('d-none');
            }
            if (document.querySelector('#reporte-cliente-btn').classList.contains('d-none')) {
                document.querySelector('#reporte-cliente-btn').classList.remove('d-none');
            }
            if (document.querySelector('#buscar-cliente-input').classList.contains('d-none')) {
                document.querySelector('#buscar-cliente-input').classList.remove('d-none');
            }
            load('html/clientes-components/clientes.html', document.querySelector('.content'));

            clienteController.init();
        }


    }
})();