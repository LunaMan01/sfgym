var UICliente = (function () {

    // function load(url, element) {
    //     req = new XMLHttpRequest();
    //     req.open("GET", url, false);
    //     req.send(null);
    //     element.innerHTML = req.responseText;
    // }

    // function isEmpty(string) {
    //     return (!string || 0 === string.length);
    // }

    function mostrarActivos() {
        var spinner = '<div class="d-flex mt-3">' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>' +
            '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
        document.querySelector('#cuerpo-tabla-clientes').innerHTML = spinner;
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/consultaActivos.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('opcion=' + 1);
        document.querySelector('#cuerpo-tabla-clientes').innerHTML = req.responseText
        
    }

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

        abrirModificarCliente: function () {
            load('html/clientes-components/editar-cliente.html', document.querySelector('.content'));
        },

        mostrarTodosLosClientes: function () {
            mostrarActivos();
        },

        mostrarActivos: function() {
            document.querySelector('#dropdown-clientes').textContent = 'Clientes activos';
            
            document.querySelectorAll('.dropdown .d-none').forEach(function(element){
                element.classList.remove('d-none');
            });
            mostrarActivos();
        },

        mostrarInactivos: function (res){ 
            document.querySelector('#dropdown-clientes').textContent = 'Clientes inactivos';
            
            document.querySelectorAll('.dropdown .d-none').forEach(function(element){
                element.classList.remove('d-none');
            });

            document.querySelector('#cuerpo-tabla-clientes').innerHTML = res;
        },

        mostrarActivosEInactivos: function(res) {
            document.querySelector('#dropdown-clientes').textContent = 'Todos los clientes';
            document.querySelectorAll('.dropdown .d-none').forEach(function(element){
                element.classList.remove('d-none');
            });
            document.querySelector('#cuerpo-tabla-clientes').innerHTML = res;
        },



        getDatosParaNuevoCliente: function () {
            let nombre = document.querySelector('#nombre').value;
            let apPaterno = document.querySelector('#ap-parno').value;
            let telefono = document.querySelector('#telefono').value;
            if(!telefonoValido(telefono.length)) {
                new Toast('#add-cliente-alert', 'Ingrese un telefono con 10 digitos', 2000, 'alert-danger').getAndShow();
                return false;
            }
                
            if (!isEmpty(nombre.trim()) && !isEmpty(apPaterno.trim())) {
                var form = document.querySelector('form');
                var data = new FormData(form);
                console.log('k');
                return data;
            } else {
                new Toast('#add-cliente-alert', 'Ingresa un nombre y un apellido paterno', 2000, 'alert-danger').getAndShow();
                return false;
            }

            
        },

        getDatosModificados: function () {
            let nombre = document.querySelector('#nombre').value;
            let apPaterno = document.querySelector('#ap-parno').value;
            let telefono = document.querySelector('#telefono').value;
            if(!telefonoValido(telefono.length)) {
                new Toast('#modificar-cliente-alert', 'Ingrese un telefono con 10 digitos', 2000, 'alert-danger').getAndShow();
                return false;
            }
            if (!isEmpty(nombre.trim()) && !isEmpty(apPaterno.trim())) {
                let data = UICliente.getDatosParaNuevoCliente();
                data.append('id', localStorage.getItem('id'));
                return data;
            }
            else {
                new Toast('#modificar-cliente-alert', 'Ingresa un nombre y un apellido paterno', 2000, 'alert-danger').getAndShow();
                return false;
            }
        },

        verCliente: function (cliente) {
            var vista = new VistaCliente(cliente.nombre, cliente.apPaterno, cliente.apMaterno, 
                cliente.edad, cliente.numero, 
                cliente.calle, cliente.numeroExterior, cliente.numeroInterior, cliente.colonia).render();
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

        getDatosABuscar: function() {
            return document.querySelector('#buscar-cliente-input').value;
        },

        mostrarDatosEncontrados: function(datos) {
            document.querySelector('#cuerpo-tabla-clientes').innerHTML = datos;
        },

        mostrarAnimacionBtn: function (btnSelector) {
            document.querySelector(btnSelector).innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Guardando...
    `;
        },

        regresarBtnAEstadoInicial : function (btnSelector) {
            document.querySelector(btnSelector).innerHTML = `Guardar`;
        },

        quitarRegistro: function () {
            tr.remove();
        },

        mostrarMensajeExito: function (idDivContainer, mensaje) {
            new Toast(idDivContainer, mensaje, 2000, 'alert-success').getAndShow();
        },

        abrirReportes: function() {
            load('html/clientes-components/reporte-clientes.html', document.querySelector('.content'));
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
            mostrarTodosLosClientes();
            clienteController.init();
        }

       
    }
})();