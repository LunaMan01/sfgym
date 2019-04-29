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
        req.send('id-cliente=' + localStorage.getItem('id'));
        console.log(localStorage.getItem('id'));

        return true;

    }

    modificar(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/modificarClientes.php', false);
        req.send(data);
        console.log(req.responseText);
        return true;
    }

    consultar(datoABuscar) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar);
        return req.responseText;
    }

    getInactivos() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/consultaInactivos.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

    getTodos() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/consultarClientes.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }
}