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

    function addScriptsAparatos() {
        if (document.getElementById('aparatos-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/controllers/AparatosController.js');
            script.setAttribute('id', 'aparatos-script');
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

    function addScriptsReportes() {
        if (document.getElementById('reportes-script') == null) {
            let script = document.createElement('script');
            script.setAttribute('src', 'js/app/reportes.js');
            script.setAttribute('id', 'reportes-script');
            document.head.appendChild(script);
        }
    }


    function setUpInicio() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/inicio.php', false);
        req.send(null);


        let res = req.responseText;
        let responses = res.split("||");

        var inicio = JSON.parse(responses[0]);

        document.querySelector('#clientes-activos-label').innerHTML = inicio.activo;
        document.querySelector('#visitas-label').innerHTML = inicio.visitas;
        document.querySelector('#count-membresias').innerHTML = inicio.membresias;
        document.querySelector('#cuerpo-tabla-inicio').innerHTML = responses[1];
    }


    return {


        abrirInicio: function () {
            console.log('Abriendo inicio');
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.inicio).className = 'active';
            load('html/inicio.html', content);
            setUpInicio();
        },

        abrirClientes: function () {
            console.log('Abriendo Clientes');
            document.querySelector('.modal-container').innerHTML = modalCliente;
            addScriptsClientes();
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.clientes).className = 'active';
            load('html/clientes-components/clientes.html', content);
            addBotones('Añadir cliente', 'Generar reporte', 'add-cliente-btn', 'reporte-cliente-btn', 'buscar-cliente-input');
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
            addBotones('Añadir membresía', 'Generar reporte', 'add-membresia-btn', 'reporte-membresia-btn', 'buscar-membresia-input');
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
            addBotones('Añadir visita', 'Generar reporte', 'add-visita-btn', 'reporte-visita-btn', 'buscar-visita-input');
            document.querySelector('#add-visita-btn').setAttribute('data-target', '#add-visita-modal');
            document.querySelector('#add-visita-btn').setAttribute('data-toggle', 'modal');
            if (typeof visitaController !== 'undefined')
                visitaController.init();
        },

        abrirProductos: function () {
            document.querySelector('.modal-container').innerHTML = modalsProductos;
            limpiarDivAdicional();
            addScriptsProductos();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.productos).className = 'active';
            load('html/productos-components/productos.html', content);
            addBotones('Añadir producto', 'Generar reporte', 'add-producto-btn', 'reporte-producto-btn', 'buscar-producto-input');
            // document.querySelector('#add-producto-btn').setAttribute('data-target', '#add-producto-modal');
            // document.querySelector('#add-producto-btn').setAttribute('data-toggle', 'modal');
            document.querySelector('#add-producto-btn').classList.add('d-none');
            if (typeof productoController !== 'undefined')
                productoController.init();
        },

        abrirVentas: function () {
            document.querySelector('.modal-container').innerHTML = modalsVentas;
            limpiarDivAdicional();
            addScriptsVentas();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.ventas).className = 'active';
            load('html/ventas-components/ventas.html', content);
            addBotones('Añadir venta', 'Generar reporte', 'add-venta-btn', 'reporte-venta-btn', 'buscar-venta-input');
            if (typeof ventaController !== 'undefined')
                ventaController.init();
        },

        abrirGastos: function () {
            document.querySelector('.modal-container').innerHTML = modalsGastos;
            limpiarDivAdicional();
            addScriptsGastos();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.gastos).className = 'active';
            load('html/gastos-components/gastos.html', content);
            addBotones('Añadir gasto', 'Generar reporte', 'add-gasto-btn', 'reporte-gasto-btn', 'buscar-gasto-input');
            document.querySelector('#add-gasto-btn').setAttribute('data-target', '#add-gasto-modal');
            document.querySelector('#add-gasto-btn').setAttribute('data-toggle', 'modal');
            if (typeof gastoController !== 'undefined')
                gastoController.init();
        },

        abrirAparatos: function () {
            document.querySelector('.modal-container').innerHTML = modalsAparatos;
            limpiarDivAdicional();
            addScriptsAparatos();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.aparatos).className = 'active';
            load('html/aparatos-components/aparatos.html', content);
            addBotones('Añadir aparato', '', 'add-aparato-btn', 'reporte-aparato-btn', 'buscar-aparato-input');
            document.querySelector('#add-aparato-btn').setAttribute('data-target', '#add-aparato-modal');
            document.querySelector('#add-aparato-btn').setAttribute('data-toggle', 'modal');
            document.querySelector('#add-aparato-btn').classList.add('d-none');
            document.getElementById('reporte-aparato-btn').classList.add('d-none');
            if (typeof aparatoController !== 'undefined')
                aparatoController.init();
        },

        abrirCompras: function () {
            document.querySelector('.modal-container').innerHTML = modalsCompras;
            limpiarDivAdicional();
            addScriptsCompras();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.compras).className = 'active';
            load('html/compras-components/compras.html', content);
            addBotones('Añadir compra', 'Generar reporte', 'add-compra-btn', 'reporte-compra-btn', 'buscar-compra-input');
            document.querySelector('#add-compra-btn').setAttribute('data-target', '#add-compra-modal');
            document.querySelector('#add-compra-btn').setAttribute('data-toggle', 'modal');
            if (typeof compraController !== 'undefined')
                compraController.init();
        },

        abrirReportes: function () {
            addScriptsReportes();
            
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.reportes).className = 'active';
            load('html/reportes-components/reportes.html', content);
            if (typeof  ReportesController !== 'undefined')
                ReportesController.init();


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

    function restaurarYRespaldar() {
        UI.abrirRespaldo();
        document.querySelector('#generar-respaldo-form').addEventListener('submit', () => {
            console.log('gen');
            
            window.open('php/generarRespaldo.php');
        });

        document.querySelector('#restaurar-form').addEventListener('submit', () => {
            console.log('restaurando');
            let archivo = $('#seleccion-archivo').prop('files')[0];

            let form = document.querySelector('#restaurar-form');
            let formData = new FormData(form);

        
            // formData.append(form);
            
            let req = new XMLHttpRequest();
            req.open('POST', 'php/restaurar.php', false);
            
            // req.setRequestHeader('Content-type', 'text/plain');
            req.send(formData);
            console.log(req.responseText);

        //     // fetch('php/restaurar.php', {
        //     //     method: 'POST',
        //     //     body: formData,
        //     //   }).then(response => {
        //     //     console.log(response)
        //     //   })
        });
    }


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
    document.querySelector(Links.respaldos).addEventListener('click', restaurarYRespaldar);




    UI.abrirInicio();
}(UIController));






function load(url, element) {
    var req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
}