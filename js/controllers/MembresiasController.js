var membresiaController = (function () {

    function addNuevaMembresia() {
        let data = UIMembresia.getDatosParaNuevaMembresia();
        let membresia = new Membresia();

        if(membresia.add(data)) {
            UIMembresia.mostrarMensajeExito('Membresía añadida correctamente');
        }
    }


    function setUpEvents() {
        UIMembresia.mostrarTodasLasMembresias();
        document.querySelector('#add-membresia-form').addEventListener('submit', addNuevaMembresia);
        new Lightpick({field: document.getElementById('fecha-inicio')});
        new Lightpick({field: document.getElementById('fecha-fin')});
        

    }

    return {
        init: function () {
            setUpEvents();
        }
    }
})(UIMembresia);

membresiaController.init();