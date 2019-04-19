const Links = {
    inicio: '#inicio-link',
    clientes: '#clientes-link',
    membresias: '#membresias-link',
    visitas: '#visitas-link',
    ventas: '#ventas-link',
    productos: '#productos-link',
    gastos: '#gastos-link',
    aparatos: '#aparatos-link',
    compras: '#compras-link',
    reportes: '#reportes-link',
    respaldos: '#respaldos-link'
}
const Li = {
    clientes: '#li-clientes',
    inicio: '#li-inicio',
    membresias: '#li-membresias',
    visitas: '#li-visitas',
    ventas: '#li-ventas',
    productos: '#li-productos',
    gastos: '#li-gastos',
    aparatos: '#li-aparatos',
    compras: '#li-compras',
    reportes: '#li-reportes',
    respaldos: '#li-respaldos'
}

const CSSClasses = {
    active: '.active',
    content: '.content'
}

const divAdicional = document.querySelector('#elementos-adicionales');
const content = document.querySelector('.content');

var menuController = (function () {

}());




var UIController = (function () {

    function limpiarDivAdicional() {
        divAdicional.innerHTML = '';
        console.log('lim');
    }

    function addBotones(nombreBtnAdd, nombreBtnReporte, idBtnAdd, idBtnReporte, idSearchInput) {
        if (document.getElementById(idBtnAdd) == null)
            divAdicional.innerHTML += new Button(nombreBtnAdd, idBtnAdd).getButton();
        divAdicional.innerHTML += new Button(nombreBtnReporte, idBtnReporte).getButton();
        divAdicional.innerHTML += new SearchInput(idSearchInput).getSearchInput();

    }


    function addScriptsClientes() {
        if (document.getElementById('clientes-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/ClientesController.js');
            script.setAttribute('id', 'clientes-script');
            document.head.appendChild(script);
        }
    }

    function addScriptsMembresias() {
        if (document.getElementById('membresias-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/MembresiasController.js');
            script.setAttribute('id', 'membresias-script');
            document.head.appendChild(script);
        }
    }

    function addScriptsVisitas() {
        if (document.getElementById('visitas-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/VisitasController.js');
            script.setAttribute('id', 'visitas-script');
            document.head.appendChild(script);
        }
    }

    function addScriptsVentas() {
        if (document.getElementById('ventas-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/VentasController.js');
            script.setAttribute('id', 'ventas-script');
            document.head.appendChild(script);
        }
    }

    function addScriptsProductos() {
        if (document.getElementById('productos-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/ProductosController.js');
            script.setAttribute('id', 'productos-script');
            document.head.appendChild(script);
        }
    }

    function addScriptsGastos() {
        if (document.getElementById('gastos-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/GastosController.js');
            script.setAttribute('id', 'gastos-script');
            document.head.appendChild(script);
        }
    }

    function addScriptsCompras() {
        if (document.getElementById('compras-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/ComprasController.js');
            script.setAttribute('id', 'compras-script');
            document.head.appendChild(script);
        }
    }


    return {


        abrirInicio: function () {
            console.log('Abriendo inicio');
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.inicio).className = 'active';
            load('html/inicio.html', content);
        },

        abrirClientes: function () {
            console.log('Abriendo Clientes');
            document.querySelector('.modal-container').innerHTML = modalCliente;
            addScriptsClientes();
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.clientes).className = 'active';
            load('html/clientes-components/clientes.html', content);
            addBotones('Añadir cliente', 'Reporte clientes', 'add-cliente-btn', 'reporte-cliente-btn', 'buscar-cliente-input');
            if (typeof clienteController !== 'undefined')
                clienteController.init();
        },


        abrirMembresias: function () {
            document.querySelector('.modal-container').innerHTML = modalsMembresias;
            addScriptsMembresias();
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.membresias).className = 'active';
            load('html/membresias-components/membresias.html', content);
            addBotones('Añadir membresía', 'Reporte membresía', 'add-membresia-btn', 'reporte-membresia-btn', 'buscar-membresia-input');
            document.querySelector('#add-membresia-btn').setAttribute('data-target', '#add-membresia-modal');
            document.querySelector('#add-membresia-btn').setAttribute('data-toggle', 'modal');
            if (typeof membresiaController !== 'undefined')
                membresiaController.init();
        },

        abrirVisitas: function () {
            document.querySelector('.modal-container').innerHTML = modalsVisitas;
            addScriptsVisitas();
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.visitas).className = 'active';
            load('html/visitas-components/visitas.html', content);
            addBotones('Añadir visita', 'Reporte visitas', 'add-visita-btn', 'reporte-visita-btn', 'buscar-visita-input');
            document.querySelector('#add-visita-btn').setAttribute('data-target', '#add-visita-modal');
            document.querySelector('#add-visita-btn').setAttribute('data-toggle', 'modal');
            if (typeof visitaController !== 'undefined')
                visitaController.init();
        },

        abrirProductos: function () {
            limpiarDivAdicional();
            addScriptsProductos();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.productos).className = 'active';
            load('html/productos-components/productos.html', content);
            addBotones('Añadir producto', 'Reporte productos', 'add-producto-btn', 'reporte-producto-btn', 'buscar-producto-input');
            if (typeof productoController !== 'undefined')
                productoController.init();
        },

        abrirVentas: function () {
            limpiarDivAdicional();
            addScriptsVentas();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.ventas).className = 'active';
            load('html/ventas-components/ventas.html', content);
            addBotones('Añadir venta', 'Reporte ventas', 'add-venta-btn', 'reporte-venta-btn', 'buscar-venta-input');
            if (typeof ventaController !== 'undefined')
                ventaController.init();
        },

        abrirGastos: function () {
            limpiarDivAdicional();
            addScriptsGastos();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.gastos).className = 'active';
            load('html/gastos-components/gastos.html', content);
            addBotones('Añadir gasto', 'Reporte gastos', 'add-gasto-btn', 'reporte-gasto-btn', 'buscar-gasto-input');
            if (typeof gastoController !== 'undefined')
                gastoController.init();
        },

        abrirAparatos: function () {
            limpiarDivAdicional();

            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.aparatos).className = 'active';
            load('html/aparatos-components/aparatos.html', content);
            addBotones('Añadir aparato', '', 'add-aparato-btn', 'reporte-aparato-btn', 'buscar-aparato-input');
            document.querySelector('#reporte-aparato-btn').remove();
        },

        abrirCompras: function () {
            limpiarDivAdicional();
            addScriptsCompras();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.compras).className = 'active';
            load('html/compras-components/compras.html', content);
            addBotones('Añadir compras', 'Reporte compras', 'add-compra-btn', 'reporte-compra-btn', 'buscar-compra-input');
            if (typeof compraController !== 'undefined')
                compraController.init();
        },

        abrirReportes: function () {
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.reportes).className = 'active';
            load('html/reportes-components/reportes.html', content);

        },

        abrirRespaldo: function () {
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.respaldos).className = 'active';
            load('html/respaldos-components/respaldos.html', content);

        }





    }

}());


var controller = (function (UI) {
    var abrirInicio = UI.abrirInicio;
    var abrirClientes = UI.abrirClientes;
    var abrirMembresias = UI.abrirMembresias;

    document.querySelector(Links.inicio).addEventListener('click', abrirInicio);
    document.querySelector(Links.clientes).addEventListener('click', abrirClientes);
    document.querySelector(Links.membresias).addEventListener('click', abrirMembresias);
    document.querySelector(Links.visitas).addEventListener('click', UI.abrirVisitas);
    document.querySelector(Links.ventas).addEventListener('click', UI.abrirVentas);
    document.querySelector(Links.productos).addEventListener('click', UI.abrirProductos);
    document.querySelector(Links.gastos).addEventListener('click', UI.abrirGastos);
    document.querySelector(Links.aparatos).addEventListener('click', UI.abrirAparatos);
    document.querySelector(Links.compras).addEventListener('click', UI.abrirCompras);
    document.querySelector(Links.reportes).addEventListener('click', UI.abrirReportes);
    document.querySelector(Links.respaldos).addEventListener('click', UI.abrirRespaldo);


    UI.abrirInicio();
}(UIController));




function addScriptsClientes() {
    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // if (document.getElementById('eliminar-clientes-script') == null) {
    //     let scriptEliminarCliente = document.createElement('script');
    //     scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    //     scriptEliminarCliente.setAttribute('id', 'eliminar-clientes-script');
    //     document.head.appendChild(scriptEliminarCliente);

    // }

    // if (document.getElementById('bucar-cliente-dinamico-script') == null) {
    //     let scriptBuscar = document.createElement('script');
    //     scriptBuscar.setAttribute('id', 'bucar-cliente-dinamico-script');
    //     scriptBuscar.setAttribute('src', 'js/clientes/consulta-dinamica.js');
    //     document.head.appendChild(scriptBuscar);
    // }

    // if (document.getElementById('ver-cliente-script') == null) {
    //     let verCliente = document.createElement('script');
    //     verCliente.setAttribute('id', 'ver-cliente-script');
    //     verCliente.setAttribute('src', 'js/clientes/ver-cliente.js');
    //     document.head.appendChild(verCliente);
    // }

    // if (document.getElementById('mostrar-cliente-script') != null) {
    let scriptMostrarClientes = document.createElement('script');
    scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    document.head.appendChild(scriptMostrarClientes);
    // }

}

function load(url, element) {
    var req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
}