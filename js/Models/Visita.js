class Visita {
    constructor() {

    }

    add(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/añadirVisitas.php', false);
        req.send(data);
        console.log('added');
        return true;
    }

    eliminar() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/eliminarVisitas.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id=' + localStorage.getItem('id'));
        console.log('id='+localStorage.getItem('id'));
        console.log(req.responseText);
        return true;

    }

    modificar(data) {
        console.log(data);
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/modificarVisita.php', false);
        req.send(data);
        console.log(req.responseText);
        return true;
    }

    consultar(datoABuscar) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar);
        return req.responseText;
    }
}