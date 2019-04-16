class Cliente {
    constructor(id) {

    }

    add(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/añadirCliente.php', false);
        req.send(data);

        return true;
    }

    eliminar() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/eliminarCliente.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id=' + localStorage.getItem('id'));
        
        
        return true;
        
    }
}