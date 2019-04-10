console.log('vercliente');
var id = 0;
function cargarEventoVer() {
    console.log('event-ver');
    let itoSee = document.querySelectorAll('.watch-action');
    itoSee.forEach(i => {
        i.addEventListener('click', seeClient);
    })

   
}

function seeClient() {
    
    var i = event.target;
    var td = i.parentNode;
    var tr = td.parentNode;
    var elements = tr.childNodes;
    var th = elements[1];
     id = th.getAttribute('id');
    localStorage.setItem("id", id);
    req = new XMLHttpRequest();
    // req.open("POST", 'html/clientes-components/editar-cliente.html', false);
    // req.send(null);
    // document.querySelector('.content').innerHTML = req.responseText;
    // document.getElementById('form-edit-cliente').addEventListener('submit',enviarDatosAModificar);
    getDatosClienteAver(id);
}



function getDatosClienteAver(id) {
    var req = new XMLHttpRequest();
    req.open("POST", 'php/clientes/get-datos-cliente.php', false);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var params = 'id=' + id
    req.send(params);
    var elements = req.responseText;
    var cliente = JSON.parse(elements);
    console.log('cliente');
    renderCliente(cliente);
}

function renderCliente(cliente) {
    var vista = new VistaCliente(cliente.nombre, cliente.apPaterno, cliente.apMaterno, 
        cliente.edad, cliente.numero, 
        cliente.calle, cliente.numeroExterior, cliente.numeroInterior, cliente.colonia).render();
    document.querySelector('.content').innerHTML = vista;
    // document.querySelector('#nombre').value = cliente.nombre;
    // document.querySelector('#ap-parno').value = cliente.apPaterno;
    // document.querySelector('#ap-marno').value = cliente.apMaterno;
    // document.querySelector('#edad').value = cliente.edad;
    // document.querySelector('#telefono').value = cliente.numero;
    // document.querySelector('#calle').value = cliente.calle;
    // document.querySelector('#num-ext').value = cliente.numeroInterior;
    // document.querySelector('#num-int').value = cliente.numeroExterior;
    // document.querySelector('#colonia').value = cliente.colonia;
}
