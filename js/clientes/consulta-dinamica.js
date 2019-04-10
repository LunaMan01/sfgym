console.log('bus');

function cargarEventoBuscar() {
    document.querySelector('#buscar-cliente-input').addEventListener('keyup', buscar);
}

function buscar() {
    console.log('s');
    let datoABuscar = document.querySelector('#buscar-cliente-input').value;
    console.log(datoABuscar);
    var req = new XMLHttpRequest();
    
    req.open("POST", 'php/clientes/consultaDinamica.php', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    req.send('dato='+datoABuscar);
    
    document.querySelector('#cuerpo-tabla-clientes').innerHTML = req.responseText; 
}