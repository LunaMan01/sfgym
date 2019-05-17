class Venta {


    add(venta, productos) {
        var req = new XMLHttpRequest();
        
        req.open("POST", 'php/ventas/nuevaVenta.php', false);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send("venta="+encodeURIComponent(JSON.stringify(venta))+"&productos="+encodeURIComponent(JSON.stringify(productos)));
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
}