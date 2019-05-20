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