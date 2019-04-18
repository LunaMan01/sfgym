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
        document.querySelector('#reporte-membresia-btn').addEventListener('click',UIMembresia.mostrarModal);
    }

    return {
        init: function () {
            setUpEvents();
        }
    }
})(UIMembresia);

membresiaController.init();