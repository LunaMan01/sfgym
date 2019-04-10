var id = 0;
function cargarEventoEditar() {
    let iToEdit = document.querySelectorAll('.edit-action');
    iToEdit.forEach(i => {
        i.addEventListener('click', editClient);
    })

   
}

function editClient() {
    
    var i = event.target;
    var td = i.parentNode;
    var tr = td.parentNode;
    var elements = tr.childNodes;
    var th = elements[1];
     id = th.getAttribute('id');
    localStorage.setItem("id", id);
    req = new XMLHttpRequest();
    req.open("POST", 'html/clientes-components/editar-cliente.html', false);
    req.send(null);
    document.querySelector('.content').innerHTML = req.responseText;
    document.getElementById('form-edit-cliente').addEventListener('submit',enviarDatosAModificar);
    getDatosCliente(id);
}



function getDatosCliente(id) {
    var req = new XMLHttpRequest();
    req.open("POST", 'php/clientes/get-datos-cliente.php', false);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var params = 'id=' + id
    req.send(params);
    var elements = req.responseText;
    var cliente = JSON.parse(elements);
    console.log('cliente');
    setDatosClienteEnInputs(cliente);
}

function setDatosClienteEnInputs(cliente) {
    document.querySelector('#nombre').value = cliente.nombre;
    document.querySelector('#ap-parno').value = cliente.apPaterno;
    document.querySelector('#ap-marno').value = cliente.apMaterno;
    document.querySelector('#edad').value = cliente.edad;
    document.querySelector('#telefono').value = cliente.numero;
    document.querySelector('#calle').value = cliente.calle;
    document.querySelector('#num-ext').value = cliente.numeroInterior;
    document.querySelector('#num-int').value = cliente.numeroExterior;
    document.querySelector('#colonia').value = cliente.colonia;
}


function enviarDatosAModificar () {
    document.querySelector('#guardar-cliente-editado').innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Guardando...
    `;
    console.log(id);

    var form = document.querySelector('form');
    var data = new FormData(form);
    data.append('id',id);
    var nombre = document.querySelector('#nombre').value;
    
    if(!isEmpty(nombre.trim())) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/modificarClientes.php',false);
        req.send(data);
        console.log(req.responseText);
        new Toast('Cliente modificado correctamente', 2000, '#mensaje', 'success').show();
        document.querySelector('#guardar-cliente-editado').innerHTML = `
            Guardar
        `;
    } else {
        new Toast('Ingrese al menos un nombre y un apellido paterno',2000,'#mensaje','danger').show();
    }
}

function isEmpty(string) {
    return (!string || 0 === string.length);
}