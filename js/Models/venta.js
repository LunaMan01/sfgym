class Venta {


    add(venta, productos) {
        var req = new XMLHttpRequest();
        
        req.open("POST", 'php/ventas/nuevaVenta.php', false);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send("venta="+encodeURIComponent(JSON.stringify(venta))+"&productos="+encodeURIComponent(JSON.stringify(productos)));
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }
        console.log(req.responseText);
        return true;
    }

    modificar(venta, productos, productosNuevos,  productosEliminadosDeCarrito, idVenta) {
        var req = new XMLHttpRequest();
        console.log('productos viejos = '+JSON.stringify(productos));

        console.log('carr nuevo '+JSON.stringify(productosNuevos));

        console.log('cantidades '+JSON.stringify(cantidades));

        req.open("POST", 'php/ventas/modificarVentas.php', false);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send("venta="+encodeURIComponent(JSON.stringify(venta))+"&productos="+encodeURIComponent(JSON.stringify(productos))+"&id-venta="+idVenta+"&productosNuevos="+encodeURIComponent(JSON.stringify(productosNuevos))+"&eliminados="+JSON.stringify(productosEliminadosDeCarrito));
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }
        console.log(req.responseText);
        return true;
        
    }

    eliminar(id) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/eliminarVenta.php', false);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('id-venta=' + id);
        console.log(localStorage.getItem('id'));
        if (req.responseText != 1) {
            console.log('Error');
            console.log(req.responseText);

            return false;
        }
        console.log(req.responseText);
        return true;

    }

    //Cambiar nombre a select
    consultar(datoABuscar, selectActual) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/consultaDinamica.php', false);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        req.send('dato=' + datoABuscar+"&select-visitas="+selectActual);
        return req.responseText;
    }


    getVentasTodas () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/consultarVentas.php', false);
        
        req.send(null);
        return req.responseText;
    }

    getVentasMes () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/ventasMes.php', false);
        
        req.send(null);
        return req.responseText;
    }

    getVentasDia () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/ventasDia.php', false);
        
        req.send(null);
        return req.responseText;
    }

    getVentasSemana () {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/ventasSemana.php', false);
        
        req.send(null);
        return req.responseText;
    }


    getVenta (id) {
        let data = new FormData();
        data.append('id-venta', id)
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/datosVentas.php', false);
        console.log('id='+id);
        req.send(data);
        console.log(req.responseText);
        let venta = JSON.parse(req.responseText);
        return venta;
    }

    getDetalleVenta (id)  {
        let data = new FormData();
        data.append('id-venta', id)
        console.log('id a enviar'+id);
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/datosVentasProductos.php', false);
        
        req.send(data);
        return req.responseText;
    }

}