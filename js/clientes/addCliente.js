class Cliente {
    constructor(nombre,apPaterno, apMaterno, edad, telefono){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.edad = edad;
        
        this.telefono = telefono;
    }

}


let nombre = document.querySelector('#nombre').text;
let apPaterno = document.querySelector('#ap-parno').textContent;
let apMaterno = document.querySelector('#ap-marno').textContent;
let edad = document.querySelector('#edad').textContent;
//let sexo = document.querySelector('#sexo');
let telefono = document.querySelector('#telefono');

document.querySelector('#form').addEventListener('submit', function() {
    var cliente = new Cliente(nombre, apPaterno, apMaterno, edad, sexo, telefono);
    console.log(cliente);
    console.log('fdsfs');
})



function enviarDatos(cliente) {
    req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.send(cliente);
}
