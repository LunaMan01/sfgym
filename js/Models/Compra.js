class Compra {
    constructor() {

    }

    add(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/añadirCompras.php', false);
        req.send(data);
        console.log(req.responseText);
        return true;
    }

    eliminar() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/eliminarCompras.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-compra=' + localStorage.getItem('id'));
        console.log('id='+localStorage.getItem('id'));
        console.log(req.responseText);
        return true;

    }

    modificar(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/modificarCompras.php', false);
        req.send(data);
        console.log(req.responseText);
        return true;
    }

    consultar(datoABuscar) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar);
        return req.responseText;
    }

    getTodosLasCompras() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/consultarCompras.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

    reporte(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/reportes.php', false);
        // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(data);
        console.log(req.responseText);
        return req.responseText;
    }

}