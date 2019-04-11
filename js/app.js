const Links = {
    inicio: '#inicio-link',
    clientes: '#clientes-link',
}
const Li = {
    clientes: '#li-clientes',
    inicio: '#li-inicio'
}

const CSSClasses = {
    active: '.active',

}

const divAdicional = document.querySelector('#elementos-adicionales');

var menuController = (function () {

}());


var UIController = (function () {

    return {

        abrirInicio: function () {
            console.log('Abriendo inicio');
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.inicio).className = 'active';
        },

        abrirClientes: function () {
            console.log('Abriendo Clientes');
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.clientes).className = 'active';
            addBotonesClientes();
            addScriptsClientes();

        },


    }

}());


var controller = (function (UI, menu) {
    var abrirInicio = UI.abrirInicio;
    var abrirClientes = UI.abrirClientes;

    document.querySelector(Links.inicio).addEventListener('click', abrirInicio);
    document.querySelector(Links.clientes).addEventListener('click', abrirClientes);
}(UIController, menuController));


function limpiarDivAdicional() {
    divAdicional.innerHTML = '';
    console.log('lim');
}

function addBotonesClientes() {
    divAdicional.innerHTML += new Button('Añadir cliente', 'add-cliente-btn').getButton();
    divAdicional.innerHTML += new Button('Reporte cliente', 'reporte-cliente-btn').getButton();
    divAdicional.innerHTML += new SearchInput('buscar-cliente-input').getSearchInput();
}

function addScriptsClientes () {
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