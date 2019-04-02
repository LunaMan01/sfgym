




document.querySelector('#form').addEventListener('submit', function() {
    // var nombre = document.querySelector('#nombre').text;
    // var apPaterno = document.querySelector('#ap-parno').textContent;
    // var apMaterno = document.querySelector('#ap-marno').textContent;
    // var edad = document.querySelector('#edad').textContent;
    // // var telefono = document.querySelector('#telefono');
    // var cliente = {
    //     nombre = nombre,
    //     apPaterno = apPaterno,
    //     apMaterno = apMaterno,
    //     edad = edad
    // };
    var form = document.querySelector('form');
    var data = new FormData(form);
    var req = new XMLHttpRequest();
    req.send(data);
    console.log(req.responseText);
})



function enviarDatos(cliente) {
    req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.send(cliente);
    req.responseText
}
