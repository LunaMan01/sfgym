class Venta {


    add(venta, productos) {
        var req = new XMLHttpRequest();
        
        req.open("POST", 'php/ventas/nuevaVenta.php', false);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send("productos="+encodeURIComponent(JSON.stringify(productos)));
        console.log(req.responseText);
        return true;
    }

}