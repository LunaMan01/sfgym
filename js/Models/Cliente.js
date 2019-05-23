class Cliente {
    constructor(id) {

    }

    add(data, genero) {
        data.append('genero', genero)
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/añadirCliente.php', false);
        req.send(data);
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }
        console.log(req.responseText);
        return true;
    }

    eliminar() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/eliminarCliente.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-cliente=' + localStorage.getItem('id'));
        console.log(localStorage.getItem('id'));
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }
        console.log(req.responseText);
        return true;

    }

    modificar(data, genero) {
        data.append('genero', genero);
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/modificarClientes.php', false);
        req.send(data);
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }
        console.log(req.responseText);
        return true;
        
    }

    consultar(datoABuscar, selectActual) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar+"&select-clientes="+selectActual);
        return req.responseText;
    }

    getActivos() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/consultaActivos.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('opcion=' + 1);
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

    reporte(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/reporte.php', false);
        // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(data);
        return req.responseText;
    }
}