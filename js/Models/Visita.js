class Visita {
    constructor() {

    }

    add(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/añadirVisitas.php', false);
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
        req.open("POST", 'php/visitas/eliminarVisita.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-visita=' + localStorage.getItem('id'));
        console.log('id-visita='+localStorage.getItem('id'));
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

    consultar(datoABuscar, selectActual) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar+"&select-visitas="+selectActual);
        return req.responseText;
    }

    reporte(data) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/reportes.php', false);
        // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(data);
        console.log(req.responseText);
        return req.responseText;
    }

    getVisitasDelDia() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/visitasDia.php', false);
        req.send(null);
        return req.responseText;
    }

    getVisitasDelMes() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/visitasMes.php', false);
       
        req.send(null);
        return req.responseText;
    }

    getVisitasDeSemana () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/visitas/visitasSemana.php', false);
        req.send(null);
        return req.responseText;
    }
}