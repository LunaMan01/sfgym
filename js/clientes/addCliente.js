document.querySelector('#form').addEventListener('submit', () => {
    document.querySelector('#guardar-cliente').innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Guardando...
    `;

    // console.log(document.querySelector('#nombre').text);
    var form = document.querySelector('form');
    var data = new FormData(form);
    var nombre = document.querySelector('#nombre').value;
    var apPaterno = document.querySelector('#ap-parno').value;
    if(!isEmpty(nombre.trim())) {
        console.log('ffd');
        var req = new XMLHttpRequest();
        req.open("POST", 'php/clientes/añadirCliente.php', false);
        req.send(data);
        console.log(req.responseText);
        new Toast('Cliente añadido correctamente', 2000, '#mensaje', 'success').show();
        document.querySelector('#guardar-cliente').innerHTML = `
            Guardar
        `;
    } else {
        new Toast('Ingrese al menos un nombre y un apellido paterno',2000,'#mensaje','danger').show();
    }
})

document.querySelector('#cancelar-cliente').addEventListener('click', () => {
    load('html/clientes-components/clientes.html', document.querySelector('.content'));
    mostrarClientes();
});

function isEmpty(string) {
    return (!string || 0 === string.length);
}