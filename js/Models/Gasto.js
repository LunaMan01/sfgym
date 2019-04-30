class Gasto {
    constructor() {

    }

    add(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/añadirGasto.php', false);
        req.send(data);
        console.log(req.responseText);
        return true;
    }

    eliminar() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/eliminarGastos.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-gasto=' + localStorage.getItem('id'));
        console.log('id='+localStorage.getItem('id'));
        console.log(req.responseText);
        return true;

    }

    modificar(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/modificarGastos.php', false);
        req.send(data);
        console.log(req.responseText);
        return true;
    }

    consultar(datoABuscar) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar);
        return req.responseText;
    }

    getTodosLosGastos() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/gastos/consultarGastos.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

}