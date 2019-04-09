// var elementsToBindEvent = document.querySelectorAll('.delete-action');
// for (var i = 0; i < elementsToBindEvent.length; i++) {
//     elementsToBindEvent[i].addEventListener('click', getIdCliente);
// }
// var id = 0;
// var tr = null;
// console.log('1');
function cargarEventos() {
    let iElements = document.querySelectorAll('.delete-action');
    
    iElements.forEach(i => {
        i.addEventListener('click', getIdCliente);
    })
    
    console.log('cargar events');
    return true
}

cargarEventos();

function getIdCliente() {
    var i = event.target;
    var td = i.parentNode;
    tr = td.parentNode;
    console.log(tr);
    var elements = tr.childNodes;
    var th = elements[1];
    id = th.getAttribute('id');


}


function eliminarCliente() {
    var req = new XMLHttpRequest();
    req.open("POST", 'php/clientes/eliminarCliente.php', false);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send('id=' + id);
    tr.remove();
    new Toast('Cliente eliminado correctamente', 2000, '#mensaje', 'success').show();

}


document.querySelector('#confirmar-eliminacion').addEventListener('click', eliminarCliente);

