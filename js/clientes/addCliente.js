


var nombre = document.querySelector('#nombre').text;
var apPaterno = document.querySelector('#ap-parno').textContent;
var apMaterno = document.querySelector('#ap-marno').textContent;
var edad = document.querySelector('#edad').textContent;
//let sexo = document.querySelector('#sexo');
var telefono = document.querySelector('#telefono');

document.querySelector('#form').addEventListener('submit', function() {
    var cliente = new Cliente(nombre, apPaterno, apMaterno, edad, telefono);
    console.log(cliente);
    console.log('aaa');
})



function enviarDatos(cliente) {
    req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.send(cliente);
}
