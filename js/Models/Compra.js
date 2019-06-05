class Compra {
    constructor() {

    }

    add(compra, productosNuevos) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/añadirCompras.php', false);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send('compra='+encodeURIComponent(JSON.stringify(compra))+"&productos-nuevos="+encodeURIComponent(JSON.stringify(productosNuevos)));
        // if (req.responseText != 1) {
        //     console.log('Error');
            console.log(req.responseText);

        //     return true;
        // }
        console.log(req.responseText);
        return true;
    }

    add(compra, aparatos) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/añadirCompras.php', false);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send('compra='+encodeURIComponent(JSON.stringify(compra))+"&aparatos="+encodeURIComponent(JSON.stringify(aparatos)));
        // if (req.responseText != 1) {
        //     console.log('Error');
            console.log(req.responseText);

        //     return true;
        // }
        console.log(req.responseText);
        return true;
    }

    addExistente(data,opcion, id, cantidad, descripcion) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/añadirCompras.php', false);
        data.append('compras', opcion);
        data.append('id', id);
        data.append('cantidad', cantidad);
        data.append('descripcion-compra', descripcion);
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
        req.open("POST", 'php/compras/eliminarCompras.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-compra=' + localStorage.getItem('id'));
        console.log('id=' + localStorage.getItem('id'));
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
        req.open("POST", 'php/compras/modificarCompras.php', false);
        req.send(data);
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }

        console.log('jalo');
        return true;
    }

    consultar(datoABuscar, selectActual) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar + "&select-compras=" + selectActual);
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


    getTodosLasCompras() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/consultarCompras.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send(null);
        return req.responseText;
    }

    getComprasMes() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/comprasMes.php', false);
        req.send(null);
        return req.responseText;
    }

    getComprasSemana() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/comprasSemana.php', false);
        req.send(null);
        return req.responseText;
    }

    getComprasDia() {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/compras/comprasDia.php', false);
        req.send(null);
        return req.responseText;
    }
}