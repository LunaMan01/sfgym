function mostrarClientes() {
    var spinner = '<div class="d-flex mt-3">'+
    '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>'+
    '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div>'+
    '<div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div></div>';
    document.querySelector('#cuerpo-tabla-clientes').innerHTML = spinner;
    var req = new XMLHttpRequest();
    req.open("POST", 'php/clientes/consultarClientes.php', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    req.send('opcion='+1);
    document.querySelector('#cuerpo-tabla-clientes').innerHTML = req.responseText;   
    
    cargarEventos();
    cargarEventoEditar();
    cargarEventoBuscar();
    cargarEventoVer();
}

mostrarClientes();

document.querySelector('#todos-clientes-btn').addEventListener('click', function(){
    document.querySelector('#dropdown-clientes').textContent = 'Todos los clientes';
    document.querySelectorAll('.d-none').forEach(function(element){
        element.classList.remove('d-none');
    })
    this.classList.add('d-none');
    req.open("POST", 'php/clientes/consultarClientes.php', false);
    req.send('opcion='+1);
    document.querySelector('#cuerpo-tabla-clientes').innerHTML = req.responseText;

});


document.querySelector('#clientes-inactivos-btn').addEventListener('click', function(){
    document.querySelector('#dropdown-clientes').textContent = 'Clientes Inactivos';
    document.querySelectorAll('.d-none').forEach(function(element){
        element.classList.remove('d-none');
    })
    this.classList.add('d-none');
    req.open("POST", 'php/clientes/consultarClientes.php', false);
    req.send('opcion='+2);
    document.querySelector('#cuerpo-tabla-clientes').innerHTML = req.responseText;
});


document.querySelector('#clientes-activos-btn').addEventListener('click', function(){
    document.querySelector('#dropdown-clientes').textContent = 'Clientes activos';
    document.querySelectorAll('.d-none').forEach(function(element){
        element.classList.remove('d-none');
    })
    this.classList.add('d-none');
    req.open("POST", 'php/clientes/consultarClientes.php', false);
    req.send('opcion='+3);
    document.querySelector('#cuerpo-tabla-clientes').innerHTML = req.responseText;
});

document.querySelector('#clientes-nomem-btn').addEventListener('click', function(){
    document.querySelector('#dropdown-clientes').textContent = 'Clientes sin membresía';
    document.querySelectorAll('.d-none').forEach(function(element){
        element.classList.remove('d-none');
    })
    this.classList.add('d-none');
    req.open("POST", 'php/clientes/consultarClientes.php', false);
    req.send('opcion='+4);
    document.querySelector('#cuerpo-tabla-clientes').innerHTML = req.responseText;
});
