function isEmpty(string) {
    return (!string || 0 === string.length);
}

function aceptarSoloNumeros(event) {
    if (event.keyCode >= 37 && event <= 40)
        return true;
    if (event.keyCode == 8)
        return true;
    if (!(event.keyCode >= 96 && event.keyCode <= 105))
        event.preventDefault();
}

function limitarLongitud(maxLength, currentLength, event) {
    if (event.keyCode >= 37 && event.keyCode <= 40)
        return true;
    if (event.keyCode == 8)
        return true;
    if (currentLength > maxLength)
        event.preventDefault();
}

function telefonoValido(tel) {
    return tel > 0 && tel < 10 ?  false : true;
}