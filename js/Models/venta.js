class Venta {


    add(venta, productos) {
        var req = new XMLHttpRequest();
        
        req.open("POST", 'php/ventas/nuevaVenta.php', false);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send("venta="+venta+"&productos="+productos);
        console.log(req.responseText);
        return true;
    }

}