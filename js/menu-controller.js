
const inicioLink = document.querySelector('#inicio-link');
const clientesLink = document.querySelector('#clientes-link');
const content = document.querySelector('.content');
const divAdicional = document.querySelector('#elementos-adicionales');





load('html/inicio.html', content);

clientesLink.addEventListener('click', function () {
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-clientes').className = 'active';
    load('html/clientes-components/clientes.html', content);


    let addButton = '<div class="d-flex"><button class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 rounded-pill" type="button" id="add-cliente-btn">Añadir cliente</button></div>';
    let crearReporteButton = '<div class="d-flex"><button class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 rounded-pill" type="submit" id="reporte-cliente-btn">Crear reporte</button><div>';
    let buscarInput = '<div class"d-flex mr-5"><input class="form-control mr-sm-2  rounded-pill search" type="search" placeholder="Search" aria-label="Search" id="buscar-cliente-input"></div>';



    divAdicional.innerHTML += addButton;
    divAdicional.innerHTML += crearReporteButton;
    divAdicional.innerHTML += buscarInput;

    let script = document.createElement('script');
    script.setAttribute('src', 'js/clientes/clientes.js');
    script.setAttribute('id', 'clientes-script');
    document.head.appendChild(script);

    document.querySelector('#titulo-modulo').textContent = 'Clientes';
});

inicioLink.addEventListener('click', function () {
    document.head.removeChild(document.querySelector('#clientes-script'));

    document.querySelector('#add-cliente-btn').remove();


    divAdicional.innerHTML = '';
    limpiarDivAdicional();
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#li-inicio').className = 'active';
    load('html/inicio.html', content);
    document.querySelector('#titulo-modulo').textContent = 'Inicio';
});

function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
}

function limpiarDivAdicional() {
    divAdicional.innerHTML = '';
}