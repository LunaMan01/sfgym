function isEmpty(string) {
    return (!string || 0 === string.length);
}

function fechaValida(fecha) {
    if (fecha.length < 10)
        return false;

    console.log('bien');
    return true;
}

let teclaAnterior = '';
function teclear(event) {
    
    teclaAnterior = teclaAnterior + " " + event.keyCode;
    var arregloTA = teclaAnterior.split(" ");
    if (event.keyCode == 32 && arregloTA[arregloTA.length - 2] == 32) {
      event.preventDefault();
    }
    
  }