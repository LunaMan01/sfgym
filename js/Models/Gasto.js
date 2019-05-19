class Gasto {
    constructor() {

    }

    add(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/añadirGasto.php', false);
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
        req.open("POST", 'php/gastos/eliminarGastos.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-gasto=' + localStorage.getItem('id'));
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
        req.open("POST", 'php/gastos/modificarGastos.php', false);
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
        req.open("POST", 'php/gastos/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar+"&select-gastos="+selectActual);
        return req.responseText;
    }

    getTodosLosGastos() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/consultarGastos.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

    getGastosMes () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/gastosMes.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

    getGastosDia () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/gastosDia.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

    getGastosSemana () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/gastosSemana.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

    reporte(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/reportes.php', false);
        // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(data);
        return req.responseText;
    }

}