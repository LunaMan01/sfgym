var elements = document.querySelectorAll('.delete-action');
var id = 0;
var tr = null;
function getIdCliente () {
    var i = event.target;
    var td = i.parentNode;
    tr = td.parentNode;
    var elements = tr.childNodes;
    var th = elements[1];
    id = th.getAttribute('id');
    
}

function eliminarCliente() {
    var req = new XMLHttpRequest();
    req.open("POST", 'php/clientes/eliminarCliente.php', false);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send('id='+id);
    tr.remove();
    new Toast('Cliente eliminado correctamente',2000,'#mensaje', 'success').show();
   
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', getIdCliente, false);
}

document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarCliente);
   
