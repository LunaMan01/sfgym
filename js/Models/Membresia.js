class Membresia {
    constructor() {

    }

    add(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/membresias/añadirMembresia.php', false);
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
        req.open("POST", 'php/membresias/eliminarMembresias.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-membresia=' + localStorage.getItem('id'));
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }
        console.log(req.responseText);
        return true;

    }

    modificar(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/membresias/modificarMembresia.php', false);
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
        req.open("POST", 'php/membresias/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar+"&select-membresias="+selectActual);
        return req.responseText;
    }

    reporte(data) {
        console.log('memb rep');
        var req = new XMLHttpRequest();
        req.open("POST", 'php/membresias/reportes.php', false);
        
        req.send(data);
        console.log('reporte membresia dice: '+req.responseText);
        return req.responseText;
    }

    getVigentes () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/membresias/consultarVigentes.php', false);
        
        req.send(null);
        return req.responseText;
    }

    getTodas () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/membresias/consultarMembresias.php', false);
        
        req.send(null);
        return req.responseText;
    }
}