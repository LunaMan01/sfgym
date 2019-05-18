function isEmpty(string) {
    return (!string || 0 === string.length);
}

function fechaValida(fecha) {
    if (fecha.length < 10)
        return false;

    console.log('bien');
    return true;
}