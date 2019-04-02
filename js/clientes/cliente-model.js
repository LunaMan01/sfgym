class Cliente {
    constructor(nombre,apPaterno, apMaterno, edad, sexo, telefono){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.edad = edad;
        this.sexo = sexo;
        this.telefono = telefono;
    }

}


var cliente = new cliente(null,null,null,null,null,null);

function enviarDatos(cliente) {
    req = new XMLHttpRequest();
    req.open("GET", 'php/clientes/add-cliente.php', false);
    req.send(null);
}
