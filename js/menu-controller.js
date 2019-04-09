const inicioLink = document.querySelector('#inicio-link');
const clientesLink = document.querySelector('#clientes-link');
const membresiasLink = document.querySelector('#membresias-link');
const visitasLink = document.querySelector('#visitas-link');
const ventasLink = document.querySelector('#ventas-link');
const productosLink = document.querySelector('#productos-link');
const gastosLink = document.querySelector('#gastos-link');
const aparatosLink = document.querySelector('#aparatos-link');
const comprasLink = document.querySelector('#compras-link');
const reportesLink = document.querySelector('#reportes-link');
const respaldosLink = document.querySelector('#respaldos-link');
const content = document.querySelector('.content');
const divAdicional = document.querySelector('#elementos-adicionales');


const abrirClientes = () => {



    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-clientes').className = 'active';
    load('html/clientes-components/clientes.html', content);


    let addButton = new Button('Añadir cliente', 'add-cliente-btn').getButton();
    let crearReporteButton = new Button('Reporte cliente', 'reporte-cliente-btn').getButton();
    let buscarInput = new SearchInput('buscar-cliente-input').getSearchInput();



    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    let script = document.createElement('script');
    script.setAttribute('src', 'js/clientes/clientes.js');
    script.setAttribute('id', 'clientes-script');
    document.head.appendChild(script);

    

    let scriptEditarCliente = document.createElement('script');
    scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    document.head.appendChild(scriptEditarCliente);

    if (document.getElementById('eliminar-clientes-script') == null) {
        let scriptEliminarCliente = document.createElement('script');
        scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
        scriptEliminarCliente.setAttribute('id', 'eliminar-clientes-script');
        document.head.appendChild(scriptEliminarCliente);

    } else {
        // cargarEventos();
    }

    let scriptMostrarClientes = document.createElement('script');
    scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    document.head.appendChild(scriptMostrarClientes);
    // cargarEventos();
    document.querySelector('#titulo-modulo').textContent = 'Clientes';


};


load('html/inicio.html', content);


inicioLink.addEventListener('click', function () {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-inicio').className = 'active';
    load('html/inicio.html', content);
    document.querySelector('#titulo-modulo').textContent = 'Inicio';
});




clientesLink.addEventListener('click', abrirClientes);


membresiasLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-membresias').className = 'active';
    load('html/membresias-components/membresias.html', content);


    let addButton = new Button('Añadir membresía', 'add-membresia-btn').getButton();
    let crearReporteButton = new Button('Reporte membresia', 'reporte-membresia-btn').getButton();
    let buscarInput = new SearchInput('buscar-membresia-input').getSearchInput();


    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Membresías';
});

visitasLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-visitas').className = 'active';
    load('html/visitas-components/visitas.html', content);

    let addButton = new Button('Añadir visita', 'add-visita-btn').getButton();
    let crearReporteButton = new Button('Crear reporte', 'reporte-membresia-btn').getButton();
    let buscarInput = new SearchInput('buscar-visita-input').getSearchInput();


    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Visitas';
});

ventasLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-ventas').className = 'active';
    load('html/ventas-components/ventas.html', content);

    let addButton = new Button('Añadir venta', 'add-venta-btn').getButton();
    let crearReporteButton = new Button('Crear reporte', 'reporte-ventas-btn').getButton();
    let buscarInput = new SearchInput('buscar-visita-input').getSearchInput();


    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Ventas';
});

productosLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-productos').className = 'active';
    load('html/productos-components/productos.html', content);

    let addButton = new Button('Añadir producto', 'add-producto-btn').getButton();
    let crearReporteButton = new Button('Crear reporte', 'reporte-productos-btn').getButton();
    let buscarInput = new SearchInput('buscar-producto-input').getSearchInput();


    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Productos';
});

gastosLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-gastos').className = 'active';
    load('html/gastos-components/gastos.html', content);

    let addButton = new Button('Añadir producto', 'add-gasto-btn').getButton();
    let crearReporteButton = new Button('Crear reporte', 'reporte-gastos-btn').getButton();
    let buscarInput = new SearchInput('buscar-gasto-input').getSearchInput();


    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Gastos';
});

aparatosLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-aparatos').className = 'active';
    load('html/aparatos-components/aparatos.html', content);

    let addButton = new Button('Añadir aparato', 'add-aparato-btn').getButton();

    let buscarInput = new SearchInput('buscar-aparato-input').getSearchInput();


    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += buscarInput;

    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Aparatos';
});

comprasLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-compras').className = 'active';
    load('html/compras-components/compras.html', content);

    let addButton = new Button('Añadir compras', 'add-compra-btn').getButton();
    let crearReporteButton = new Button('Crear reporte', 'reporte-compras-btn').getButton();
    let buscarInput = new SearchInput('buscar-compra-input').getSearchInput();


    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Compras';
});

reportesLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-reportes').className = 'active';
    load('html/reportes-components/reportes.html', content);


    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Reportes';
});

respaldosLink.addEventListener('click', () => {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-respaldos').className = 'active';
    load('html/respaldos-components/respaldos.html', content);


    // let script = document.createElement('script');
    // script.setAttribute('src', 'js/clientes/clientes.js');
    // script.setAttribute('id', 'clientes-script');
    // document.head.appendChild(script);

    // let scriptMostrarClientes = document.createElement('script');
    // scriptMostrarClientes.setAttribute('src', 'js/clientes/mostrar-clientes.js');
    // document.head.appendChild(scriptMostrarClientes);

    // let scriptEditarCliente = document.createElement('script');
    // scriptEditarCliente.setAttribute('src', 'js/clientes/editar-cliente.js');
    // document.head.appendChild(scriptEditarCliente);

    // let scriptEliminarCliente = document.createElement('script');
    // scriptEliminarCliente.setAttribute('src', 'js/clientes/eliminar-cliente.js');
    // document.head.appendChild(scriptEliminarCliente);

    document.querySelector('#titulo-modulo').textContent = 'Respaldos';
});

function load(url, element) {
    var req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
}

function limpiarDivAdicional() {
    divAdicional.innerHTML = '';
}



