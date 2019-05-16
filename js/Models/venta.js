class Venta {


    add(venta, productos) {
        var req = new XMLHttpRequest();
        req.open("POST", 'php/ventas/nuevaVenta.php', false);
        req.send("venta="+venta+"&productos="+productos);
        console.log(req.responseText);
        return true;
    }

}