const Links = {
    inicio: '#inicio-link',
    clientes: '#clientes-link',
    membresias: '#membresias-link'
}
const Li = {
    clientes: '#li-clientes',
    inicio: '#li-inicio',
    membresias: '#li-membresias'
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
    //     if (document.getElementById(idBtnAdd) == null)
    //     divAdicional.innerHTML += new Button('Añadir cliente', 'add-cliente-btn').getButton();

    // divAdicional.innerHTML += new Button('Reporte cliente', 'reporte-cliente-btn').getButton();
    // divAdicional.innerHTML += new SearchInput('buscar-cliente-input').getSearchInput();
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
            addBotones('Añadir cliente', 'Reporte clientes','add-cliente-btn','reporte-cliente-btn','buscar-cliente-input');
            if (typeof clienteController !== 'undefined')
                clienteController.init();
        },

        // TODO
        abrirMembresias: function () {
            document.querySelector('.modal-container').innerHTML = modalsMembresias.modal('add-membresia-modal', 'add-membresia-form','Añadir membresía');
            addScriptsMembresias();
            limpiarDivAdicional();
            document.querySelector(CSSClasses.active).classList.remove('active');
            document.querySelector(Li.membresias).className = 'active';
            load('html/membresias-components/membresias.html', content);
            addBotones('Añadir membresía','Reporte membresía','add-membresia-btn','reporte-membresia-btn','buscar-membresia-input');
            document.querySelector('#add-membresia-btn').setAttribute('data-target','#add-membresia-modal');
            document.querySelector('#add-membresia-btn').setAttribute('data-toggle','modal');
            if (typeof membresiaController !== 'undefined')
                membresiaController.init();
        }

        

    }

}());


var controller = (function (UI) {
    var abrirInicio = UI.abrirInicio;
    var abrirClientes = UI.abrirClientes;
    var abrirMembresias = UI.abrirMembresias;

    document.querySelector(Links.inicio).addEventListener('click', abrirInicio);
    document.querySelector(Links.clientes).addEventListener('click', abrirClientes);
    document.querySelector(Links.membresias).addEventListener('click',abrirMembresias);
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