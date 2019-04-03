document.querySelector('.edit-action').addEventListener('click', (event) => {
    // req = new XMLHttpRequest();
    // req.open("POST", 'html/clientes-components/editar-cliente.html', false);
    // req.send(null);
    // document.querySelector('.content').innerHTML = req.responseText;

    var i = event.target;
    var td = i.parentNode;
    var tr = td.parentNode;
    
    var elements = tr.childNodes;
    var id = elements[1];
    console.log(id.text());
})

